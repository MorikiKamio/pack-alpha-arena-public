import fs from 'node:fs';
import path from 'node:path';
import { encodeFunctionData, keccak256, toHex } from 'viem';

import {
  demoUsdcAbi,
  demoUsdcBytecode,
  packAlphaArenaAbi,
  packAlphaArenaBytecode
} from './packAlphaArenaArtifact.js';
import { buildPackAlphaRound, getPackAlphaAsset, runNetEdgeRouter } from './packAlphaEngine.js';

const fallbackPackAlphaArenaAbi = [
  {
    type: 'function',
    name: 'commitDecision',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'decisionHash', type: 'bytes32' },
      { name: 'assetId', type: 'string' },
      { name: 'action', type: 'string' },
      { name: 'venue', type: 'string' },
      { name: 'expectedNetEdgeBps', type: 'int256' },
      { name: 'receiptHash', type: 'bytes32' }
    ],
    outputs: [{ name: 'commitId', type: 'bytes32' }]
  },
  {
    type: 'event',
    name: 'DecisionCommitted',
    inputs: [
      { name: 'commitId', type: 'bytes32', indexed: true },
      { name: 'decisionHash', type: 'bytes32', indexed: true },
      { name: 'trader', type: 'address', indexed: true },
      { name: 'assetId', type: 'string', indexed: false },
      { name: 'action', type: 'string', indexed: false },
      { name: 'venue', type: 'string', indexed: false },
      { name: 'expectedNetEdgeBps', type: 'int256', indexed: false },
      { name: 'receiptHash', type: 'bytes32', indexed: false },
      { name: 'timestamp', type: 'uint256', indexed: false }
    ]
  }
] as const;

function readPackAlphaArtifact() {
  if (process.env.VERCEL === '1') {
    return null;
  }

  const artifactPath = path.join(process.cwd(), 'out/PackAlphaArena.sol/PackAlphaArena.json');
  try {
    return JSON.parse(fs.readFileSync(artifactPath, 'utf8')) as {
      abi?: unknown;
      bytecode?: { object?: string };
    };
  } catch {
    return null;
  }
}

export function getPackAlphaOnchainConfig() {
  const artifact = readPackAlphaArtifact();
  return {
    network: {
      chainIdDecimal: 10143,
      chainIdHex: '0x279f',
      chainName: 'Monad Testnet',
      rpcUrls: ['https://testnet-rpc.monad.xyz'],
      nativeCurrency: {
        name: 'MON',
        symbol: 'MON',
        decimals: 18
      },
      blockExplorerUrls: ['https://testnet.monadexplorer.com']
    },
    contract: {
      address: process.env.PACK_ALPHA_ARENA_ADDRESS ?? null,
      abi: artifact?.abi ?? packAlphaArenaAbi ?? fallbackPackAlphaArenaAbi,
      bytecode: artifact?.bytecode?.object ?? packAlphaArenaBytecode,
      commitDecisionSelector: '0x936ba9b9'
    },
    demoUsdc: {
      address: process.env.PACK_ALPHA_DEMO_USDC_ADDRESS ?? null,
      name: 'Pack Alpha Demo USDC',
      symbol: 'paUSDC',
      decimals: 6,
      abi: demoUsdcAbi,
      bytecode: demoUsdcBytecode
    }
  };
}

function asBytes32(hash: string) {
  return hash.startsWith('0x') ? (hash as `0x${string}`) : (`0x${hash}` as `0x${string}`);
}

function hashText(value: string) {
  return keccak256(toHex(value));
}

function getPackAlphaAbi() {
  const artifact = readPackAlphaArtifact();
  return (artifact?.abi ?? packAlphaArenaAbi ?? fallbackPackAlphaArenaAbi) as Parameters<typeof encodeFunctionData>[0]['abi'];
}

export function getPackAlphaOnchainDemoFlow(options?: { demoUsdcAddress?: string | null }) {
  const abi = getPackAlphaAbi();
  const round = buildPackAlphaRound();
  const decision = runNetEdgeRouter('asset-charizard-151-psa10') ?? round.bestDecision;
  const decisionAsset = getPackAlphaAsset(decision.assetId);
  const config = getPackAlphaOnchainConfig();
  const demoUsdcAddress =
    options?.demoUsdcAddress ?? config.demoUsdc.address ?? '0x0000000000000000000000000000000000000001';
  const demoRunId = `${round.roundId}-${Date.now()}`;
  const decisionHash = asBytes32(decision.decisionHash);
  const receiptHash = hashText(`receipt:${demoRunId}:${decision.decisionHash}`);
  const batchId = hashText(`valuation:${demoRunId}`);
  const valuationRoot = hashText(JSON.stringify(round.decisions.map((item) => item.usedValuationHashes)));
  const strategyHash = hashText(
    JSON.stringify({
      agentId: 'Vault Scout',
      strategy: 'Concierge Vault Router',
      roundId: demoRunId,
      selectedAssetId: decision.assetId,
      decisionHash: decision.decisionHash
    })
  );
  const outcomeHash = hashText('Vault Scout');
  const intentId = hashText(`intent:${demoRunId}:${decision.decisionHash}`);
  const roundId = hashText(demoRunId);
  const resultHash = hashText(
    JSON.stringify({
      roundId: demoRunId,
      winningAgentId: 'Vault Scout',
      decisionHash: decision.decisionHash
    })
  );
  const predictionCommitId = hashText(`prediction:${demoRunId}:winner:Vault Scout`);
  const expectedNetEdgeBps = BigInt(Math.round(decision.expectedNetEdgePct * 100));
  const realizedPnlUsdE6 = BigInt(Math.round(decision.expectedNetValueUsd * 1_000_000));
  const notionalAmountE6 = BigInt(Math.round((decisionAsset?.fairValueUsd ?? 0) * 1_000_000));

  const steps = [
    {
      id: 'valuation-root',
      label: 'Publish valuation root',
      functionName: 'publishValuationRoot',
      data: encodeFunctionData({
        abi,
        functionName: 'publishValuationRoot',
        args: [batchId, valuationRoot, BigInt(Math.floor(Date.now() / 1000)), 'local://pack-alpha/valuation-batch']
      })
    },
    {
      id: 'strategy-commit',
      label: 'Commit concierge strategy',
      functionName: 'commitStrategy',
      data: encodeFunctionData({
        abi,
        functionName: 'commitStrategy',
        args: ['Vault Scout', demoRunId, strategyHash]
      })
    },
    {
      id: 'prediction-commit',
      label: 'Commit user order thesis',
      functionName: 'commitPrediction',
      data: encodeFunctionData({
        abi,
        functionName: 'commitPrediction',
        args: [demoRunId, 'winner', outcomeHash]
      })
    },
    {
      id: 'decision-commit',
      label: 'Commit purchase or vault action',
      functionName: 'commitDecision',
      data: encodeFunctionData({
        abi,
        functionName: 'commitDecision',
        args: [
          decisionHash,
          decision.assetId,
          decision.action,
          decision.preferredVenue ?? 'review',
          expectedNetEdgeBps,
          receiptHash
        ]
      })
    },
    {
      id: 'execution-receipt',
      label: 'Record paUSDC order receipt',
      functionName: 'recordTokenExecutionReceipt',
      data: encodeFunctionData({
        abi,
        functionName: 'recordTokenExecutionReceipt',
        args: [
          intentId,
          decisionHash,
          receiptHash,
          demoUsdcAddress,
          notionalAmountE6,
          realizedPnlUsdE6
        ]
      })
    },
    {
      id: 'round-settle',
      label: 'Settle order flow',
      functionName: 'settleRound',
      data: encodeFunctionData({
        abi,
        functionName: 'settleRound',
        args: [roundId, 'Vault Scout', resultHash]
      })
    },
    {
      id: 'agent-score',
      label: 'Update concierge score',
      functionName: 'updateAgentScore',
      data: encodeFunctionData({
        abi,
        functionName: 'updateAgentScore',
        args: ['Vault Scout', 1700n, 6200n, 900n, 1440n]
      })
    },
    {
      id: 'prediction-settle',
      label: 'Settle order thesis',
      functionName: 'settlePrediction',
      data: encodeFunctionData({
        abi,
        functionName: 'settlePrediction',
        args: [predictionCommitId, 'Vault Scout', 100n]
      })
    }
  ];

  return {
    roundId: demoRunId,
    decisionHash,
    receiptHash,
    settlementToken: {
      address: demoUsdcAddress,
      symbol: config.demoUsdc.symbol,
      decimals: config.demoUsdc.decimals,
      notionalAmount: notionalAmountE6.toString(),
      basis: decisionAsset?.valuationBasis ?? 'Source-backed market value'
    },
    requiredContractFunctions: steps.map((step) => step.functionName),
    steps
  };
}
