# Pack Alpha Concierge Vault

Pack Alpha is a Monad hackathon project for AI-assisted Pokemon card procurement, cross-border vault custody, NFT-style ownership receipts, physical redemption, and marketplace resale.

The product is not trying to pretend that Pokemon card liquidity already exists on Monad. Instead, it brings the real offchain Pokemon card market to Monad users: the agent finds regional opportunities across Japan, the US, Singapore, Hong Kong, Dubai, and Europe, routes purchases through a concierge flow, records user-approved actions on Monad, and lets the user manage vaulted inventory from a profile screen.

Live demo:

- Landing page: https://pack-alpha-arena.vercel.app/pack-alpha
- Concierge app: https://pack-alpha-arena.vercel.app/pack-alpha/app
- Profile vault: https://pack-alpha-arena.vercel.app/pack-alpha/profile
- Repository: https://github.com/MorikiKamio/pack-alpha-arena-public

## Why This Exists

Pokemon cards are volatile, narrative-driven, and cross-border. That makes them weak as conservative collateral, but interesting as short-to-medium-term collectible alpha.

The product thesis comes from a real operator insight:

- Team Rocket boxes x10, White Flare boxes x50, and Black Bolt boxes x50 were bought in Japan.
- Over six months, secondary prices moved to roughly 3x purchase cost.
- A Brooklyn card shop showed comparable Japanese cards at about 2-2.5x Japan pricing.

Pack Alpha turns that spread into an agent workflow: source globally, verify prices, route custody, and record user-approved actions on Monad.

## Product Surface

- `Picked Up` shelf with real Pokemon card and sealed box imagery.
- Card / box detail flow with regional price board for Japan, Singapore, Hong Kong, the US, Dubai, and Holland.
- In-app `Buy` flow using demo paUSDC purchase tickets, instead of sending users away to marketplaces.
- Wallet connect and sign-in flow for Monad user authorization.
- AI procurement agent for eBay, Mercari, SNKRDUNK, Cardrush, Dubizzle, and regional venues.
- Source-backed valuation snapshots with no fake executable ask prices.
- Net Edge Router for max bid, marketplace fees, logistics, seller risk, and downside reserve.
- Profile vault screen showing owned cards, market value, custody state, and available actions.
- Tokenise and redemption demo flows for vaulted items.
- Sell options from profile: eBay, SNKRDUNK, Dubizzle, and Mercari, each with estimated ask, fees, net proceeds, confidence, and listing ticket generation.
- Multi-region vault concept: US, Japan, Singapore, Dubai, and Holland.
- Monad testnet contract deployment, order commit, receipt recording, and full demo calldata flow.
- Demo paUSDC token for order settlement when real testnet USDC is inconvenient.

## Agent Model

The agent is a procurement decision agent, not a market maker and not an autonomous custodian.

1. Market Scout: find regional listings for requested cards, packs, or boxes.
2. Valuation Verify: compare sold comps, source-backed benchmarks, grade, language, and condition.
3. Net Edge Router: calculate max bid after marketplace fees, concierge fee, cross-border logistics, vault cost, and downside reserve.
4. Human Approval: require approval for high-value, thin-liquidity, low-confidence, or custody-changing actions.
5. Vault Router: route approved purchases into US, Japan, Singapore, Dubai, or Holland custody.
6. Resale Router: recommend eBay, SNKRDUNK, Dubizzle, or Mercari based on expected net proceeds after venue fees and regional liquidity.
7. Monad Recorder: commit valuation roots, order intents, custody receipts, tokenization actions, resale intents, and redemption requests.

Every purchase action requires a fresh executable listing or concierge quote. Displayed market values are benchmarks, not guaranteed profit or investment advice.

## Demo Flows

### Buy

1. Open the concierge app.
2. Pick a card, pack, or box from the top shelf.
3. Open the item detail screen.
4. Review regional pricing and agent rationale.
5. Connect wallet and sign in.
6. Press `Buy` to create a paUSDC concierge purchase ticket.
7. Commit the order intent to the Monad vault ledger.

### Profile Vault

1. Open the profile vault.
2. Select an owned item.
3. Review custody status, market value, basis, and benchmark sources.
4. Choose `Tokenise` to prepare an NFT-style ownership receipt.
5. Choose `Redeem` to request physical delivery.
6. Choose a sell route to prepare a resale listing packet.

### Sell

1. Select an owned item in the profile vault.
2. Compare `Sell on eBay`, `Sell on SNKRDUNK`, `Sell on Dubizzle`, and `Sell on Mercari`.
3. Review estimated ask, marketplace fees, estimated net, and confidence.
4. Click a venue to create a sell action ticket.
5. The ticket locks the listing intent on Monad and queues human review for photos, pricing, and fulfillment route.

## Onchain Flow

The demo uses Monad testnet and includes deployable Solidity artifacts.

Core contract:

- `contracts/PackAlphaArena.sol`

Demo settlement token:

- `contracts/DemoUSDC.sol`

Main onchain actions exposed in the app:

- `publishValuationRoot`
- `commitStrategy`
- `commitPrediction`
- `commitDecision`
- `recordTokenExecutionReceipt`
- `settleRound`
- `updateAgentScore`
- `settlePrediction`

Useful API endpoints:

- `GET /api/pack-alpha/assets`
- `GET /api/pack-alpha/profile`
- `GET /api/pack-alpha/picked-up`
- `GET /api/pack-alpha/assets/:assetId/decision`
- `POST /api/pack-alpha/intents`
- `GET /api/pack-alpha/purchase-orders`
- `POST /api/pack-alpha/purchase-orders`
- `POST /api/pack-alpha/vault-actions`
- `POST /api/pack-alpha/sell-actions`
- `GET /api/pack-alpha/onchain/config`
- `GET /api/pack-alpha/onchain/demo-flow`

## Local Development

```bash
npm install
npm run build
npm run test
npm run dev
```

Local URLs:

- Landing page: http://localhost:3000/pack-alpha
- Concierge app: http://localhost:3000/pack-alpha/app
- Profile vault: http://localhost:3000/pack-alpha/profile

## Monad Testnet Setup

For browser-signed demo flows, connect an EVM wallet to Monad testnet:

```text
Chain ID: 10143
RPC: https://testnet-rpc.monad.xyz
Symbol: MON
Explorer: https://testnet.monadexplorer.com
```

For local deploy scripts:

```bash
cp .env.example .env
# add PRIVATE_KEY and optionally MONAD_TESTNET_RPC_URL
npm run deploy:pack-alpha:full-flow
```

The app can also deploy `PackAlphaArena` and `Pack Alpha Demo USDC` from the browser wallet for hackathon demo purposes.

## Common Commands

```bash
npm run dev
npm run build
npm run test
npm run deploy:pack-alpha:full-flow
```

## Project Structure

- `src/api/packAlphaAppPage.ts`: interactive Pack Alpha GUI.
- `src/api/packAlphaProfilePage.ts`: profile vault, tokenise, redeem, and sell option GUI.
- `src/api/packAlphaPage.ts`: pitch / landing page.
- `src/api/packAlphaEngine.ts`: asset data, picked-up shelf, profile holdings, valuation hashes, Net Edge Router, purchase tickets, vault tickets, and sell tickets.
- `src/api/packAlphaOnchain.ts`: Monad config and calldata generation.
- `contracts/PackAlphaArena.sol`: onchain receipt and settlement contract.
- `contracts/DemoUSDC.sol`: demo settlement token.
- `docs/submission.md`: hackathon submission copy and demo checklist.
- `docs/pack-alpha-vercel-deploy.md`: deployment notes.

## Verification

Current expected checks:

```bash
npm run build
npm run test
```

The public repository keeps verification intentionally small: TypeScript build must pass, and the UI/API can be run locally with `npm run dev`.

## Important Notes

- This is a hackathon demo, not investment advice.
- Displayed card values are source-backed benchmarks, not live executable asks.
- Sealed box images are product imagery for UX context; purchase decisions still require fresh market quotes.
- Resale options are estimated routes. Final listing price, fees, and settlement require marketplace-specific confirmation.
- User wallet signatures are expected for onchain actions. Do not put private keys in Vercel unless a deliberate server-side deploy flow is added.
