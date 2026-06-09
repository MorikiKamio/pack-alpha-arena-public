# Pack Alpha Hackathon Submission

## Form Fields

### Project Image

Upload this file:

`outputs/pack-alpha-submission/pack-alpha-submission-image.png`

PNG, 1600 x 900, under 4 MB.

### Project Title

Pack Alpha Concierge

### Category

NFT, RWA, AI Agent

### Description

Pack Alpha Concierge is a Monad-native AI concierge for global Pokemon card procurement, vaulted ownership, tokenised receipts, and physical redemption.

Users can pick a card or sealed box, compare source-backed and region-estimated prices across Japan, Singapore, HK, US, and Dubai, then request an in-app paUSDC purchase order. The agent routes procurement across markets such as eBay, Mercari, Sneaker Dunk, Cardrush, Dubizzle, and regional dealers, rejects fake asks, preserves valuation evidence, and queues human-approved purchase requests instead of sending users out to external marketplaces.

After acquisition, users can open their Profile Vault to see already-owned cards in custody, including market value, cost basis, custody location, NFT receipt status, and regional price board. From the profile screen, a user can select an item and create either a tokenisation ticket for an NFT-style vault receipt or a redemption ticket for insured physical delivery.

Monad is used as the action ledger for wallet-approved order intents, valuation roots, agent decisions, vault receipt flows, tokenisation, and redemption. The demo uses paUSDC, a demo USDC-like token, so the hackathon flow works even when testnet USDC is inconvenient.

The product thesis comes from real cross-border Pokemon card spreads: Japanese sealed boxes and cards can move sharply over short to medium horizons, while US and Dubai retail prices often sit materially above Japan sourcing prices. Pack Alpha turns that spread into a wallet-native collectible procurement and vault workflow.

### Short Description

Monad-native AI concierge for Pokemon card procurement, regional price routing, paUSDC purchase requests, vaulted ownership, tokenised receipts, and physical redemption.

### Tweet URL

Optional. Add the launch tweet URL after posting.

### GitHub URL

https://github.com/MorikiKamio/pack-alpha-arena

### Demo URL

https://pack-alpha-arena.vercel.app/pack-alpha/app

### Backup / Profile URL

https://pack-alpha-arena.vercel.app/pack-alpha/profile

### Landing Page URL

https://pack-alpha-arena.vercel.app/pack-alpha

## Demo Flow

1. Open the app URL and click a picked-up card or box.
2. Review the item detail modal with Japan, Singapore, HK, US, and Dubai prices.
3. Click `Buy` to create a paUSDC purchase order inside Pack Alpha.
4. Open the Profile URL.
5. Review owned vaulted cards and select an item.
6. Click `Connect wallet`, then `Sign in`.
7. Click `Tokenise receipt` to create a vault receipt ticket.
8. Click `Redeem physical` to create a physical redemption ticket.

## Current Working Demo Proof

- `Buy` creates a `paUSDC order`.
- Profile vault shows 4 owned cards.
- `Connect wallet` falls back to the demo wallet when no browser wallet is available.
- `Tokenise receipt` creates a tokenisation ticket.
- `Redeem physical` creates a redemption ticket.
- Laptop and mobile profile layouts have been checked for horizontal overflow.

## Demo Wallet

`0xeBf8c12A6Ebc94143baf2c8506CFCBD2BE7B5D33`

Used as a demo fallback wallet for hackathon judging if no injected wallet is available.

## Notes For Judges

Pack Alpha does not claim guaranteed profit. It is an execution and custody workflow that preserves sources, labels estimated regional quotes clearly, requires human approval for high-value actions, and records wallet-approved actions on Monad.
