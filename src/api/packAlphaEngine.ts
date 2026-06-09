import { createHash, randomUUID } from 'node:crypto';

export type PackAlphaVenue =
  | 'vault_buyback'
  | 'ebay'
  | 'tcgplayer'
  | 'whatnot'
  | 'comc'
  | 'slab'
  | 'collector_crypt'
  | 'mercari_jp'
  | 'sneaker_dunk'
  | 'cardrush'
  | 'dubizzle'
  | 'opensea'
  | 'vault_operator';

export type PackAlphaRegion = 'US' | 'Japan' | 'Singapore' | 'HK' | 'Dubai' | 'Holland';

export type PackAlphaRegionalPrice = {
  region: PackAlphaRegion;
  valueUsd: number;
  status: 'source-backed benchmark' | 'estimated regional quote' | 'executable ask';
  sourceLabel: string;
  sourceUrl: string;
  observedAt: string;
  basis: string;
  confidenceScore: number;
};

export type PackAlphaValuationSource = {
  label: string;
  url: string;
  priceUsd: number;
  observedAt: string;
  basis: string;
};

export type PackAlphaAction =
  | 'request_purchase'
  | 'tokenize'
  | 'buy'
  | 'sell'
  | 'buyback'
  | 'redeem'
  | 'grade'
  | 'hold'
  | 'avoid'
  | 'human_review';

export type PackAlphaAsset = {
  id: string;
  name: string;
  setName: string;
  cardNumber?: string;
  language: 'en' | 'jp';
  grade: 'raw' | 'PSA10' | 'PSA9' | 'CGC10' | 'BGS9_5';
  condition: 'mint' | 'near_mint' | 'light_play';
  mode: 'procurement_target' | 'vault_item' | 'owned' | 'listing' | 'pack_pull';
  theme: string;
  imageUrl: string;
  imageAlt: string;
  imageSourceLabel: string;
  imageSourceUrl: string;
  costBasisUsd?: number;
  askUsd?: number;
  targetMaxBidUsd?: number;
  instantBuybackUsd?: number;
  fairValueUsd: number;
  exitValueUsd: number;
  upsideValueUsd: number;
  liquidityScore: number;
  confidenceScore: number;
  volatilityScore: number;
  momentumScore: number;
  sourceCount: number;
  recentCompCount: number;
  newestSourceAt: string;
  valuationStatus: 'source_backed';
  valuationBasis: string;
  valuationSources: PackAlphaValuationSource[];
  regionalPriceBoard: PackAlphaRegionalPrice[];
  targetMarkets: PackAlphaRegion[];
  procurementVenues: PackAlphaVenue[];
  agentInstruction: string;
  vaultState?: 'wanted' | 'researching' | 'ordered' | 'stored' | 'tokenized' | 'redeem_requested';
  custodyLocation?: 'US' | 'Japan' | 'Singapore' | 'Dubai' | 'Holland' | 'Tokyo';
  nftStatus?: 'not_tokenized' | 'ready_to_mint' | 'listed';
  searchUrls: Array<{
    venue: PackAlphaVenue;
    label: string;
    url: string;
  }>;
  sellerRiskScore?: number;
  demoTag: string;
  demoNote: string;
  gradeProbabilities?: {
    p10: number;
    p9: number;
    p8OrLower: number;
  };
};

export type PackAlphaPickedUpItem = {
  id: string;
  name: string;
  kind: 'card' | 'pack' | 'box';
  setName: string;
  status: 'scouting' | 'vaulted' | 'quote_required' | 'watchlist';
  region: 'US' | 'Japan' | 'Singapore' | 'Dubai' | 'Holland';
  imageUrl: string;
  imageAlt: string;
  sourceLabel: string;
  sourceUrl: string;
  note: string;
  linkedAssetId?: string;
  valuationSources?: PackAlphaValuationSource[];
  regionalPriceBoard?: PackAlphaRegionalPrice[];
};

export type PackAlphaExecutionQuote = {
  quoteId: string;
  assetId: string;
  venue: PackAlphaVenue;
  route:
    | 'procurement_request'
    | 'vault_tokenize'
    | 'vault_redeem'
    | 'buy_pack'
    | 'buyback'
    | 'redeem'
    | 'list_external'
    | 'sweep_external'
    | 'grade'
    | 'hold';
  action: PackAlphaAction;
  side: 'buy' | 'sell' | 'redeem' | 'hold' | 'tokenize';
  label: string;
  grossValueUsd: number;
  feesUsd: number;
  frictionUsd: number;
  expectedNetValueUsd: number;
  expiresAt: string;
  confidenceScore: number;
  liquidityScore: number;
  simulated: boolean;
  reasonCodes: string[];
  quoteHash: string;
};

export type PackAlphaDecision = {
  assetId: string;
  action: PackAlphaAction;
  preferredVenue?: PackAlphaVenue;
  maxBidUsd?: number;
  minAskUsd?: number;
  expectedNetEdgePct: number;
  expectedNetValueUsd: number;
  confidenceScore: number;
  liquidityScore: number;
  downsideReserveUsd: number;
  timeStopAt?: string;
  priceStopUsd?: number;
  humanApprovalRequired: boolean;
  reasonCodes: string[];
  usedQuoteIds: string[];
  usedValuationHashes: string[];
  decisionHash: string;
  routeRanking: PackAlphaExecutionQuote[];
};

export type PackAlphaIntent = {
  intentId: string;
  assetId: string;
  action: PackAlphaAction;
  venue?: PackAlphaVenue;
  quoteId?: string;
  decisionHash: string;
  status: 'simulated' | 'requires_approval' | 'ready';
  createdAt: string;
  receiptHash: string;
};

export type PackAlphaAgentRun = {
  runId: string;
  mode: 'agent_mode';
  selectedAssetId: string;
  scannedCount: number;
  candidateCount: number;
  generatedAt: string;
  decision: PackAlphaDecision;
  intent: PackAlphaIntent;
  checks: string[];
};

export type PackAlphaPurchaseOrder = {
  orderId: string;
  itemId: string;
  assetId?: string;
  itemName: string;
  itemSetName: string;
  walletAddress?: string;
  settlementToken: 'paUSDC';
  status: 'quote_required' | 'wallet_signature_required' | 'ready_for_onchain_commit';
  maxAuthorizationUsd?: number;
  quoteRequired: boolean;
  intent?: PackAlphaIntent;
  receiptHash: string;
  createdAt: string;
  notes: string[];
};

export type PackAlphaProfileHolding = {
  holdingId: string;
  assetId: string;
  name: string;
  setName: string;
  cardNumber?: string;
  language: 'en' | 'jp';
  grade: PackAlphaAsset['grade'];
  custodyLocation: PackAlphaRegion;
  vaultState: 'stored' | 'tokenized' | 'redeem_requested';
  nftStatus: 'ready_to_mint' | 'listed' | 'not_tokenized';
  acquiredAt: string;
  costBasisUsd: number;
  marketValueUsd: number;
  imageUrl: string;
  imageAlt: string;
  valuationBasis: string;
  regionalPriceBoard: PackAlphaRegionalPrice[];
  availableActions: Array<'tokenize' | 'redeem'>;
  sellOptions: PackAlphaSellOption[];
  receiptHash: string;
};

export type PackAlphaSellOption = {
  venue: 'ebay' | 'sneaker_dunk' | 'dubizzle' | 'mercari_jp';
  label: string;
  region: PackAlphaRegion;
  grossAskUsd: number;
  estimatedFeesUsd: number;
  estimatedNetUsd: number;
  confidenceScore: number;
  basis: string;
};

export type PackAlphaVaultActionTicket = {
  ticketId: string;
  holdingId: string;
  assetId: string;
  action: 'tokenize' | 'redeem';
  status: 'wallet_signature_required' | 'requires_approval' | 'ready_for_onchain_commit';
  walletAddress?: string;
  createdAt: string;
  expectedFeeUsd: number;
  custodyLocation: PackAlphaRegion;
  receiptHash: string;
  steps: Array<{
    label: string;
    status: 'done' | 'active' | 'pending';
  }>;
  notes: string[];
};

export type PackAlphaSellActionTicket = {
  ticketId: string;
  holdingId: string;
  assetId: string;
  venue: PackAlphaSellOption['venue'];
  label: string;
  status: 'wallet_signature_required' | 'requires_approval' | 'ready_for_listing';
  walletAddress?: string;
  createdAt: string;
  grossAskUsd: number;
  estimatedNetUsd: number;
  custodyLocation: PackAlphaRegion;
  receiptHash: string;
  steps: Array<{
    label: string;
    status: 'done' | 'active' | 'pending';
  }>;
  notes: string[];
};

type Threshold = {
  requiredEdgePct: number;
  confidence: number;
  liquidity: number;
};

const thresholds = {
  liquidGradedBuy: { requiredEdgePct: 12, confidence: 0.75, liquidity: 0.7 },
  liquidRawBuy: { requiredEdgePct: 15, confidence: 0.7, liquidity: 0.65 },
  packLoop: { requiredEdgePct: 18, confidence: 0.7, liquidity: 0.6 },
  thinGrail: { requiredEdgePct: 30, confidence: 0.8, liquidity: 0.45 },
  externalSweep: { requiredEdgePct: 22, confidence: 0.75, liquidity: 0.6 },
  grading: { requiredEdgePct: 25, confidence: 0.8, liquidity: 0.5 }
} satisfies Record<string, Threshold>;

const now = new Date('2026-06-09T05:00:00.000Z');

const assets: PackAlphaAsset[] = [
  {
    id: 'asset-charizard-151-psa10',
    name: 'Charizard ex SIR',
    setName: 'Scarlet & Violet 151',
    cardNumber: '199/165',
    language: 'en',
    grade: 'PSA10',
    condition: 'mint',
    mode: 'procurement_target',
    theme: 'Charizard',
    imageUrl: 'https://images.pokemontcg.io/sv3pt5/199_hires.png',
    imageAlt: 'Charizard ex Special Illustration Rare card from Scarlet & Violet 151',
    imageSourceLabel: 'PokemonTCG API',
    imageSourceUrl: 'https://pokemontcg.io/',
    targetMaxBidUsd: 1480,
    fairValueUsd: 1700,
    exitValueUsd: 1645.99,
    upsideValueUsd: 1750,
    liquidityScore: 0.84,
    confidenceScore: 0.86,
    volatilityScore: 0.62,
    momentumScore: 0.34,
    sourceCount: 3,
    recentCompCount: 8,
    newestSourceAt: '2026-05-31T00:00:00.000Z',
    valuationStatus: 'source_backed',
    valuationBasis: 'PSA 10 source-backed market snapshot, not an executable ask.',
    valuationSources: [
      {
        label: 'PriceCharting',
        url: 'https://www.pricecharting.com/game/pokemon-scarlet-%26-violet-151/charizard-ex-199',
        priceUsd: 1638,
        observedAt: '2026-06-09',
        basis: 'PSA 10 sold-comp market guide'
      },
      {
        label: 'TCGscreener',
        url: 'https://tcgscreener.com/pokemon/151/charizard-ex-199',
        priceUsd: 1645.99,
        observedAt: '2026-06-09',
        basis: 'PSA 10 per-grade pricing'
      },
      {
        label: 'Guardian TCG',
        url: 'https://guardiantcg.app/pokemon/151/charizard-ex-006',
        priceUsd: 1750,
        observedAt: '2026-06-09',
        basis: 'PSA 10 price snapshot'
      }
    ],
    regionalPriceBoard: [
      {
        region: 'Japan',
        valueUsd: 1510,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting anchor + Japan liquidity haircut',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-scarlet-%26-violet-151/charizard-ex-199',
        observedAt: '2026-06-09',
        basis: 'US PSA 10 benchmark less 8% for English-card Japan route liquidity.',
        confidenceScore: 0.7
      },
      {
        region: 'Singapore',
        valueUsd: 1725,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting anchor + SG collector premium',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-scarlet-%26-violet-151/charizard-ex-199',
        observedAt: '2026-06-09',
        basis: 'US PSA 10 benchmark plus 5% regional import and dealer spread.',
        confidenceScore: 0.66
      },
      {
        region: 'HK',
        valueUsd: 1690,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting anchor + HK dealer spread',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-scarlet-%26-violet-151/charizard-ex-199',
        observedAt: '2026-06-09',
        basis: 'US PSA 10 benchmark plus 3% Hong Kong desk spread.',
        confidenceScore: 0.66
      },
      {
        region: 'US',
        valueUsd: 1638,
        status: 'source-backed benchmark',
        sourceLabel: 'PriceCharting',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-scarlet-%26-violet-151/charizard-ex-199',
        observedAt: '2026-06-09',
        basis: 'PSA 10 sold-comp benchmark.',
        confidenceScore: 0.86
      },
      {
        region: 'Dubai',
        valueUsd: 1885,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting anchor + UAE retail spread',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-scarlet-%26-violet-151/charizard-ex-199',
        observedAt: '2026-06-09',
        basis: 'US PSA 10 benchmark plus 15% UAE retail/import spread.',
        confidenceScore: 0.62
      }
    ],
    targetMarkets: ['US', 'Japan', 'Dubai'],
    procurementVenues: ['ebay', 'mercari_jp', 'sneaker_dunk', 'cardrush'],
    agentInstruction:
      'Scout authenticated PSA 10 Charizard ex SIR listings below the max bid, reject weak cert photos, and queue a purchase request for the vault operator.',
    vaultState: 'wanted',
    nftStatus: 'not_tokenized',
    searchUrls: [
      {
        venue: 'ebay',
        label: 'eBay sold/listed comps',
        url: 'https://www.ebay.com/sch/i.html?_nkw=Charizard+ex+199%2F165+PSA+10'
      },
      {
        venue: 'mercari_jp',
        label: 'Mercari Japan search',
        url: 'https://jp.mercari.com/search?keyword=リザードンex%20199%2F165%20PSA10'
      },
      {
        venue: 'sneaker_dunk',
        label: 'Sneaker Dunk search',
        url: 'https://snkrdunk.com/search/result?keyword=リザードンex%20199%2F165%20PSA10'
      }
    ],
    sellerRiskScore: 0.12,
    demoTag: 'Verified market',
    demoNote: 'Source-backed PSA 10 market value; no fake listing ask shown'
  },
  {
    id: 'asset-umbreon-vmax-raw',
    name: 'Umbreon VMAX Alt Art',
    setName: 'Evolving Skies',
    cardNumber: '215/203',
    language: 'en',
    grade: 'raw',
    condition: 'near_mint',
    mode: 'procurement_target',
    theme: 'Eeveelution',
    imageUrl: 'https://images.pokemontcg.io/swsh7/215_hires.png',
    imageAlt: 'Umbreon VMAX Alternate Art card from Evolving Skies',
    imageSourceLabel: 'PokemonTCG API',
    imageSourceUrl: 'https://pokemontcg.io/',
    targetMaxBidUsd: 1780,
    fairValueUsd: 2048.42,
    exitValueUsd: 1828.01,
    upsideValueUsd: 2298.99,
    liquidityScore: 0.76,
    confidenceScore: 0.72,
    volatilityScore: 0.78,
    momentumScore: 0.41,
    sourceCount: 3,
    recentCompCount: 7,
    newestSourceAt: '2026-06-09T00:00:00.000Z',
    valuationStatus: 'source_backed',
    valuationBasis: 'Raw near-mint market snapshot from public price guides and recent sold-market aggregates.',
    valuationSources: [
      {
        label: 'PriceCharting',
        url: 'https://www.pricecharting.com/game/pokemon-evolving-skies/umbreon-vmax-215',
        priceUsd: 2048.42,
        observedAt: '2026-06-09',
        basis: 'Ungraded market guide'
      },
      {
        label: 'TCG Price Lookup',
        url: 'https://tcgpricelookup.com/it/card/pokemon-swsh07-evolving-skies-umbreon-vmax-alternate-art-secret-215-203-holofoil',
        priceUsd: 1951.47,
        observedAt: '2026-06-09',
        basis: 'TCGPlayer market'
      },
      {
        label: 'TCG Price Lookup',
        url: 'https://tcgpricelookup.com/it/card/pokemon-swsh07-evolving-skies-umbreon-vmax-alternate-art-secret-215-203-holofoil',
        priceUsd: 1828.01,
        observedAt: '2026-06-09',
        basis: 'eBay completed-sales aggregate'
      }
    ],
    regionalPriceBoard: [
      {
        region: 'Japan',
        valueUsd: 1885,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting / TCGPlayer anchor + Japan liquidity haircut',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-evolving-skies/umbreon-vmax-215',
        observedAt: '2026-06-09',
        basis: 'US raw benchmark less 8% for English raw-card Japan route.',
        confidenceScore: 0.62
      },
      {
        region: 'Singapore',
        valueUsd: 2190,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting / TCGPlayer anchor + SG premium',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-evolving-skies/umbreon-vmax-215',
        observedAt: '2026-06-09',
        basis: 'US raw benchmark plus 7% regional collector/import spread.',
        confidenceScore: 0.6
      },
      {
        region: 'HK',
        valueUsd: 2130,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting / TCGPlayer anchor + HK spread',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-evolving-skies/umbreon-vmax-215',
        observedAt: '2026-06-09',
        basis: 'US raw benchmark plus 4% Hong Kong desk spread.',
        confidenceScore: 0.6
      },
      {
        region: 'US',
        valueUsd: 2048,
        status: 'source-backed benchmark',
        sourceLabel: 'PriceCharting',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-evolving-skies/umbreon-vmax-215',
        observedAt: '2026-06-09',
        basis: 'Ungraded raw market guide.',
        confidenceScore: 0.72
      },
      {
        region: 'Dubai',
        valueUsd: 2355,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting / TCGPlayer anchor + UAE premium',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-evolving-skies/umbreon-vmax-215',
        observedAt: '2026-06-09',
        basis: 'US raw benchmark plus 15% UAE retail/import spread.',
        confidenceScore: 0.56
      }
    ],
    targetMarkets: ['US', 'Singapore', 'Dubai'],
    procurementVenues: ['ebay', 'tcgplayer', 'mercari_jp'],
    agentInstruction:
      'Find clean raw Umbreon VMAX Alt Art candidates under benchmark with photo review; require human approval before purchase because condition drives grading upside.',
    vaultState: 'researching',
    nftStatus: 'not_tokenized',
    searchUrls: [
      {
        venue: 'ebay',
        label: 'eBay raw search',
        url: 'https://www.ebay.com/sch/i.html?_nkw=Umbreon+VMAX+215%2F203+raw'
      },
      {
        venue: 'tcgplayer',
        label: 'TCGplayer product page',
        url: 'https://www.tcgplayer.com/search/pokemon/swsh07-evolving-skies?productLineName=pokemon&q=Umbreon+VMAX+215%2F203'
      },
      {
        venue: 'mercari_jp',
        label: 'Mercari Japan search',
        url: 'https://jp.mercari.com/search?keyword=ブラッキーVMAX%20215%2F203'
      }
    ],
    sellerRiskScore: 0.18,
    demoTag: 'Route depth',
    demoNote: 'Shows sell and hold routes from source-backed raw market values'
  },
  {
    id: 'asset-pikachu-greyfelt-psa10',
    name: 'Pikachu with Grey Felt Hat',
    setName: 'Pokemon x Van Gogh Museum',
    language: 'en',
    grade: 'PSA10',
    condition: 'mint',
    mode: 'vault_item',
    theme: 'Pikachu promo',
    imageUrl: 'https://images.pokemontcg.io/svp/85_hires.png',
    imageAlt: 'Pikachu with Grey Felt Hat promo card',
    imageSourceLabel: 'PokemonTCG API',
    imageSourceUrl: 'https://pokemontcg.io/',
    fairValueUsd: 3172,
    exitValueUsd: 3151,
    upsideValueUsd: 3229,
    liquidityScore: 0.9,
    confidenceScore: 0.88,
    volatilityScore: 0.48,
    momentumScore: 0.18,
    sourceCount: 3,
    recentCompCount: 90,
    newestSourceAt: '2026-05-24T00:00:00.000Z',
    valuationStatus: 'source_backed',
    valuationBasis: 'PSA 10 Grey Felt Hat market snapshot from index and sold-listing sources.',
    valuationSources: [
      {
        label: 'Grade10 Hat Price Index',
        url: 'https://grade10.com/hat-price-index/en',
        priceUsd: 3172,
        observedAt: '2026-06-09',
        basis: 'Week of Apr 27-May 3 PSA 10 trimmed mean'
      },
      {
        label: 'Guardian TCG',
        url: 'https://guardiantcg.app/pokemon/sv-scarlet-violet-promo-cards/pikachu-088-088',
        priceUsd: 3151,
        observedAt: '2026-06-09',
        basis: 'Recent PSA 10 sold listing'
      },
      {
        label: 'Guardian TCG',
        url: 'https://guardiantcg.app/pokemon/sv-scarlet-violet-promo-cards/pikachu-088-088',
        priceUsd: 3229,
        observedAt: '2026-06-09',
        basis: 'Recent PSA 10 sold listing'
      }
    ],
    regionalPriceBoard: [
      {
        region: 'Japan',
        valueUsd: 2950,
        status: 'estimated regional quote',
        sourceLabel: 'Grade10 / sold-listing anchor + Japan route',
        sourceUrl: 'https://grade10.com/hat-price-index/en',
        observedAt: '2026-06-09',
        basis: 'PSA 10 index and sold-listing benchmark less 4% for Japan resale route.',
        confidenceScore: 0.76
      },
      {
        region: 'Singapore',
        valueUsd: 3180,
        status: 'estimated regional quote',
        sourceLabel: 'Grade10 / sold-listing anchor + SG premium',
        sourceUrl: 'https://grade10.com/hat-price-index/en',
        observedAt: '2026-06-09',
        basis: 'PSA 10 benchmark plus 3.5% regional collector premium.',
        confidenceScore: 0.72
      },
      {
        region: 'HK',
        valueUsd: 3150,
        status: 'estimated regional quote',
        sourceLabel: 'Grade10 / sold-listing anchor + HK desk spread',
        sourceUrl: 'https://grade10.com/hat-price-index/en',
        observedAt: '2026-06-09',
        basis: 'PSA 10 benchmark plus 2.5% Hong Kong desk spread.',
        confidenceScore: 0.72
      },
      {
        region: 'US',
        valueUsd: 3075,
        status: 'source-backed benchmark',
        sourceLabel: 'Grade10 / Guardian TCG',
        sourceUrl: 'https://grade10.com/hat-price-index/en',
        observedAt: '2026-06-09',
        basis: 'Trimmed PSA 10 index and recent sold-listing blend.',
        confidenceScore: 0.88
      },
      {
        region: 'Dubai',
        valueUsd: 3375,
        status: 'estimated regional quote',
        sourceLabel: 'Grade10 / sold-listing anchor + UAE premium',
        sourceUrl: 'https://grade10.com/hat-price-index/en',
        observedAt: '2026-06-09',
        basis: 'PSA 10 benchmark plus 10% UAE retail/import spread.',
        confidenceScore: 0.66
      }
    ],
    targetMarkets: ['Japan', 'US', 'Singapore', 'Holland'],
    procurementVenues: ['vault_operator', 'opensea'],
    agentInstruction:
      'Already in vault custody. Recommend tokenize for OpenSea-style listing if user wants liquidity, or redeem to physical delivery if user wants the card at home.',
    vaultState: 'stored',
    custodyLocation: 'Tokyo',
    nftStatus: 'ready_to_mint',
    searchUrls: [
      {
        venue: 'opensea',
        label: 'OpenSea Pokemon card NFT search',
        url: 'https://opensea.io/assets?search[query]=Pikachu%20Grey%20Felt%20Hat%20PSA%2010'
      },
      {
        venue: 'ebay',
        label: 'eBay PSA 10 comps',
        url: 'https://www.ebay.com/sch/i.html?_nkw=Pikachu+Grey+Felt+Hat+PSA+10'
      }
    ],
    sellerRiskScore: 0.08,
    demoTag: 'Index-backed',
    demoNote: 'Shows hold/sell discipline for a source-backed cultural index card'
  },
  {
    id: 'asset-moonbreon-jp-psa9',
    name: 'Umbreon VMAX HR',
    setName: 'Eevee Heroes',
    cardNumber: '095/069',
    language: 'jp',
    grade: 'PSA9',
    condition: 'mint',
    mode: 'procurement_target',
    theme: 'Japanese Eeveelution',
    imageUrl: 'https://images.pokemontcg.io/swsh7/215_hires.png',
    imageAlt: 'Umbreon VMAX Alternate Art reference image for Moonbreon procurement',
    imageSourceLabel: 'PokemonTCG API reference image',
    imageSourceUrl: 'https://pokemontcg.io/',
    targetMaxBidUsd: 2100,
    fairValueUsd: 2510,
    exitValueUsd: 2310.5,
    upsideValueUsd: 2983,
    liquidityScore: 0.49,
    confidenceScore: 0.67,
    volatilityScore: 0.82,
    momentumScore: 0.27,
    sourceCount: 3,
    recentCompCount: 6,
    newestSourceAt: '2026-05-28T21:15:00.000Z',
    valuationStatus: 'source_backed',
    valuationBasis: 'Japanese Eevee Heroes PSA 9 market snapshot; liquidity is thinner than English Moonbreon.',
    valuationSources: [
      {
        label: 'Pack Magik',
        url: 'https://www.packmagik.com/cards/1747646775600x606007842471529200',
        priceUsd: 2510,
        observedAt: '2026-06-09',
        basis: 'PSA 9 market'
      },
      {
        label: 'PokeTrace',
        url: 'https://poketrace.com/cards/umbreon-vmax-japanese--s6a-eevee-heroes-Holofoil-095-069',
        priceUsd: 2983,
        observedAt: '2026-06-09',
        basis: 'PSA 9 market context'
      },
      {
        label: 'PriceCharting',
        url: 'https://www.pricecharting.com/game/pokemon-japanese-eevee-heroes/umbreon-vmax-95',
        priceUsd: 1349.95,
        observedAt: '2026-06-09',
        basis: 'Recent PSA 9 sale print'
      }
    ],
    regionalPriceBoard: [
      {
        region: 'Japan',
        valueUsd: 2385,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting / Pack Magik anchor + Japan route',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-japanese-eevee-heroes/umbreon-vmax-95',
        observedAt: '2026-06-09',
        basis: 'Japanese PSA 9 benchmark less 5% for local sourcing route.',
        confidenceScore: 0.62
      },
      {
        region: 'Singapore',
        valueUsd: 2685,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting / Pack Magik anchor + SG premium',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-japanese-eevee-heroes/umbreon-vmax-95',
        observedAt: '2026-06-09',
        basis: 'Japanese PSA 9 benchmark plus 7% regional import spread.',
        confidenceScore: 0.58
      },
      {
        region: 'HK',
        valueUsd: 2625,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting / Pack Magik anchor + HK spread',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-japanese-eevee-heroes/umbreon-vmax-95',
        observedAt: '2026-06-09',
        basis: 'Japanese PSA 9 benchmark plus 4.5% Hong Kong desk spread.',
        confidenceScore: 0.58
      },
      {
        region: 'US',
        valueUsd: 2510,
        status: 'source-backed benchmark',
        sourceLabel: 'Pack Magik',
        sourceUrl: 'https://www.packmagik.com/cards/1747646775600x606007842471529200',
        observedAt: '2026-06-09',
        basis: 'Japanese Eevee Heroes PSA 9 market benchmark.',
        confidenceScore: 0.67
      },
      {
        region: 'Dubai',
        valueUsd: 2890,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting / Pack Magik anchor + UAE premium',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-japanese-eevee-heroes/umbreon-vmax-95',
        observedAt: '2026-06-09',
        basis: 'Japanese PSA 9 benchmark plus 15% UAE retail/import spread.',
        confidenceScore: 0.54
      }
    ],
    targetMarkets: ['Japan', 'Dubai', 'Singapore'],
    procurementVenues: ['mercari_jp', 'sneaker_dunk', 'cardrush'],
    agentInstruction:
      'Search Japanese marketplaces for PSA 9 Eevee Heroes Moonbreon, but require tighter source agreement because dispersion is high and liquidity is thinner.',
    vaultState: 'wanted',
    nftStatus: 'not_tokenized',
    searchUrls: [
      {
        venue: 'mercari_jp',
        label: 'Mercari Japan search',
        url: 'https://jp.mercari.com/search?keyword=ブラッキーVMAX%20095%2F069%20PSA9'
      },
      {
        venue: 'sneaker_dunk',
        label: 'Sneaker Dunk search',
        url: 'https://snkrdunk.com/search/result?keyword=ブラッキーVMAX%20095%2F069%20PSA9'
      },
      {
        venue: 'cardrush',
        label: 'Cardrush inventory search',
        url: 'https://www.cardrush-pokemon.jp/product-list?keyword=ブラッキーVMAX%20095%2F069'
      }
    ],
    sellerRiskScore: 0.26,
    demoTag: 'Risk check',
    demoNote: 'Shows human review despite a famous card and high dispersion'
  },
  {
    id: 'asset-pack-alpha-pull-mew',
    name: 'Mew ex SIR',
    setName: 'Paldean Fates',
    cardNumber: '232/091',
    language: 'en',
    grade: 'raw',
    condition: 'mint',
    mode: 'procurement_target',
    theme: 'Bubble Mew',
    imageUrl: 'https://images.pokemontcg.io/sv4pt5/232_hires.png',
    imageAlt: 'Mew ex Special Illustration Rare card from Paldean Fates',
    imageSourceLabel: 'PokemonTCG API',
    imageSourceUrl: 'https://pokemontcg.io/',
    targetMaxBidUsd: 735,
    fairValueUsd: 844.74,
    exitValueUsd: 790,
    upsideValueUsd: 925.18,
    liquidityScore: 0.71,
    confidenceScore: 0.75,
    volatilityScore: 0.58,
    momentumScore: 0.29,
    sourceCount: 3,
    recentCompCount: 18,
    newestSourceAt: '2026-06-03T00:00:00.000Z',
    valuationStatus: 'source_backed',
    valuationBasis: 'Raw near-mint Bubble Mew market snapshot. Pack cost and buyback are intentionally omitted without Internal vault live data.',
    valuationSources: [
      {
        label: 'PriceCharting',
        url: 'https://www.pricecharting.com/game/pokemon-paldean-fates/mew-ex-232',
        priceUsd: 844.74,
        observedAt: '2026-06-09',
        basis: 'Ungraded market guide'
      },
      {
        label: 'PriceCharting',
        url: 'https://www.pricecharting.com/game/pokemon-paldean-fates/mew-ex-232',
        priceUsd: 790,
        observedAt: '2026-06-09',
        basis: 'Recent raw eBay sale'
      },
      {
        label: 'Guardian TCG',
        url: 'https://guardiantcg.app/sets/pokemon-sv-paldean-fates/most-valuable',
        priceUsd: 925.18,
        observedAt: '2026-06-09',
        basis: 'Multi-source raw price guide'
      }
    ],
    regionalPriceBoard: [
      {
        region: 'Japan',
        valueUsd: 780,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting anchor + Japan liquidity haircut',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-paldean-fates/mew-ex-232',
        observedAt: '2026-06-09',
        basis: 'US raw benchmark less 8% for English-card Japan route.',
        confidenceScore: 0.65
      },
      {
        region: 'Singapore',
        valueUsd: 905,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting / Guardian anchor + SG premium',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-paldean-fates/mew-ex-232',
        observedAt: '2026-06-09',
        basis: 'Raw benchmark plus 7% regional collector/import spread.',
        confidenceScore: 0.62
      },
      {
        region: 'HK',
        valueUsd: 880,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting / Guardian anchor + HK spread',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-paldean-fates/mew-ex-232',
        observedAt: '2026-06-09',
        basis: 'Raw benchmark plus 4% Hong Kong desk spread.',
        confidenceScore: 0.62
      },
      {
        region: 'US',
        valueUsd: 845,
        status: 'source-backed benchmark',
        sourceLabel: 'PriceCharting',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-paldean-fates/mew-ex-232',
        observedAt: '2026-06-09',
        basis: 'Ungraded raw market guide and recent sale blend.',
        confidenceScore: 0.75
      },
      {
        region: 'Dubai',
        valueUsd: 970,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting / Guardian anchor + UAE premium',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-paldean-fates/mew-ex-232',
        observedAt: '2026-06-09',
        basis: 'Raw benchmark plus 15% UAE retail/import spread.',
        confidenceScore: 0.58
      }
    ],
    targetMarkets: ['US', 'Japan', 'Singapore', 'Dubai'],
    procurementVenues: ['ebay', 'tcgplayer', 'mercari_jp', 'dubizzle'],
    agentInstruction:
      'Scout raw Bubble Mew copies and sealed Paldean Fates exposure under benchmark; reject unclear corners/centering and queue a vault purchase request only under max bid.',
    vaultState: 'wanted',
    nftStatus: 'not_tokenized',
    searchUrls: [
      {
        venue: 'ebay',
        label: 'eBay raw search',
        url: 'https://www.ebay.com/sch/i.html?_nkw=Mew+ex+232%2F091+Paldean+Fates'
      },
      {
        venue: 'tcgplayer',
        label: 'TCGplayer product search',
        url: 'https://www.tcgplayer.com/search/pokemon/sv-paldean-fates?productLineName=pokemon&q=Mew+ex+232%2F091'
      },
      {
        venue: 'dubizzle',
        label: 'Dubizzle UAE search',
        url: 'https://dubai.dubizzle.com/search/?keywords=Mew%20ex%20232%2F091'
      }
    ],
    sellerRiskScore: 0.1,
    demoTag: 'Pack pull',
    demoNote: 'Shows post-open route ranking without fake Internal vault buyback'
  }
];

const pickedUpItems: PackAlphaPickedUpItem[] = [
  {
    id: 'picked-charizard-151-psa10',
    name: 'Charizard ex SIR PSA 10',
    kind: 'card',
    setName: 'Scarlet & Violet 151',
    status: 'scouting',
    region: 'US',
    imageUrl: 'https://images.pokemontcg.io/sv3pt5/199_hires.png',
    imageAlt: 'Charizard ex Special Illustration Rare card',
    sourceLabel: 'PokemonTCG API',
    sourceUrl: 'https://pokemontcg.io/',
    note: 'High-liquidity grail target with fresh quote required before purchase.',
    linkedAssetId: 'asset-charizard-151-psa10'
  },
  {
    id: 'picked-pikachu-greyfelt-vault',
    name: 'Pikachu Grey Felt Hat PSA 10',
    kind: 'card',
    setName: 'Pokemon x Van Gogh Museum',
    status: 'vaulted',
    region: 'Japan',
    imageUrl: 'https://images.pokemontcg.io/svp/85_hires.png',
    imageAlt: 'Pikachu with Grey Felt Hat promo card',
    sourceLabel: 'PokemonTCG API',
    sourceUrl: 'https://pokemontcg.io/',
    note: 'Vault item ready for NFT receipt minting or physical redemption.',
    linkedAssetId: 'asset-pikachu-greyfelt-psa10'
  },
  {
    id: 'picked-white-flare-box',
    name: 'White Flare Booster Box',
    kind: 'box',
    setName: 'SV11W Japanese',
    status: 'watchlist',
    region: 'Japan',
    imageUrl: 'https://tcg-collection.com/cdn/shop/files/pokemon-white-flare-booster-box-japon.webp?v=1759175427',
    imageAlt: 'Japanese Pokemon TCG White Flare booster box',
    sourceLabel: 'TCG-Collection product image',
    sourceUrl: 'https://tcg-collection.com/en/products/booster-box-white-flare',
    note: 'Founder thesis box category with source-backed Japan/US/Dubai anchors.',
    valuationSources: [
      {
        label: 'Fuji Card Shop',
        url: 'https://www.fujicardshop.com/products/pokemon-card-game-scarlet-violet-expansion-pack-white-flare-booster-box-jp',
        priceUsd: 160,
        observedAt: '2026-06-09',
        basis: 'Japan retail quote converted from JPY'
      },
      {
        label: 'eBay',
        url: 'https://www.ebay.com/sch/i.html?_nkw=White+Flare+SV11W+booster+box',
        priceUsd: 178,
        observedAt: '2026-06-09',
        basis: 'US active ask / recent market anchor'
      },
      {
        label: 'Dubizzle',
        url: 'https://dubai.dubizzle.com/search/?keywords=White%20Flare%20booster%20box',
        priceUsd: 123,
        observedAt: '2026-06-09',
        basis: 'UAE active ask anchor converted from AED'
      }
    ],
    regionalPriceBoard: [
      {
        region: 'Japan',
        valueUsd: 160,
        status: 'source-backed benchmark',
        sourceLabel: 'Fuji Card Shop',
        sourceUrl: 'https://www.fujicardshop.com/products/pokemon-card-game-scarlet-violet-expansion-pack-white-flare-booster-box-jp',
        observedAt: '2026-06-09',
        basis: 'Japan retail quote converted from JPY.',
        confidenceScore: 0.76
      },
      {
        region: 'Singapore',
        valueUsd: 185,
        status: 'estimated regional quote',
        sourceLabel: 'Japan source anchor + SG logistics/GST',
        sourceUrl: 'https://www.fujicardshop.com/products/pokemon-card-game-scarlet-violet-expansion-pack-white-flare-booster-box-jp',
        observedAt: '2026-06-09',
        basis: 'Japan quote plus 15% import, tax, and dealer spread.',
        confidenceScore: 0.62
      },
      {
        region: 'HK',
        valueUsd: 178,
        status: 'estimated regional quote',
        sourceLabel: 'Japan source anchor + HK route',
        sourceUrl: 'https://www.fujicardshop.com/products/pokemon-card-game-scarlet-violet-expansion-pack-white-flare-booster-box-jp',
        observedAt: '2026-06-09',
        basis: 'Japan quote plus 11% regional desk spread.',
        confidenceScore: 0.62
      },
      {
        region: 'US',
        valueUsd: 178,
        status: 'executable ask',
        sourceLabel: 'eBay',
        sourceUrl: 'https://www.ebay.com/sch/i.html?_nkw=White+Flare+SV11W+booster+box',
        observedAt: '2026-06-09',
        basis: 'US marketplace ask anchor; agent still verifies seller and shipping before paUSDC capture.',
        confidenceScore: 0.68
      },
      {
        region: 'Dubai',
        valueUsd: 123,
        status: 'executable ask',
        sourceLabel: 'Dubizzle',
        sourceUrl: 'https://dubai.dubizzle.com/search/?keywords=White%20Flare%20booster%20box',
        observedAt: '2026-06-09',
        basis: 'UAE local ask anchor converted from AED; needs seller verification.',
        confidenceScore: 0.52
      }
    ]
  },
  {
    id: 'picked-black-bolt-box',
    name: 'Black Bolt Booster Box',
    kind: 'box',
    setName: 'SV11B Japanese',
    status: 'watchlist',
    region: 'Japan',
    imageUrl: 'https://www.tonysrips.com/cdn/shop/files/BlackBlot_1200x1200.jpg?v=1749152767',
    imageAlt: 'Japanese Pokemon TCG Black Bolt booster box',
    sourceLabel: 'TonysRips product image',
    sourceUrl: 'https://www.tonysrips.com/products/pokemon-black-bolt-sv11b-japanese-booster-box',
    note: 'Box spread candidate with current sold-comp anchor and regional routing estimates.',
    valuationSources: [
      {
        label: 'PriceCharting',
        url: 'https://www.pricecharting.com/game/pokemon-japanese-black-bolt/booster-box',
        priceUsd: 158,
        observedAt: '2026-06-09',
        basis: 'Recent booster box sold-comp anchor'
      },
      {
        label: 'eBay',
        url: 'https://www.ebay.com/sch/i.html?_nkw=Black+Bolt+SV11B+booster+box',
        priceUsd: 158,
        observedAt: '2026-06-09',
        basis: 'US active/sold marketplace anchor'
      }
    ],
    regionalPriceBoard: [
      {
        region: 'Japan',
        valueUsd: 158,
        status: 'source-backed benchmark',
        sourceLabel: 'PriceCharting',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-japanese-black-bolt/booster-box',
        observedAt: '2026-06-09',
        basis: 'Recent booster box sold-comp anchor.',
        confidenceScore: 0.7
      },
      {
        region: 'Singapore',
        valueUsd: 182,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting anchor + SG logistics/GST',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-japanese-black-bolt/booster-box',
        observedAt: '2026-06-09',
        basis: 'Sold-comp anchor plus 15% import, tax, and dealer spread.',
        confidenceScore: 0.6
      },
      {
        region: 'HK',
        valueUsd: 176,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting anchor + HK route',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-japanese-black-bolt/booster-box',
        observedAt: '2026-06-09',
        basis: 'Sold-comp anchor plus 11% Hong Kong desk spread.',
        confidenceScore: 0.6
      },
      {
        region: 'US',
        valueUsd: 158,
        status: 'source-backed benchmark',
        sourceLabel: 'eBay / PriceCharting',
        sourceUrl: 'https://www.ebay.com/sch/i.html?_nkw=Black+Bolt+SV11B+booster+box',
        observedAt: '2026-06-09',
        basis: 'US marketplace and sold-comp benchmark.',
        confidenceScore: 0.68
      },
      {
        region: 'Dubai',
        valueUsd: 210,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting anchor + UAE retail spread',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-japanese-black-bolt/booster-box',
        observedAt: '2026-06-09',
        basis: 'Sold-comp anchor plus UAE import and local retail spread.',
        confidenceScore: 0.5
      }
    ]
  },
  {
    id: 'picked-team-rocket-box',
    name: 'Glory of Team Rocket Box',
    kind: 'box',
    setName: 'SV10 Japanese',
    status: 'quote_required',
    region: 'Dubai',
    imageUrl: 'https://pokeplaza.com/cdn/shop/files/Pokemon-sv10-Glory-of-Team-Rocket-Boosterbox_1200x1200.jpg?v=1744678662',
    imageAlt: 'Japanese Pokemon TCG Glory of Team Rocket booster box',
    sourceLabel: 'Pokeplaza product image',
    sourceUrl: 'https://pokeplaza.com/en/products/pokemon-sv10-the-glory-of-team-rocket-boosterbox',
    note: 'Founder proof category with sold-comp anchor and regional spread estimate.',
    valuationSources: [
      {
        label: 'PriceCharting',
        url: 'https://www.pricecharting.com/game/pokemon-japanese-glory-of-team-rocket/booster-box',
        priceUsd: 153,
        observedAt: '2026-06-09',
        basis: 'Recent booster box sold-comp anchor'
      },
      {
        label: 'eBay',
        url: 'https://www.ebay.com/sch/i.html?_nkw=Glory+of+Team+Rocket+SV10+booster+box',
        priceUsd: 160,
        observedAt: '2026-06-09',
        basis: 'US active/sold marketplace anchor'
      }
    ],
    regionalPriceBoard: [
      {
        region: 'Japan',
        valueUsd: 142,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting anchor + Japan sourcing route',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-japanese-glory-of-team-rocket/booster-box',
        observedAt: '2026-06-09',
        basis: 'Sold-comp anchor less 7% for Japan local sourcing target.',
        confidenceScore: 0.58
      },
      {
        region: 'Singapore',
        valueUsd: 171,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting anchor + SG logistics/GST',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-japanese-glory-of-team-rocket/booster-box',
        observedAt: '2026-06-09',
        basis: 'Sold-comp anchor plus 12% import, tax, and dealer spread.',
        confidenceScore: 0.56
      },
      {
        region: 'HK',
        valueUsd: 166,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting anchor + HK route',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-japanese-glory-of-team-rocket/booster-box',
        observedAt: '2026-06-09',
        basis: 'Sold-comp anchor plus 8.5% Hong Kong desk spread.',
        confidenceScore: 0.56
      },
      {
        region: 'US',
        valueUsd: 153,
        status: 'source-backed benchmark',
        sourceLabel: 'PriceCharting',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-japanese-glory-of-team-rocket/booster-box',
        observedAt: '2026-06-09',
        basis: 'Recent booster box sold-comp benchmark.',
        confidenceScore: 0.68
      },
      {
        region: 'Dubai',
        valueUsd: 196,
        status: 'estimated regional quote',
        sourceLabel: 'PriceCharting anchor + UAE retail spread',
        sourceUrl: 'https://www.pricecharting.com/game/pokemon-japanese-glory-of-team-rocket/booster-box',
        observedAt: '2026-06-09',
        basis: 'Sold-comp anchor plus UAE import and local retail spread.',
        confidenceScore: 0.5
      }
    ]
  },
  {
    id: 'picked-mew-bubble',
    name: 'Mew ex SIR',
    kind: 'card',
    setName: 'Paldean Fates',
    status: 'scouting',
    region: 'Singapore',
    imageUrl: 'https://images.pokemontcg.io/sv4pt5/232_hires.png',
    imageAlt: 'Mew ex Special Illustration Rare card',
    sourceLabel: 'PokemonTCG API',
    sourceUrl: 'https://pokemontcg.io/',
    note: 'Raw candidate where condition, centering, and seller photos drive approval.',
    linkedAssetId: 'asset-pack-alpha-pull-mew'
  }
];

const intents = new Map<string, PackAlphaIntent>();
const purchaseOrders = new Map<string, PackAlphaPurchaseOrder>();
const vaultActionTickets = new Map<string, PackAlphaVaultActionTicket>();
const sellActionTickets = new Map<string, PackAlphaSellActionTicket>();

function assetRequired(assetId: string) {
  const asset = assets.find((item) => item.id === assetId);
  if (!asset) {
    throw new Error(`Missing Pack Alpha asset seed: ${assetId}`);
  }
  return asset;
}

function profileHolding(input: {
  holdingId: string;
  assetId: string;
  custodyLocation: PackAlphaRegion;
  vaultState: PackAlphaProfileHolding['vaultState'];
  nftStatus: PackAlphaProfileHolding['nftStatus'];
  acquiredAt: string;
  costBasisUsd: number;
  availableActions: Array<'tokenize' | 'redeem'>;
}): PackAlphaProfileHolding {
  const asset = assetRequired(input.assetId);
  const base = {
    holdingId: input.holdingId,
    assetId: input.assetId,
    name: asset.name,
    setName: asset.setName,
    cardNumber: asset.cardNumber,
    language: asset.language,
    grade: asset.grade,
    custodyLocation: input.custodyLocation,
    vaultState: input.vaultState,
    nftStatus: input.nftStatus,
    acquiredAt: input.acquiredAt,
    costBasisUsd: input.costBasisUsd,
    marketValueUsd: asset.fairValueUsd,
    imageUrl: asset.imageUrl,
    imageAlt: asset.imageAlt,
    valuationBasis: asset.valuationBasis,
    regionalPriceBoard: asset.regionalPriceBoard,
    availableActions: input.availableActions
  };
  return {
    ...base,
    sellOptions: buildSellOptions(base),
    receiptHash: stableHash(base)
  };
}

function regionalValue(holding: Omit<PackAlphaProfileHolding, 'receiptHash' | 'sellOptions'>, region: PackAlphaRegion) {
  return holding.regionalPriceBoard.find((item) => item.region === region)?.valueUsd ?? holding.marketValueUsd;
}

function sellOption(
  holding: Omit<PackAlphaProfileHolding, 'receiptHash' | 'sellOptions'>,
  input: {
    venue: PackAlphaSellOption['venue'];
    label: string;
    region: PackAlphaRegion;
    feeRate: number;
    fixedFeeUsd: number;
    confidenceScore: number;
    basis: string;
  }
): PackAlphaSellOption {
  const grossAskUsd = roundMoney(regionalValue(holding, input.region));
  const estimatedFeesUsd = roundMoney(grossAskUsd * input.feeRate + input.fixedFeeUsd);
  return {
    venue: input.venue,
    label: input.label,
    region: input.region,
    grossAskUsd,
    estimatedFeesUsd,
    estimatedNetUsd: roundMoney(grossAskUsd - estimatedFeesUsd),
    confidenceScore: input.confidenceScore,
    basis: input.basis
  };
}

function buildSellOptions(holding: Omit<PackAlphaProfileHolding, 'receiptHash' | 'sellOptions'>): PackAlphaSellOption[] {
  return [
    sellOption(holding, {
      venue: 'ebay',
      label: 'Sell on eBay',
      region: 'US',
      feeRate: 0.1325,
      fixedFeeUsd: 0.4,
      confidenceScore: 0.82,
      basis: 'Best default for US buyer depth and authentication trust.'
    }),
    sellOption(holding, {
      venue: 'sneaker_dunk',
      label: 'Sell on SNKRDUNK',
      region: 'Japan',
      feeRate: 0.08,
      fixedFeeUsd: 6,
      confidenceScore: 0.68,
      basis: 'Japan route for Japanese liquidity and sealed/card collector demand.'
    }),
    sellOption(holding, {
      venue: 'dubizzle',
      label: 'Sell on Dubizzle',
      region: 'Dubai',
      feeRate: 0.06,
      fixedFeeUsd: 8,
      confidenceScore: 0.58,
      basis: 'UAE route when Dubai retail spread is attractive but seller verification is needed.'
    }),
    sellOption(holding, {
      venue: 'mercari_jp',
      label: 'Sell on Mercari',
      region: 'Japan',
      feeRate: 0.1,
      fixedFeeUsd: 5,
      confidenceScore: 0.64,
      basis: 'Japan C2C route; useful for fast local discovery after vault operator review.'
    })
  ].sort((a, b) => b.estimatedNetUsd - a.estimatedNetUsd);
}

const profileHoldings: PackAlphaProfileHolding[] = [
  profileHolding({
    holdingId: 'holding-pikachu-greyfelt-psa10',
    assetId: 'asset-pikachu-greyfelt-psa10',
    custodyLocation: 'Japan',
    vaultState: 'stored',
    nftStatus: 'ready_to_mint',
    acquiredAt: '2026-04-22',
    costBasisUsd: 1180,
    availableActions: ['tokenize', 'redeem']
  }),
  profileHolding({
    holdingId: 'holding-charizard-151-psa10',
    assetId: 'asset-charizard-151-psa10',
    custodyLocation: 'US',
    vaultState: 'stored',
    nftStatus: 'ready_to_mint',
    acquiredAt: '2026-05-16',
    costBasisUsd: 1320,
    availableActions: ['tokenize', 'redeem']
  }),
  profileHolding({
    holdingId: 'holding-mew-ex-sir-raw',
    assetId: 'asset-pack-alpha-pull-mew',
    custodyLocation: 'Singapore',
    vaultState: 'stored',
    nftStatus: 'not_tokenized',
    acquiredAt: '2026-05-28',
    costBasisUsd: 690,
    availableActions: ['tokenize', 'redeem']
  }),
  profileHolding({
    holdingId: 'holding-umbreon-vmax-alt-raw',
    assetId: 'asset-umbreon-vmax-raw',
    custodyLocation: 'Dubai',
    vaultState: 'stored',
    nftStatus: 'not_tokenized',
    acquiredAt: '2026-06-02',
    costBasisUsd: 1720,
    availableActions: ['tokenize', 'redeem']
  })
];

function stableHash(value: unknown) {
  return createHash('sha256').update(JSON.stringify(value)).digest('hex');
}

function roundMoney(value: number) {
  return Math.round(value * 100) / 100;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next.toISOString();
}

function buildQuoteHash(input: Omit<PackAlphaExecutionQuote, 'quoteHash'>) {
  return stableHash({
    quoteId: input.quoteId,
    assetId: input.assetId,
    venue: input.venue,
    route: input.route,
    grossValueUsd: input.grossValueUsd,
    feesUsd: input.feesUsd,
    expectedNetValueUsd: input.expectedNetValueUsd,
    expiresAt: input.expiresAt
  });
}

function quote(input: Omit<PackAlphaExecutionQuote, 'quoteHash'>): PackAlphaExecutionQuote {
  return {
    ...input,
    quoteHash: buildQuoteHash(input)
  };
}

function valuationHashFor(asset: PackAlphaAsset) {
  return stableHash({
    assetId: asset.id,
    fairValueUsd: asset.fairValueUsd,
    exitValueUsd: asset.exitValueUsd,
    buybackValueUsd: asset.instantBuybackUsd,
    valuationBasis: asset.valuationBasis,
    valuationSources: asset.valuationSources,
    regionalPriceBoard: asset.regionalPriceBoard,
    confidenceScore: asset.confidenceScore,
    liquidityScore: asset.liquidityScore,
    volatilityScore: asset.volatilityScore,
    newestSourceAt: asset.newestSourceAt
  });
}

function sourceRiskReserve(asset: PackAlphaAsset) {
  const confidenceReserve = (1 - asset.confidenceScore) * asset.fairValueUsd * 0.08;
  const volatilityReserve = asset.volatilityScore * asset.fairValueUsd * 0.04;
  const sellerReserve = (asset.sellerRiskScore ?? 0.1) * asset.fairValueUsd * 0.035;
  return roundMoney(confidenceReserve + volatilityReserve + sellerReserve);
}

function marketplaceFee(venue: PackAlphaVenue, gross: number) {
  if (venue === 'tcgplayer') {
    return gross * 0.1075 + gross * 0.025 + 0.3;
  }
  if (venue === 'whatnot') {
    return gross * 0.08 + gross * 0.029 + 0.3;
  }
  if (venue === 'comc') {
    return gross * 0.1 + 0.65;
  }
  if (venue === 'slab' || venue === 'collector_crypt') {
    return gross * 0.04 + 2.5;
  }
  if (venue === 'mercari_jp' || venue === 'sneaker_dunk' || venue === 'cardrush') {
    return gross * 0.08 + 6;
  }
  if (venue === 'dubizzle') {
    return gross * 0.06 + 8;
  }
  if (venue === 'opensea') {
    return gross * 0.025 + 3;
  }
  if (venue === 'ebay') {
    return gross * 0.1325 + 0.4;
  }
  return 0;
}

function saleQuote(asset: PackAlphaAsset, venue: PackAlphaVenue, gross: number, label: string) {
  const feesUsd = marketplaceFee(venue, gross);
  const frictionUsd = venue === 'ebay' && gross >= 250 ? 9.5 : venue === 'whatnot' ? 6 : 4.5;
  const confidencePenalty = (1 - asset.confidenceScore) * gross * 0.025;
  return quote({
    quoteId: `quote-${asset.id}-${venue}-sell`,
    assetId: asset.id,
    venue,
    route: venue === 'vault_buyback' ? 'buyback' : 'list_external',
    action: venue === 'vault_buyback' ? 'buyback' : 'sell',
    side: 'sell',
    label,
    grossValueUsd: roundMoney(gross),
    feesUsd: roundMoney(feesUsd),
    frictionUsd: roundMoney(frictionUsd + confidencePenalty),
    expectedNetValueUsd: roundMoney(gross - feesUsd - frictionUsd - confidencePenalty),
    expiresAt: addDays(now, venue === 'vault_buyback' ? 1 : 2),
    confidenceScore: asset.confidenceScore,
    liquidityScore: asset.liquidityScore,
    simulated: true,
    reasonCodes: venue === 'vault_buyback' ? ['BUYBACK_FAST_EXIT'] : ['EXTERNAL_NET_EXIT']
  });
}

function gradeQuote(asset: PackAlphaAsset) {
  const probabilities = asset.gradeProbabilities ?? { p10: 0, p9: 0, p8OrLower: 1 };
  const psa10Value = asset.upsideValueUsd * 1.24;
  const psa9Value = asset.fairValueUsd * 0.92;
  const lowValue = asset.exitValueUsd * 0.78;
  const expectedGross =
    probabilities.p10 * psa10Value + probabilities.p9 * psa9Value + probabilities.p8OrLower * lowValue;
  const gradingCost = 38;
  const turnaroundPenalty = expectedGross * 0.045;
  const failureReserve = probabilities.p8OrLower * asset.fairValueUsd * 0.08;
  return quote({
    quoteId: `quote-${asset.id}-psa-grade`,
    assetId: asset.id,
    venue: 'ebay',
    route: 'grade',
    action: 'grade',
    side: 'hold',
    label: 'Grade then sell as slab',
    grossValueUsd: roundMoney(expectedGross),
    feesUsd: roundMoney(gradingCost + marketplaceFee('ebay', expectedGross)),
    frictionUsd: roundMoney(18 + turnaroundPenalty + failureReserve),
    expectedNetValueUsd: roundMoney(expectedGross - gradingCost - marketplaceFee('ebay', expectedGross) - 18 - turnaroundPenalty - failureReserve),
    expiresAt: addDays(now, 7),
    confidenceScore: asset.confidenceScore * 0.9,
    liquidityScore: asset.liquidityScore * 0.85,
    simulated: true,
    reasonCodes: ['GRADING_OPTIONALITY', `P10_${Math.round(probabilities.p10 * 100)}PCT`]
  });
}

function holdQuote(asset: PackAlphaAsset) {
  const momentumBoost = asset.upsideValueUsd * clamp(asset.momentumScore, -0.2, 0.6) * 0.12;
  const decayRisk = asset.fairValueUsd * asset.volatilityScore * 0.055;
  const expectedGross = asset.exitValueUsd + momentumBoost;
  return quote({
    quoteId: `quote-${asset.id}-hold`,
    assetId: asset.id,
    venue: 'vault_buyback',
    route: 'hold',
    action: 'hold',
    side: 'hold',
    label: 'Hold with time and price stop',
    grossValueUsd: roundMoney(expectedGross),
    feesUsd: 0,
    frictionUsd: roundMoney(decayRisk),
    expectedNetValueUsd: roundMoney(expectedGross - decayRisk),
    expiresAt: addDays(now, 14),
    confidenceScore: asset.confidenceScore,
    liquidityScore: asset.liquidityScore,
    simulated: true,
    reasonCodes: ['MOMENTUM_REVIEW_REQUIRED']
  });
}

function buyQuote(asset: PackAlphaAsset, venue: PackAlphaVenue) {
  const ask = asset.askUsd ?? asset.fairValueUsd;
  const buyerFriction = ask * 0.0825 + 8.5;
  const riskReserve = sourceRiskReserve(asset);
  const expectedExit = asset.exitValueUsd * (venue === 'slab' ? 1.02 : 1);
  return quote({
    quoteId: `quote-${asset.id}-${venue}-buy`,
    assetId: asset.id,
    venue,
    route: 'sweep_external',
    action: 'buy',
    side: 'buy',
    label: venue === 'slab' ? 'Sweep onchain listing' : 'Buy listed card',
    grossValueUsd: roundMoney(expectedExit),
    feesUsd: roundMoney(buyerFriction),
    frictionUsd: riskReserve,
    expectedNetValueUsd: roundMoney(expectedExit - ask - buyerFriction - riskReserve),
    expiresAt: addDays(now, 1),
    confidenceScore: asset.confidenceScore,
    liquidityScore: asset.liquidityScore,
    simulated: true,
    reasonCodes: ['BUY_BELOW_FAST_EXIT', venue === 'slab' ? 'ONCHAIN_ROUTE' : 'EXTERNAL_LISTING']
  });
}

function procurementQuote(asset: PackAlphaAsset, venue: PackAlphaVenue) {
  const maxBid = asset.targetMaxBidUsd ?? asset.exitValueUsd * 0.9;
  const conciergeFee = Math.max(18, maxBid * 0.035);
  const crossBorderReserve =
    asset.targetMarkets.includes('Japan') ||
    asset.targetMarkets.includes('Singapore') ||
    asset.targetMarkets.includes('Dubai') ||
    asset.targetMarkets.includes('Holland')
      ? 42
      : 24;
  const riskReserve = sourceRiskReserve(asset);
  const buyerFriction = marketplaceFee(venue, maxBid) + conciergeFee + crossBorderReserve;
  const expectedEdgeUsd = asset.exitValueUsd - maxBid - buyerFriction - riskReserve;
  return quote({
    quoteId: `quote-${asset.id}-${venue}-procure`,
    assetId: asset.id,
    venue,
    route: 'procurement_request',
    action: 'request_purchase',
    side: 'buy',
    label: `Ask agent to procure via ${venue}`,
    grossValueUsd: roundMoney(asset.exitValueUsd),
    feesUsd: roundMoney(buyerFriction),
    frictionUsd: riskReserve,
    expectedNetValueUsd: roundMoney(expectedEdgeUsd),
    expiresAt: addDays(now, 1),
    confidenceScore: asset.confidenceScore,
    liquidityScore: asset.liquidityScore,
    simulated: true,
    reasonCodes: ['PROCUREMENT_MAX_BID', 'LIVE_LISTING_REQUIRED', 'VAULT_AFTER_PURCHASE']
  });
}

function tokenizeQuote(asset: PackAlphaAsset) {
  const listingReserve = asset.fairValueUsd * 0.045;
  const mintAndCustodyFee = 12 + marketplaceFee('opensea', asset.fairValueUsd);
  return quote({
    quoteId: `quote-${asset.id}-tokenize`,
    assetId: asset.id,
    venue: 'opensea',
    route: 'vault_tokenize',
    action: 'tokenize',
    side: 'tokenize',
    label: 'Mint vault receipt NFT and list',
    grossValueUsd: roundMoney(asset.fairValueUsd),
    feesUsd: roundMoney(mintAndCustodyFee),
    frictionUsd: roundMoney(listingReserve),
    expectedNetValueUsd: roundMoney(asset.fairValueUsd - mintAndCustodyFee - listingReserve),
    expiresAt: addDays(now, 7),
    confidenceScore: asset.confidenceScore,
    liquidityScore: asset.liquidityScore * 0.72,
    simulated: true,
    reasonCodes: ['VAULT_RECEIPT_NFT', 'OPENSEA_LISTING_OPTION']
  });
}

function redeemQuote(asset: PackAlphaAsset) {
  const shippingAndInsurance = Math.max(28, asset.fairValueUsd * 0.018);
  return quote({
    quoteId: `quote-${asset.id}-redeem`,
    assetId: asset.id,
    venue: 'vault_operator',
    route: 'vault_redeem',
    action: 'redeem',
    side: 'redeem',
    label: 'Redeem from vault to home delivery',
    grossValueUsd: roundMoney(asset.fairValueUsd),
    feesUsd: roundMoney(shippingAndInsurance),
    frictionUsd: 0,
    expectedNetValueUsd: roundMoney(asset.fairValueUsd - shippingAndInsurance),
    expiresAt: addDays(now, 5),
    confidenceScore: asset.confidenceScore,
    liquidityScore: 1,
    simulated: true,
    reasonCodes: ['PHYSICAL_REDEMPTION', 'INSURED_SHIPPING_REQUIRED']
  });
}

export function listPackAlphaAssets() {
  return assets.map((asset) => ({
    ...asset,
    valuationHash: valuationHashFor(asset)
  }));
}

export function listPackAlphaPickedUpItems() {
  return pickedUpItems;
}

export function getPackAlphaProfile() {
  const totalMarketValueUsd = roundMoney(profileHoldings.reduce((sum, item) => sum + item.marketValueUsd, 0));
  const totalCostBasisUsd = roundMoney(profileHoldings.reduce((sum, item) => sum + item.costBasisUsd, 0));
  return {
    profileId: 'profile-demo-wallet',
    ownerLabel: 'Demo wallet vault',
    network: 'Monad testnet',
    custodyRoutes: ['US', 'Japan', 'Singapore', 'Dubai', 'Holland'] satisfies PackAlphaRegion[],
    summary: {
      holdingCount: profileHoldings.length,
      totalMarketValueUsd,
      totalCostBasisUsd,
      unrealizedPnlUsd: roundMoney(totalMarketValueUsd - totalCostBasisUsd),
      tokenizeReadyCount: profileHoldings.filter((item) => item.availableActions.includes('tokenize')).length,
      redeemReadyCount: profileHoldings.filter((item) => item.availableActions.includes('redeem')).length
    },
    holdings: profileHoldings,
    actionTickets: [...vaultActionTickets.values()].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    sellTickets: [...sellActionTickets.values()].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  };
}

export function getPackAlphaProfileHolding(holdingId: string) {
  return profileHoldings.find((holding) => holding.holdingId === holdingId) ?? null;
}

export function getPackAlphaAsset(assetId: string) {
  return assets.find((asset) => asset.id === assetId) ?? null;
}

export function buildPackAlphaQuotes(asset: PackAlphaAsset) {
  const quotes: PackAlphaExecutionQuote[] = [];

  if (asset.mode === 'procurement_target') {
    const venues: PackAlphaVenue[] = asset.procurementVenues.length ? asset.procurementVenues : ['ebay'];
    return venues.map((venue) => procurementQuote(asset, venue));
  }

  if (asset.mode === 'vault_item') {
    if (asset.nftStatus !== 'listed') {
      quotes.push(tokenizeQuote(asset));
    }
    quotes.push(redeemQuote(asset));
    quotes.push(holdQuote(asset));
    return quotes;
  }

  if (asset.mode === 'listing') {
    quotes.push(buyQuote(asset, asset.language === 'jp' ? 'slab' : 'ebay'));
    if (asset.liquidityScore > 0.7) {
      quotes.push(buyQuote(asset, 'collector_crypt'));
    }
    return quotes;
  }

  if (asset.instantBuybackUsd) {
    quotes.push(saleQuote(asset, 'vault_buyback', asset.instantBuybackUsd, 'Internal vault instant buyback'));
  }

  quotes.push(saleQuote(asset, 'ebay', asset.fairValueUsd * 0.98, 'eBay authenticated listing'));

  if (asset.grade === 'raw' && asset.language === 'en') {
    quotes.push(saleQuote(asset, 'tcgplayer', asset.exitValueUsd * 1.04, 'TCGplayer liquid raw exit'));
    if (asset.gradeProbabilities) {
      quotes.push(gradeQuote(asset));
    }
  }

  if (asset.volatilityScore > 0.5 || asset.momentumScore > 0.25) {
    quotes.push(saleQuote(asset, 'whatnot', asset.fairValueUsd * 1.03, 'Whatnot live-auction push'));
  }

  if (asset.fairValueUsd < 120) {
    quotes.push(saleQuote(asset, 'comc', asset.fairValueUsd * 0.97, 'COMC long-tail consignment'));
  }

  quotes.push(holdQuote(asset));
  return quotes;
}

function thresholdFor(asset: PackAlphaAsset, quoteCandidate: PackAlphaExecutionQuote): Threshold {
  if (quoteCandidate.action === 'grade') {
    return thresholds.grading;
  }

  if (quoteCandidate.action === 'buy') {
    if (asset.liquidityScore < 0.55 || asset.fairValueUsd >= 1000) {
      return thresholds.thinGrail;
    }
    if (asset.grade === 'raw') {
      return thresholds.liquidRawBuy;
    }
    if (quoteCandidate.venue === 'slab' || quoteCandidate.venue === 'collector_crypt') {
      return thresholds.externalSweep;
    }
    return thresholds.liquidGradedBuy;
  }

  if (quoteCandidate.action === 'request_purchase') {
    return thresholds.externalSweep;
  }

  if (quoteCandidate.action === 'tokenize' || quoteCandidate.action === 'redeem') {
    return {
      requiredEdgePct: 0,
      confidence: 0.7,
      liquidity: 0.4
    };
  }

  return {
    requiredEdgePct: 8,
    confidence: 0.6,
    liquidity: 0.45
  };
}

function edgePct(asset: PackAlphaAsset, quoteCandidate: PackAlphaExecutionQuote) {
  if (quoteCandidate.action === 'buy' || quoteCandidate.action === 'request_purchase') {
    const allInCost = (asset.askUsd ?? asset.fairValueUsd) + quoteCandidate.feesUsd + quoteCandidate.frictionUsd;
    const basisCost = quoteCandidate.action === 'request_purchase' ? (asset.targetMaxBidUsd ?? asset.exitValueUsd) : allInCost;
    if (quoteCandidate.action === 'request_purchase') {
      return basisCost > 0 ? (quoteCandidate.expectedNetValueUsd / basisCost) * 100 : 0;
    }
    return allInCost > 0 ? (quoteCandidate.expectedNetValueUsd / allInCost) * 100 : 0;
  }

  const basis = asset.costBasisUsd ?? asset.exitValueUsd;
  return basis > 0 ? ((quoteCandidate.expectedNetValueUsd - basis) / basis) * 100 : 0;
}

export function runNetEdgeRouter(assetId: string): PackAlphaDecision | null {
  const asset = getPackAlphaAsset(assetId);
  if (!asset) {
    return null;
  }

  const valuationHash = valuationHashFor(asset);
  const downsideReserveUsd = sourceRiskReserve(asset);
  const quotes = buildPackAlphaQuotes(asset).sort((a, b) => edgePct(asset, b) - edgePct(asset, a));
  const viable = quotes.filter((quoteCandidate) => {
    const threshold = thresholdFor(asset, quoteCandidate);
    return (
      edgePct(asset, quoteCandidate) >= threshold.requiredEdgePct &&
      quoteCandidate.confidenceScore >= threshold.confidence &&
      quoteCandidate.liquidityScore >= threshold.liquidity
    );
  });
  const best = viable[0] ?? quotes[0];
  const bestEdgePct = best ? edgePct(asset, best) : -100;
  const needsHumanReview =
    !best ||
    bestEdgePct < 0 ||
    asset.fairValueUsd >= 500 ||
    asset.confidenceScore < 0.6 ||
    ((best.action === 'buy' || best.action === 'request_purchase') && (asset.askUsd ?? asset.targetMaxBidUsd ?? 0) > 500) ||
    (best.action === 'tokenize' || best.action === 'redeem') ||
    (best.action === 'grade' && (asset.costBasisUsd ?? 0) > 300);
  const action: PackAlphaAction = !best
    ? 'avoid'
    : needsHumanReview && bestEdgePct < 0
      ? 'avoid'
      : needsHumanReview && asset.confidenceScore < 0.6
        ? 'human_review'
        : best.action;
  const reasonCodes = [
    ...(action === 'avoid' ? ['AVOID_NEGATIVE_NET_EDGE'] : best?.reasonCodes ?? ['NO_EXECUTION_ROUTE']),
    ...(bestEdgePct < 0 ? ['EDGE_BELOW_ZERO'] : []),
    ...(asset.fairValueUsd >= 500 ? [action === 'avoid' ? 'HIGH_VALUE_REVIEW_FLAG' : 'HIGH_VALUE_HUMAN_APPROVAL'] : []),
    ...(asset.confidenceScore < 0.6 ? ['LOW_CONFIDENCE'] : []),
    ...(asset.liquidityScore < 0.55 ? ['LOW_LIQUIDITY'] : []),
    ...(asset.sourceCount < 3 ? ['LOW_SOURCE_COUNT'] : [])
  ];

  const humanApprovalRequired = action === 'avoid' ? false : needsHumanReview;
  const decisionBase = {
    assetId: asset.id,
    action,
    preferredVenue: best?.venue,
    maxBidUsd:
      action === 'buy'
        ? roundMoney((asset.askUsd ?? 0) * 0.98)
        : action === 'request_purchase'
          ? roundMoney(asset.targetMaxBidUsd ?? asset.exitValueUsd * 0.9)
          : undefined,
    minAskUsd: action === 'sell' ? roundMoney(best?.expectedNetValueUsd ?? asset.exitValueUsd) : undefined,
    expectedNetEdgePct: roundMoney(bestEdgePct),
    expectedNetValueUsd: roundMoney(best?.expectedNetValueUsd ?? 0),
    confidenceScore: asset.confidenceScore,
    liquidityScore: asset.liquidityScore,
    downsideReserveUsd,
    timeStopAt: action === 'hold' ? addDays(now, 14) : undefined,
    priceStopUsd: action === 'hold' ? roundMoney(asset.exitValueUsd * 0.9) : undefined,
    humanApprovalRequired,
    reasonCodes,
    usedQuoteIds: best ? [best.quoteId] : [],
    usedValuationHashes: [valuationHash],
    routeRanking: quotes
  };

  return {
    ...decisionBase,
    decisionHash: stableHash(decisionBase)
  };
}

export function createPackAlphaIntent(assetId: string) {
  const decision = runNetEdgeRouter(assetId);
  if (!decision) {
    return null;
  }

  const createdAt = new Date().toISOString();
  const intentBase = {
    intentId: `intent-${randomUUID()}`,
    assetId,
    action: decision.action,
    venue: decision.preferredVenue,
    quoteId: decision.usedQuoteIds[0],
    decisionHash: decision.decisionHash,
    status: decision.humanApprovalRequired ? 'requires_approval' : 'ready',
    createdAt
  } satisfies Omit<PackAlphaIntent, 'receiptHash'>;
  const intent: PackAlphaIntent = {
    ...intentBase,
    receiptHash: stableHash(intentBase)
  };
  intents.set(intent.intentId, intent);
  return intent;
}

function createPackAlphaIntentFromDecision(decision: PackAlphaDecision): PackAlphaIntent {
  const createdAt = new Date().toISOString();
  const intentBase = {
    intentId: `intent-${randomUUID()}`,
    assetId: decision.assetId,
    action: decision.action,
    venue: decision.preferredVenue,
    quoteId: decision.usedQuoteIds[0],
    decisionHash: decision.decisionHash,
    status: decision.humanApprovalRequired ? 'requires_approval' : 'ready',
    createdAt
  } satisfies Omit<PackAlphaIntent, 'receiptHash'>;
  const intent: PackAlphaIntent = {
    ...intentBase,
    receiptHash: stableHash(intentBase)
  };
  intents.set(intent.intentId, intent);
  return intent;
}

export function listPackAlphaIntents() {
  return [...intents.values()].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function listPackAlphaPurchaseOrders() {
  return [...purchaseOrders.values()].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function buildPackAlphaRound() {
  const decisions = assets.map((asset) => runNetEdgeRouter(asset.id)).filter((item): item is PackAlphaDecision => Boolean(item));
  const executableCount = decisions.filter((decision) => !decision.humanApprovalRequired && !['avoid', 'human_review'].includes(decision.action)).length;
  const bestDecision = [...decisions].sort((a, b) => b.expectedNetEdgePct - a.expectedNetEdgePct)[0];
  return {
    roundId: 'round-procurement-vault-01',
    strategy: 'Concierge Vault Router',
    executableCount,
    averageConfidence:
      Math.round((decisions.reduce((sum, decision) => sum + decision.confidenceScore, 0) / decisions.length) * 100) /
      100,
    bestDecision,
    decisions,
    generatedAt: new Date().toISOString()
  };
}

export function runPackAlphaAgentMode(): PackAlphaAgentRun | null {
  const decisions = assets.map((asset) => runNetEdgeRouter(asset.id)).filter((item): item is PackAlphaDecision => Boolean(item));
  const rankedCandidates = decisions
    .sort((a, b) => {
      if (b.expectedNetEdgePct !== a.expectedNetEdgePct) {
        return b.expectedNetEdgePct - a.expectedNetEdgePct;
      }
      return b.confidenceScore - a.confidenceScore;
    });
  const selected = rankedCandidates[0];
  if (!selected) {
    return null;
  }

  const { decisionHash: _previousDecisionHash, ...selectedBase } = selected;
  const decisionBase = {
    ...selectedBase,
    action: selected.action === 'avoid' ? 'human_review' : selected.action,
    humanApprovalRequired: true,
    reasonCodes:
      selected.action === 'avoid'
        ? [
            'AGENT_SCOUT_MODE',
            'FRESH_EXECUTABLE_QUOTE_REQUIRED',
            ...selected.reasonCodes.filter((reason) => !reason.startsWith('AVOID'))
          ]
        : ['AGENT_SCOUT_MODE', ...selected.reasonCodes]
  } satisfies Omit<PackAlphaDecision, 'decisionHash'>;
  const decision: PackAlphaDecision = {
    ...decisionBase,
    decisionHash: stableHash(decisionBase)
  };
  const intent = createPackAlphaIntentFromDecision(decision);

  return {
    runId: `agent-run-${randomUUID()}`,
    mode: 'agent_mode',
    selectedAssetId: decision.assetId,
    scannedCount: decisions.length,
    candidateCount: rankedCandidates.length,
    generatedAt: new Date().toISOString(),
    decision,
    intent,
    checks: [
      'Market Scout scanned source-backed targets and vault items.',
      'Valuation Verify rejected fake asks and required executable quote follow-up.',
      'Net Edge Router ranked routes by expected edge, confidence, liquidity, and friction.',
      'Vault Router queued the selected action as a local order intent.'
    ]
  };
}

export function createPackAlphaPurchaseOrder(input: {
  assetId?: string;
  pickedUpId?: string;
  walletAddress?: string;
  signedIn?: boolean;
}): PackAlphaPurchaseOrder | null {
  const asset = input.assetId ? getPackAlphaAsset(input.assetId) : null;
  const pickedUp = input.pickedUpId ? pickedUpItems.find((item) => item.id === input.pickedUpId) : null;
  const linkedAsset = pickedUp?.linkedAssetId ? getPackAlphaAsset(pickedUp.linkedAssetId) : null;
  const itemAsset = asset ?? linkedAsset;
  const item = itemAsset ?? pickedUp;

  if (!item) {
    return null;
  }

  const rawDecision = itemAsset ? runNetEdgeRouter(itemAsset.id) : null;
  let intent: PackAlphaIntent | undefined;
  if (rawDecision) {
    const { decisionHash: _previousDecisionHash, ...rawDecisionBase } = rawDecision;
    const decisionBase = {
      ...rawDecisionBase,
      action: rawDecision.action === 'avoid' ? 'human_review' : rawDecision.action,
      humanApprovalRequired: true,
      reasonCodes:
        rawDecision.action === 'avoid'
          ? [
              'IN_APP_USDC_PURCHASE',
              'FRESH_EXECUTABLE_QUOTE_REQUIRED',
              ...rawDecision.reasonCodes.filter((reason) => !reason.startsWith('AVOID'))
            ]
          : ['IN_APP_USDC_PURCHASE', ...rawDecision.reasonCodes]
    } satisfies Omit<PackAlphaDecision, 'decisionHash'>;
    intent = createPackAlphaIntentFromDecision({
      ...decisionBase,
      decisionHash: stableHash(decisionBase)
    });
  }
  const createdAt = new Date().toISOString();
  const maxAuthorizationUsd = itemAsset
    ? roundMoney(itemAsset.targetMaxBidUsd ?? itemAsset.fairValueUsd)
    : undefined;
  const quoteRequired = true;
  const orderBase = {
    orderId: `pausdc-order-${randomUUID()}`,
    itemId: 'id' in item ? item.id : input.pickedUpId ?? 'picked-up',
    assetId: itemAsset?.id,
    itemName: item.name,
    itemSetName: item.setName,
    walletAddress: input.walletAddress,
    settlementToken: 'paUSDC' as const,
    status: !input.walletAddress || !input.signedIn ? 'wallet_signature_required' as const : 'quote_required' as const,
    maxAuthorizationUsd,
    quoteRequired,
    intent,
    createdAt,
    notes: [
      'Purchase stays inside Pack Alpha; no marketplace handoff.',
      'Agent must secure a fresh executable quote before paUSDC is captured.',
      'User signs in with wallet, then commits the purchase intent on Monad.'
    ]
  };
  const order: PackAlphaPurchaseOrder = {
    ...orderBase,
    receiptHash: stableHash(orderBase)
  };
  purchaseOrders.set(order.orderId, order);
  return order;
}

export function createPackAlphaVaultActionTicket(input: {
  holdingId: string;
  action: 'tokenize' | 'redeem';
  walletAddress?: string;
  signedIn?: boolean;
}): PackAlphaVaultActionTicket | null {
  const holding = getPackAlphaProfileHolding(input.holdingId);
  if (!holding || !holding.availableActions.includes(input.action)) {
    return null;
  }

  const createdAt = new Date().toISOString();
  const expectedFeeUsd =
    input.action === 'tokenize'
      ? roundMoney(Math.max(12, holding.marketValueUsd * 0.025))
      : roundMoney(Math.max(28, holding.marketValueUsd * 0.018));
  const status: PackAlphaVaultActionTicket['status'] =
    !input.walletAddress || !input.signedIn
      ? 'wallet_signature_required'
      : holding.marketValueUsd >= 500
        ? 'requires_approval'
        : 'ready_for_onchain_commit';
  const base = {
    ticketId: `vault-action-${randomUUID()}`,
    holdingId: holding.holdingId,
    assetId: holding.assetId,
    action: input.action,
    status,
    walletAddress: input.walletAddress,
    createdAt,
    expectedFeeUsd,
    custodyLocation: holding.custodyLocation,
    steps:
      input.action === 'tokenize'
        ? [
            { label: 'Verify vault custody and valuation hash', status: 'done' as const },
            { label: 'Sign wallet intent for Monad receipt mint', status: status === 'wallet_signature_required' ? 'active' as const : 'done' as const },
            { label: 'Mint NFT-style vault receipt', status: status === 'ready_for_onchain_commit' ? 'active' as const : 'pending' as const },
            { label: 'Prepare OpenSea-style listing metadata', status: 'pending' as const }
          ]
        : [
            { label: 'Verify owner wallet and vault receipt', status: 'done' as const },
            { label: 'Sign redemption request', status: status === 'wallet_signature_required' ? 'active' as const : 'done' as const },
            { label: 'Lock tokenized receipt if minted', status: status === 'ready_for_onchain_commit' ? 'active' as const : 'pending' as const },
            { label: 'Create insured shipment from vault', status: 'pending' as const }
          ],
    notes:
      input.action === 'tokenize'
        ? [
            'Tokenization mints a vault receipt for the existing physical card, not a synthetic card.',
            'High-value cards still require human approval before public listing.',
            'Receipt hash preserves valuation source, custody route, and owner intent.'
          ]
        : [
            'Redemption moves the item out of vault custody and into insured physical delivery.',
            'If an NFT-style receipt exists, it must be locked or burned before shipment.',
            'Address collection is intentionally outside this demo screen.'
          ]
  };
  const ticket: PackAlphaVaultActionTicket = {
    ...base,
    receiptHash: stableHash(base)
  };
  vaultActionTickets.set(ticket.ticketId, ticket);
  return ticket;
}

export function createPackAlphaSellActionTicket(input: {
  holdingId: string;
  venue: PackAlphaSellOption['venue'];
  walletAddress?: string;
  signedIn?: boolean;
}): PackAlphaSellActionTicket | null {
  const holding = getPackAlphaProfileHolding(input.holdingId);
  const option = holding?.sellOptions.find((item) => item.venue === input.venue);
  if (!holding || !option) {
    return null;
  }

  const createdAt = new Date().toISOString();
  const status: PackAlphaSellActionTicket['status'] =
    !input.walletAddress || !input.signedIn
      ? 'wallet_signature_required'
      : option.estimatedNetUsd >= 500
        ? 'requires_approval'
        : 'ready_for_listing';
  const base = {
    ticketId: `sell-action-${randomUUID()}`,
    holdingId: holding.holdingId,
    assetId: holding.assetId,
    venue: option.venue,
    label: option.label,
    status,
    walletAddress: input.walletAddress,
    createdAt,
    grossAskUsd: option.grossAskUsd,
    estimatedNetUsd: option.estimatedNetUsd,
    custodyLocation: holding.custodyLocation,
    steps: [
      { label: 'Verify owner wallet and vault custody', status: 'done' as const },
      { label: 'Lock listing intent on Monad', status: status === 'wallet_signature_required' ? 'active' as const : 'done' as const },
      { label: `Prepare ${option.label} listing packet`, status: status === 'ready_for_listing' ? 'active' as const : 'pending' as const },
      { label: 'Human review for photos, pricing, and fulfillment route', status: status === 'requires_approval' ? 'active' as const : 'pending' as const }
    ],
    notes: [
      option.basis,
      'Listing ticket keeps sale execution inside Pack Alpha until the user approves final marketplace terms.',
      'Estimated net includes marketplace fee assumptions and excludes unusual shipping or insurance overrides.'
    ]
  };
  const ticket: PackAlphaSellActionTicket = {
    ...base,
    receiptHash: stableHash(base)
  };
  sellActionTickets.set(ticket.ticketId, ticket);
  return ticket;
}
