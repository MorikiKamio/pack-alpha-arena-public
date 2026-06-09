# Pack Alpha Vercel Deploy Notes

## Vercel Readiness

The Pack Alpha app is served by the existing Express serverless entrypoint:

- App: `/pack-alpha/app`
- LP: `/pack-alpha`
- Onchain config: `/api/pack-alpha/onchain/config`
- Full onchain flow calldata: `/api/pack-alpha/onchain/demo-flow`

The `PackAlphaArena` ABI and bytecode are embedded in `src/api/packAlphaArenaArtifact.ts`, so Vercel does not need Foundry or the local `out/` directory at runtime.

## Required Environment Variables

For the web app:

```text
PACK_ALPHA_ARENA_ADDRESS=0x...
PACK_ALPHA_DEMO_USDC_ADDRESS=0x...
```

For local deploy scripts only:

```text
PRIVATE_KEY=
MONAD_TESTNET_RPC_URL=https://testnet-rpc.monad.xyz
```

Do not set `PRIVATE_KEY` in Vercel unless a server-side deploy action is intentionally added. The current production path expects users to sign from their wallet in the browser.

## Deploy Flow

1. Fund the deployer wallet on Monad testnet.
2. Run:

```bash
npm run deploy:pack-alpha:full-flow
```

3. Copy the deployed `PACK_ALPHA_ARENA_ADDRESS` and `PACK_ALPHA_DEMO_USDC_ADDRESS` from `.env.local`.
4. Set the same addresses in Vercel:

```bash
vercel env add PACK_ALPHA_ARENA_ADDRESS production
vercel env add PACK_ALPHA_DEMO_USDC_ADDRESS production
```

5. Deploy the app:

```bash
vercel deploy --prod
```

6. Run QA:

```bash
QA_BASE_URL=https://<deployment-url> npm run qa:vercel
```

## QA Checks

The Vercel QA script checks:

- `/pack-alpha/app` renders
- Wallet and full onchain flow buttons are present
- onchain config returns Monad chain ID, ABI, and bytecode
- demo-flow returns eight calldata steps
