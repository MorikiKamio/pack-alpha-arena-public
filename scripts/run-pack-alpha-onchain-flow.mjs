import fs from 'node:fs';
import { createPublicClient, createWalletClient, formatEther, formatUnits, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

const envPath = '.env.local';
const appBaseUrl = process.env.PACK_ALPHA_APP_URL ?? 'http://localhost:3000';
const monadTestnet = {
  id: 10143,
  name: 'Monad Testnet',
  nativeCurrency: { name: 'MON', symbol: 'MON', decimals: 18 },
  rpcUrls: {
    default: { http: [process.env.MONAD_TESTNET_RPC_URL ?? 'https://testnet-rpc.monad.xyz'] }
  }
};

function loadLocalEnv() {
  if (!fs.existsSync(envPath)) return;
  const text = fs.readFileSync(envPath, 'utf8');
  for (const line of text.split(/\r?\n/)) {
    if (!line || line.trim().startsWith('#') || !line.includes('=')) continue;
    const [key, ...rest] = line.split('=');
    process.env[key] ||= rest.join('=').trim();
  }
}

function upsertEnv(key, value) {
  const current = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
  const line = `${key}=${value}`;
  const next = new RegExp(`^${key}=.*$`, 'm').test(current)
    ? current.replace(new RegExp(`^${key}=.*$`, 'm'), line)
    : `${current}${current.endsWith('\n') || !current ? '' : '\n'}${line}\n`;
  fs.writeFileSync(envPath, next, { mode: 0o600 });
}

async function fetchJson(path, options) {
  const response = await fetch(`${appBaseUrl}${path}`, options);
  if (!response.ok) {
    throw new Error(`${options?.method ?? 'GET'} ${path} failed: ${response.status}`);
  }
  return response.json();
}

loadLocalEnv();

if (!process.env.PRIVATE_KEY) {
  throw new Error('PRIVATE_KEY is required in .env.local');
}

const account = privateKeyToAccount(process.env.PRIVATE_KEY);
const publicClient = createPublicClient({
  chain: monadTestnet,
  transport: http(monadTestnet.rpcUrls.default.http[0])
});
const walletClient = createWalletClient({
  account,
  chain: monadTestnet,
  transport: http(monadTestnet.rpcUrls.default.http[0])
});

const balance = await publicClient.getBalance({ address: account.address });
console.log(`Pack Alpha deployer: ${account.address}`);
console.log(`Balance: ${formatEther(balance)} MON`);

if (balance === 0n) {
  throw new Error(`Fund ${account.address} with Monad testnet MON before deploying.`);
}

const config = await fetchJson('/api/pack-alpha/onchain/config');
let contractAddress = process.env.PACK_ALPHA_ARENA_ADDRESS || config.contract.address;
let demoUsdcAddress = process.env.PACK_ALPHA_DEMO_USDC_ADDRESS || config.demoUsdc.address;
let receiptNftAddress = process.env.PACK_ALPHA_RECEIPT_NFT_ADDRESS || config.receiptNft.address;

if (!contractAddress) {
  if (!config.contract.bytecode) {
    throw new Error('PackAlphaArena bytecode missing. Run forge build first.');
  }

  console.log('Deploying PackAlphaArena...');
  const deployHash = await walletClient.deployContract({
    abi: config.contract.abi,
    bytecode: config.contract.bytecode,
    account
  });
  console.log(`Deploy tx: ${deployHash}`);
  const deployReceipt = await publicClient.waitForTransactionReceipt({ hash: deployHash });
  contractAddress = deployReceipt.contractAddress;
  if (!contractAddress) {
    throw new Error('Deploy receipt did not include contractAddress');
  }
  upsertEnv('PACK_ALPHA_ARENA_ADDRESS', contractAddress);
  console.log(`PackAlphaArena deployed: ${contractAddress}`);
} else {
  console.log(`Using PackAlphaArena: ${contractAddress}`);
}

if (!demoUsdcAddress) {
  if (!config.demoUsdc.bytecode) {
    throw new Error('DemoUSDC bytecode missing. Run forge build first.');
  }

  console.log('Deploying Pack Alpha Demo USDC...');
  const tokenDeployHash = await walletClient.deployContract({
    abi: config.demoUsdc.abi,
    bytecode: config.demoUsdc.bytecode,
    args: [account.address],
    account
  });
  console.log(`DemoUSDC deploy tx: ${tokenDeployHash}`);
  const tokenReceipt = await publicClient.waitForTransactionReceipt({ hash: tokenDeployHash });
  demoUsdcAddress = tokenReceipt.contractAddress;
  if (!demoUsdcAddress) {
    throw new Error('DemoUSDC deploy receipt did not include contractAddress');
  }
  upsertEnv('PACK_ALPHA_DEMO_USDC_ADDRESS', demoUsdcAddress);
  console.log(`Pack Alpha Demo USDC deployed: ${demoUsdcAddress}`);
} else {
  console.log(`Using Pack Alpha Demo USDC: ${demoUsdcAddress}`);
}

if (!receiptNftAddress) {
  if (!config.receiptNft.bytecode) {
    throw new Error('PackAlphaVaultReceiptNFT bytecode missing. Run forge build first.');
  }

  console.log('Deploying Pack Alpha Vault Receipt NFT...');
  const receiptNftDeployHash = await walletClient.deployContract({
    abi: config.receiptNft.abi,
    bytecode: config.receiptNft.bytecode,
    account
  });
  console.log(`Receipt NFT deploy tx: ${receiptNftDeployHash}`);
  const receiptNftReceipt = await publicClient.waitForTransactionReceipt({ hash: receiptNftDeployHash });
  receiptNftAddress = receiptNftReceipt.contractAddress;
  if (!receiptNftAddress) {
    throw new Error('Receipt NFT deploy receipt did not include contractAddress');
  }
  upsertEnv('PACK_ALPHA_RECEIPT_NFT_ADDRESS', receiptNftAddress);
  console.log(`Pack Alpha Vault Receipt NFT deployed: ${receiptNftAddress}`);
} else {
  console.log(`Using Pack Alpha Vault Receipt NFT: ${receiptNftAddress}`);
}

const tokenBalance = await publicClient.readContract({
  address: demoUsdcAddress,
  abi: config.demoUsdc.abi,
  functionName: 'balanceOf',
  args: [account.address]
});
console.log(`paUSDC balance: ${formatUnits(tokenBalance, config.demoUsdc.decimals)} ${config.demoUsdc.symbol}`);

const flow = await fetchJson(`/api/pack-alpha/onchain/demo-flow?demoUsdcAddress=${demoUsdcAddress}`);
const txs = [];

for (const step of flow.steps) {
  console.log(`Sending ${step.label} (${step.functionName})...`);
  const hash = await walletClient.sendTransaction({
    account,
    to: contractAddress,
    data: step.data
  });
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  txs.push({
    id: step.id,
    functionName: step.functionName,
    hash,
    blockNumber: receipt.blockNumber.toString(),
    status: receipt.status
  });
  console.log(`  ${hash} (${receipt.status})`);
}

const mintPayload = await fetchJson('/api/pack-alpha/onchain/receipt-mint', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({
    holdingId: 'holding-pikachu-greyfelt-psa10',
    ownerAddress: account.address
  })
});

const existingTokenId = await publicClient.readContract({
  address: receiptNftAddress,
  abi: config.receiptNft.abi,
  functionName: 'tokenByReceiptHash',
  args: [mintPayload.receiptHash]
});

if (existingTokenId > 0n) {
  console.log(`Vault receipt NFT already minted as token #${existingTokenId.toString()}`);
  txs.push({
    id: 'vault-receipt-nft-mint',
    functionName: 'mintReceipt',
    hash: null,
    blockNumber: null,
    status: 'already_minted',
    tokenId: existingTokenId.toString(),
    contractAddress: receiptNftAddress,
    receiptHash: mintPayload.receiptHash
  });
} else {
  console.log(`Minting vault receipt NFT (${mintPayload.holdingId})...`);
  const mintHash = await walletClient.sendTransaction({
    account,
    to: receiptNftAddress,
    data: mintPayload.data
  });
  const mintReceipt = await publicClient.waitForTransactionReceipt({ hash: mintHash });
  txs.push({
    id: 'vault-receipt-nft-mint',
    functionName: 'mintReceipt',
    hash: mintHash,
    blockNumber: mintReceipt.blockNumber.toString(),
    status: mintReceipt.status,
    contractAddress: receiptNftAddress,
    receiptHash: mintPayload.receiptHash
  });
  console.log(`  ${mintHash} (${mintReceipt.status})`);
}

fs.mkdirSync('tmp', { recursive: true });
fs.writeFileSync(
  'tmp/pack-alpha-onchain-flow.json',
  JSON.stringify(
    {
      chainId: monadTestnet.id,
      account: account.address,
      contractAddress,
      demoUsdcAddress,
      receiptNftAddress,
      roundId: flow.roundId,
      settlementToken: flow.settlementToken,
      txs
    },
    null,
    2
  )
);

console.log('Full Pack Alpha onchain flow complete.');
console.log('Wrote tmp/pack-alpha-onchain-flow.json');
