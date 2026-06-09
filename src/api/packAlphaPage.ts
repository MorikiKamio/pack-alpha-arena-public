import { renderFaviconLinks } from './branding.js';

const agents = [
  {
    name: 'Vault Scout',
    signal: 'Max bid',
    pnl: '+14.8%',
    style: 'Finds below-benchmark cards and queues purchase requests.'
  },
  {
    name: 'Japan Desk',
    signal: 'Regional spread',
    pnl: '+9.6%',
    style: 'Checks Mercari, Sneaker Dunk, and Cardrush before approval.'
  },
  {
    name: 'Vault Operator',
    signal: 'Custody state',
    pnl: 'ready',
    style: 'Mints vault receipts, lists NFTs, or redeems physical cards.'
  }
] as const;

const marketSignals = [
  ['Markets', '5', 'US/JP/SG/Dubai/Holland'],
  ['Benchmarks', 'source-backed', 'no fake asks'],
  ['Vault item', 'NFT ready', 'redeemable'],
  ['Order token', 'paUSDC', 'Monad testnet']
] as const;

const predictionRows = [
  ['Order intent', 'Max bid + source hash', 'onchain'],
  ['Vault receipt', 'Custody state + owner', 'onchain'],
  ['Redeem request', 'Ship physical card home', 'queued']
] as const;

const executionRoutes = [
  ['Agent', 'Scout venues', 'fresh quote required'],
  ['Concierge', 'Purchase card', 'below max bid'],
  ['Vault', 'Tokenize NFT', 'OpenSea-style listing'],
  ['Monad', 'Receipt', 'order hash ready']
] as const;

const heroCollectibles = [
  {
    className: 'one',
    label: 'Card target',
    title: 'Charizard ex SIR',
    imageUrl: 'https://images.pokemontcg.io/sv3pt5/199_hires.png',
    imageAlt: 'Charizard ex Special Illustration Rare card'
  },
  {
    className: 'two',
    label: 'Box watchlist',
    title: 'White Flare',
    imageUrl: 'https://tcg-collection.com/cdn/shop/files/pokemon-white-flare-booster-box-japon.webp?v=1759175427',
    imageAlt: 'Japanese Pokemon TCG White Flare booster box'
  },
  {
    className: 'three',
    label: 'Vault item',
    title: 'Pikachu PSA 10',
    imageUrl: 'https://images.pokemontcg.io/svp/85_hires.png',
    imageAlt: 'Pikachu with Grey Felt Hat promo card'
  }
] as const;

const proofCollectibles = [
  {
    name: 'Glory of Team Rocket Box',
    meta: 'SV10 Japanese / quote required',
    imageUrl: 'https://pokeplaza.com/cdn/shop/files/Pokemon-sv10-Glory-of-Team-Rocket-Boosterbox_1200x1200.jpg?v=1744678662',
    imageAlt: 'Japanese Pokemon TCG Glory of Team Rocket booster box'
  },
  {
    name: 'Black Bolt Booster Box',
    meta: 'SV11B Japanese / watchlist',
    imageUrl: 'https://www.tonysrips.com/cdn/shop/files/BlackBlot_1200x1200.jpg?v=1749152767',
    imageAlt: 'Japanese Pokemon TCG Black Bolt booster box'
  },
  {
    name: 'Mew ex SIR',
    meta: 'Paldean Fates / scouting',
    imageUrl: 'https://images.pokemontcg.io/sv4pt5/232_hires.png',
    imageAlt: 'Mew ex Special Illustration Rare card'
  }
] as const;

const bannerCollectibles = [
  {
    label: 'PSA 10 target',
    title: 'Charizard ex SIR',
    imageUrl: 'https://images.pokemontcg.io/sv3pt5/199_hires.png',
    imageAlt: 'Charizard ex Special Illustration Rare card'
  },
  {
    label: 'Vault ready',
    title: 'Pikachu Grey Felt Hat',
    imageUrl: 'https://images.pokemontcg.io/svp/85_hires.png',
    imageAlt: 'Pikachu with Grey Felt Hat promo card'
  },
  {
    label: 'Japan box',
    title: 'White Flare',
    imageUrl: 'https://tcg-collection.com/cdn/shop/files/pokemon-white-flare-booster-box-japon.webp?v=1759175427',
    imageAlt: 'Japanese Pokemon TCG White Flare booster box'
  },
  {
    label: 'Watchlist',
    title: 'Black Bolt',
    imageUrl: 'https://www.tonysrips.com/cdn/shop/files/BlackBlot_1200x1200.jpg?v=1749152767',
    imageAlt: 'Japanese Pokemon TCG Black Bolt booster box'
  },
  {
    label: 'Founder trade',
    title: 'Team Rocket Box',
    imageUrl: 'https://pokeplaza.com/cdn/shop/files/Pokemon-sv10-Glory-of-Team-Rocket-Boosterbox_1200x1200.jpg?v=1744678662',
    imageAlt: 'Japanese Pokemon TCG Glory of Team Rocket booster box'
  },
  {
    label: 'Raw scout',
    title: 'Mew ex SIR',
    imageUrl: 'https://images.pokemontcg.io/sv4pt5/232_hires.png',
    imageAlt: 'Mew ex Special Illustration Rare card'
  }
] as const;

function renderAgentRows() {
  return agents
    .map(
      (agent) => `
        <article class="agent-row">
          <div class="agent-token" aria-hidden="true">${agent.name.slice(0, 2).toUpperCase()}</div>
          <div class="agent-copy">
            <strong>${agent.name}</strong>
            <span>${agent.style}</span>
          </div>
          <div class="agent-signal">
            <span>${agent.signal}</span>
            <strong>${agent.pnl}</strong>
          </div>
        </article>
      `
    )
    .join('');
}

function renderMarketSignals() {
  return marketSignals
    .map(
      ([label, value, change]) => `
        <div class="signal-tile">
          <span>${label}</span>
          <strong>${value}</strong>
          <em>${change}</em>
        </div>
      `
    )
    .join('');
}

function renderPredictionRows() {
  return predictionRows
    .map(
      ([label, outcome, odds]) => `
        <div class="prediction-row">
          <span>${label}</span>
          <strong>${outcome}</strong>
          <em>${odds}</em>
        </div>
      `
    )
    .join('');
}

function renderExecutionRoutes() {
  return executionRoutes
    .map(
      ([venue, action, status]) => `
        <div class="execution-route">
          <span>${venue}</span>
          <strong>${action}</strong>
          <em>${status}</em>
        </div>
      `
    )
    .join('');
}

function renderHeroCollectibles() {
  return heroCollectibles
    .map(
      (item) => `
        <div class="pack-card ${item.className}">
          <img src="${item.imageUrl}" alt="${item.imageAlt}" loading="eager" />
          <div class="pack-label">
            <span>${item.label}</span>
            <strong>${item.title}</strong>
          </div>
        </div>
      `
    )
    .join('');
}

function renderProofCollectibles() {
  return proofCollectibles
    .map(
      (item) => `
        <article class="proof-collectible">
          <div class="proof-collectible-media">
            <img src="${item.imageUrl}" alt="${item.imageAlt}" loading="lazy" />
          </div>
          <strong>${item.name}</strong>
          <span>${item.meta}</span>
        </article>
      `
    )
    .join('');
}

function renderBannerCollectibles() {
  const row = [...bannerCollectibles, ...bannerCollectibles]
    .map(
      (item) => `
        <article class="banner-item">
          <span class="banner-media">
            <img src="${item.imageUrl}" alt="${item.imageAlt}" loading="eager" />
          </span>
          <span class="banner-copy">
            <em>${item.label}</em>
            <strong>${item.title}</strong>
          </span>
        </article>
      `
    )
    .join('');

  return `
    <section class="drop-banner" aria-label="Live Pack Alpha card ticker">
      <div class="drop-banner-inner">
        <div class="banner-lede">
          <span class="eyebrow">Live vault ticker</span>
          <h2>Tap cards, buy in-app with paUSDC.</h2>
          <a class="hero-cta" href="/pack-alpha/app">Open desk</a>
        </div>
        <div class="banner-track-wrap" aria-hidden="true">
          <div class="banner-track">${row}</div>
        </div>
      </div>
    </section>
  `;
}

export function renderPackAlphaPage() {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pack Alpha Concierge Vault</title>
        <meta
          name="description"
          content="A Monad-native Pokemon card procurement concierge with AI market scouting, multi-region vaults, NFT receipts, and physical redemption."
        />
        ${renderFaviconLinks()}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style>
          :root {
            --ink: #fbfaf9;
            --muted: #ddd7fe;
            --quiet: #9c92cd;
            --black: #0e091c;
            --panel: #171029;
            --panel-2: #21163d;
            --line: rgba(221, 215, 254, 0.14);
            --line-strong: rgba(221, 215, 254, 0.24);
            --yellow: #ddd7fe;
            --cyan: #85e6ff;
            --pink: #ff8ee4;
            --green: #6e54ff;
            --red: #ffae45;
            --blue: #6e54ff;
            --page: min(1180px, calc(100vw - 32px));
          }

          * {
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            margin: 0;
            color: var(--ink);
            background: var(--black);
            font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          button,
          a {
            -webkit-tap-highlight-color: transparent;
          }

          .site {
            min-height: 100vh;
            background:
              radial-gradient(circle at 15% -8%, rgba(110, 84, 255, 0.42), transparent 34rem),
              radial-gradient(circle at 86% 6%, rgba(255, 142, 228, 0.2), transparent 28rem),
              radial-gradient(circle at 54% -12%, rgba(133, 230, 255, 0.16), transparent 24rem),
              linear-gradient(180deg, rgba(221, 215, 254, 0.08), rgba(14, 9, 28, 0) 460px),
              repeating-linear-gradient(90deg, rgba(221, 215, 254, 0.045) 0 1px, transparent 1px 88px),
              var(--black);
            overflow-x: hidden;
          }

          .topbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 20;
            background: rgba(14, 9, 28, 0.78);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(18px);
          }

          .topbar-inner {
            width: var(--page);
            min-height: 68px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
          }

          .brand {
            display: flex;
            align-items: center;
            gap: 12px;
            font-family: "Archivo", sans-serif;
            font-weight: 900;
            letter-spacing: 0;
          }

          .brand-mark {
            width: 34px;
            height: 34px;
            border-radius: 8px;
            display: grid;
            place-items: center;
            color: #0e091c;
            background:
              linear-gradient(135deg, var(--yellow), #ffffff 38%, var(--green) 39%, var(--green) 68%, var(--cyan) 69%);
            box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.18);
          }

          .brand-copy {
            display: grid;
            line-height: 1;
          }

          .brand-copy small {
            margin-top: 5px;
            color: var(--muted);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.68rem;
            font-weight: 600;
            text-transform: uppercase;
          }

          .nav {
            display: flex;
            align-items: center;
            gap: 20px;
            color: #ddd7fe;
            font-size: 0.92rem;
            font-weight: 700;
          }

          .nav a {
            color: rgba(251, 250, 249, 0.76);
          }

          .nav a:hover {
            color: var(--ink);
          }

          .nav-cta,
          .hero-cta {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 44px;
            padding: 0 16px;
            border-radius: 8px;
            background: var(--green);
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.16);
            font-weight: 900;
            box-shadow: 0 12px 34px rgba(110, 84, 255, 0.3);
          }

          .hero {
            position: relative;
            min-height: 88vh;
            display: grid;
            align-items: center;
            padding: 112px 0 76px;
            isolation: isolate;
            overflow: hidden;
          }

          .hero::before {
            content: "";
            position: absolute;
            inset: 0;
            background:
              linear-gradient(90deg, rgba(14, 9, 28, 0.98) 0%, rgba(14, 9, 28, 0.84) 42%, rgba(14, 9, 28, 0.62) 100%),
              linear-gradient(180deg, rgba(110, 84, 255, 0.2), rgba(255, 142, 228, 0.05) 42%, rgba(14, 9, 28, 0.22) 100%);
            z-index: -2;
          }

          .hero::after {
            content: "";
            position: absolute;
            inset: auto 0 0;
            height: 116px;
            background: linear-gradient(180deg, rgba(14, 9, 28, 0), #0e091c);
            z-index: -1;
          }

          .hero-inner {
            width: var(--page);
            margin: 0 auto;
            display: grid;
            grid-template-columns: minmax(0, 0.96fr) minmax(420px, 0.86fr);
            gap: 48px;
            align-items: center;
          }

          .eyebrow {
            width: fit-content;
            padding: 8px 10px;
            border-radius: 8px;
            border: 1px solid rgba(221, 215, 254, 0.38);
            background: rgba(110, 84, 255, 0.16);
            color: var(--yellow);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
          }

          h1,
          h2,
          h3,
          p {
            margin: 0;
          }

          h1 {
            max-width: 780px;
            margin-top: 24px;
            font-family: "Archivo", sans-serif;
            font-size: clamp(3.1rem, 5.2vw, 4.9rem);
            line-height: 0.89;
            letter-spacing: 0;
            text-transform: uppercase;
          }

          .hero-copy {
            max-width: 680px;
            margin-top: 24px;
            color: #ddd7fe;
            font-size: clamp(1.05rem, 2vw, 1.32rem);
            line-height: 1.55;
          }

          .hero-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 34px;
          }

          .hero-secondary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 44px;
            padding: 0 16px;
            border-radius: 8px;
            border: 1px solid var(--line-strong);
            color: var(--ink);
            font-weight: 800;
            background: rgba(255, 255, 255, 0.06);
          }

          .drop-banner {
            padding: 86px 0 18px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            background:
              radial-gradient(circle at 10% 0%, rgba(255, 142, 228, 0.22), transparent 22rem),
              radial-gradient(circle at 78% 18%, rgba(133, 230, 255, 0.18), transparent 24rem),
              linear-gradient(90deg, rgba(110, 84, 255, 0.36), rgba(133, 230, 255, 0.1) 48%, rgba(255, 142, 228, 0.2)),
              rgba(17, 11, 34, 0.82);
            overflow: hidden;
          }

          .drop-banner-inner {
            width: var(--page);
            margin: 0 auto;
            display: grid;
            grid-template-columns: minmax(240px, 0.36fr) minmax(0, 1fr);
            gap: 22px;
            align-items: center;
          }

          .banner-lede {
            min-width: 0;
            display: grid;
            gap: 12px;
            align-content: center;
          }

          .banner-lede h2 {
            font-family: "Archivo", sans-serif;
            font-size: clamp(1.45rem, 2.8vw, 2.55rem);
            line-height: 0.95;
            text-transform: uppercase;
          }

          .banner-lede .hero-cta {
            width: fit-content;
          }

          .banner-track-wrap {
            min-width: 0;
            overflow: hidden;
            mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
          }

          .banner-track {
            width: max-content;
            display: flex;
            gap: 12px;
            animation: banner-scroll 28s linear infinite;
            will-change: transform;
          }

          .banner-track:hover {
            animation-play-state: paused;
          }

          .banner-item {
            width: 196px;
            min-height: 168px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.14);
            background: rgba(14, 9, 28, 0.72);
            display: grid;
            grid-template-rows: 104px auto;
            overflow: hidden;
            box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28);
          }

          .banner-media {
            position: relative;
            display: grid;
            place-items: center;
            min-width: 0;
            min-height: 0;
            background:
              radial-gradient(circle at 50% 18%, rgba(221, 215, 254, 0.2), transparent 8rem),
              #0e091c;
            overflow: hidden;
          }

          .banner-media img {
            position: absolute;
            inset: 10px;
            display: block;
            width: calc(100% - 20px);
            height: calc(100% - 20px);
            object-fit: contain;
            filter: drop-shadow(0 16px 20px rgba(0, 0, 0, 0.42));
          }

          .banner-copy {
            min-width: 0;
            padding: 10px;
            display: grid;
            gap: 4px;
          }

          .banner-copy em {
            color: var(--muted);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.68rem;
            font-style: normal;
            font-weight: 800;
            text-transform: uppercase;
          }

          .banner-copy strong {
            font-family: "Archivo", sans-serif;
            font-size: 1.08rem;
            line-height: 1;
            text-transform: uppercase;
            overflow-wrap: anywhere;
          }

          @keyframes banner-scroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(calc(-50% - 6px));
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .banner-track {
              animation: none;
            }
          }

          .hero-proof {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
            margin-top: 42px;
            max-width: 680px;
          }

          .hero-proof div {
            min-height: 86px;
            padding: 14px;
            border-radius: 8px;
            border: 1px solid var(--line);
            background: rgba(255, 255, 255, 0.045);
          }

          .hero-proof strong {
            display: block;
            font-family: "Archivo", sans-serif;
            font-size: 1.56rem;
          }

          .hero-proof span {
            display: block;
            margin-top: 5px;
            color: var(--muted);
            font-size: 0.78rem;
            line-height: 1.3;
          }

          .arena-visual {
            position: relative;
            min-height: 620px;
            min-width: 0;
          }

          .pack-stack {
            position: absolute;
            inset: 28px 0 auto clamp(0px, 2.6vw, 32px);
            width: min(470px, calc(100% - clamp(0px, 2.6vw, 32px)));
            height: 520px;
          }

          .pack-card {
            position: absolute;
            width: 260px;
            height: 372px;
            min-width: 0;
            min-height: 0;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.16);
            box-shadow: 0 30px 76px rgba(0, 0, 0, 0.48);
            overflow: hidden;
            transform-origin: center;
          }

          .pack-card::before {
            content: "";
            position: absolute;
            inset: 10px;
            border-radius: 6px;
            border: 1px solid rgba(255, 255, 255, 0.18);
          }

          .pack-card::after {
            content: "";
            position: absolute;
            inset: 0;
            background:
              linear-gradient(125deg, rgba(255, 255, 255, 0.28), transparent 34%, transparent 64%, rgba(255, 255, 255, 0.12)),
              repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0 1px, transparent 1px 11px);
            mix-blend-mode: screen;
            opacity: 0.82;
            pointer-events: none;
          }

          .pack-card img {
            position: absolute;
            inset: 20px 20px 88px;
            width: calc(100% - 40px);
            height: calc(100% - 108px);
            object-fit: contain;
            z-index: 1;
            filter: drop-shadow(0 22px 28px rgba(0, 0, 0, 0.5));
          }

          .pack-card.one {
            left: 4px;
            top: 94px;
            background: linear-gradient(160deg, #21163d, #0e091c 44%, #6e54ff);
            transform: rotate(-10deg);
          }

          .pack-card.two {
            left: 138px;
            top: 18px;
            background: linear-gradient(160deg, #21163d, #0e091c 42%, #85e6ff);
            transform: rotate(8deg);
          }

          .pack-card.three {
            left: 96px;
            top: 150px;
            background: linear-gradient(160deg, #21163d, #0e091c 45%, #ff8ee4);
            transform: rotate(2deg);
          }

          .pack-label {
            position: absolute;
            left: 24px;
            right: 24px;
            bottom: 26px;
            z-index: 2;
            display: grid;
            gap: 8px;
          }

          .pack-label span {
            color: rgba(255, 255, 255, 0.72);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
          }

          .pack-label strong {
            font-family: "Archivo", sans-serif;
            font-size: 2rem;
            line-height: 0.95;
            text-transform: uppercase;
          }

          .arena-terminal {
            position: absolute;
            right: 0;
            bottom: 0;
            width: min(395px, 82vw);
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.16);
            background: rgba(23, 16, 41, 0.92);
            box-shadow: 0 28px 80px rgba(0, 0, 0, 0.46);
            overflow: hidden;
          }

          .terminal-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 13px 14px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            color: var(--muted);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.72rem;
            text-transform: uppercase;
          }

          .terminal-status {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: var(--green);
          }

          .terminal-status::before {
            content: "";
            width: 7px;
            height: 7px;
            border-radius: 999px;
            background: var(--green);
            box-shadow: 0 0 12px var(--green);
          }

          .agent-list {
            display: grid;
          }

          .agent-row {
            display: grid;
            grid-template-columns: 42px minmax(0, 1fr) auto;
            gap: 12px;
            align-items: center;
            padding: 14px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .agent-token {
            width: 42px;
            height: 42px;
            border-radius: 8px;
            display: grid;
            place-items: center;
            background: rgba(110, 84, 255, 0.18);
            border: 1px solid rgba(221, 215, 254, 0.24);
            color: var(--yellow);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.72rem;
            font-weight: 800;
          }

          .agent-copy {
            min-width: 0;
            display: grid;
            gap: 4px;
          }

          .agent-copy strong,
          .agent-signal strong {
            font-size: 0.92rem;
          }

          .agent-copy span,
          .agent-signal span {
            color: var(--muted);
            font-size: 0.74rem;
            line-height: 1.35;
          }

          .agent-signal {
            display: grid;
            justify-items: end;
            gap: 4px;
          }

          .agent-signal strong {
            color: var(--green);
            font-family: "IBM Plex Mono", monospace;
          }

          .section {
            width: var(--page);
            margin: 0 auto;
            padding: 82px 0;
          }

          .section-head {
            display: grid;
            grid-template-columns: minmax(0, 0.78fr) minmax(280px, 0.42fr);
            gap: 32px;
            align-items: end;
            margin-bottom: 28px;
          }

          .section h2 {
            font-family: "Archivo", sans-serif;
            font-size: clamp(2.4rem, 5vw, 5.2rem);
            line-height: 0.9;
            letter-spacing: 0;
            text-transform: uppercase;
          }

          .section-head p {
            color: #ddd7fe;
            line-height: 1.55;
          }

          .band {
            background: #110b22;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .signal-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
          }

          .signal-tile {
            min-height: 154px;
            padding: 18px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.025));
            display: grid;
            align-content: space-between;
          }

          .signal-tile span,
          .prediction-row span,
          .flow-card span {
            color: var(--muted);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.74rem;
            font-weight: 700;
            text-transform: uppercase;
          }

          .signal-tile strong {
            margin-top: 24px;
            font-family: "Archivo", sans-serif;
            font-size: 2.35rem;
          }

          .signal-tile em {
            color: var(--green);
            font-family: "IBM Plex Mono", monospace;
            font-style: normal;
            font-weight: 700;
          }

          .execution-panel {
            display: grid;
            grid-template-columns: minmax(0, 0.74fr) minmax(320px, 0.46fr);
            gap: 18px;
            align-items: stretch;
          }

          .founder-proof-grid {
            display: grid;
            grid-template-columns: minmax(0, 0.86fr) minmax(320px, 0.46fr);
            gap: 18px;
            align-items: stretch;
          }

          .founder-proof-card,
          .vault-network-card {
            min-height: 290px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background: var(--panel);
            padding: 22px;
            display: grid;
            align-content: space-between;
            gap: 18px;
          }

          .founder-proof-card h3,
          .vault-network-card h3 {
            font-family: "Archivo", sans-serif;
            font-size: clamp(1.7rem, 3vw, 2.6rem);
            line-height: 0.95;
            text-transform: uppercase;
          }

          .founder-proof-card p,
          .vault-network-card p {
            color: #ddd7fe;
            line-height: 1.55;
          }

          .proof-chip-row,
          .vault-chip-row {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }

          .proof-chip,
          .vault-chip {
            min-height: 36px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background: rgba(255, 255, 255, 0.06);
            display: inline-flex;
            align-items: center;
            padding: 0 10px;
            color: var(--ink);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.74rem;
            font-weight: 800;
            text-transform: uppercase;
          }

          .proof-collectible-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
          }

          .proof-collectible {
            height: 214px;
            min-width: 0;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background: rgba(14, 9, 28, 0.58);
            display: grid;
            grid-template-rows: 126px minmax(0, auto) minmax(0, auto);
            gap: 6px;
            padding: 10px;
            overflow: hidden;
          }

          .proof-collectible-media {
            display: grid;
            place-items: center;
            min-width: 0;
            min-height: 0;
            border-radius: 8px;
            background:
              radial-gradient(circle at 50% 12%, rgba(221, 215, 254, 0.18), transparent 8rem),
              #0e091c;
            overflow: hidden;
          }

          .proof-collectible img {
            display: block;
            width: 100%;
            height: 100%;
            min-width: 0;
            min-height: 0;
            object-fit: contain;
            filter: drop-shadow(0 16px 22px rgba(0, 0, 0, 0.4));
          }

          .proof-collectible strong {
            font-size: 0.92rem;
            line-height: 1.12;
            overflow: hidden;
          }

          .proof-collectible span {
            color: var(--muted);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.68rem;
            font-weight: 800;
            text-transform: uppercase;
            overflow: hidden;
          }

          .execution-map {
            min-height: 390px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background:
              linear-gradient(145deg, rgba(110, 84, 255, 0.18), rgba(133, 230, 255, 0.06) 48%, rgba(255, 142, 228, 0.1)),
              var(--panel);
            display: grid;
            align-content: center;
            gap: 12px;
            padding: 22px;
          }

          .execution-node {
            min-height: 74px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background: rgba(5, 6, 7, 0.5);
            display: grid;
            grid-template-columns: 42px minmax(0, 1fr) auto;
            gap: 14px;
            align-items: center;
            padding: 14px;
          }

          .execution-node i {
            width: 42px;
            height: 42px;
            border-radius: 8px;
            display: grid;
            place-items: center;
            color: #0e091c;
            background: var(--yellow);
            font-family: "IBM Plex Mono", monospace;
            font-style: normal;
            font-weight: 900;
          }

          .execution-node strong {
            font-family: "Archivo", sans-serif;
            font-size: 1.08rem;
            text-transform: uppercase;
          }

          .execution-node span,
          .execution-node em {
            color: var(--muted);
            font-size: 0.82rem;
            line-height: 1.4;
          }

          .execution-node em {
            color: var(--green);
            font-family: "IBM Plex Mono", monospace;
            font-style: normal;
            font-weight: 800;
            white-space: nowrap;
          }

          .execution-table {
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background: var(--panel);
            overflow: hidden;
          }

          .execution-route {
            display: grid;
            grid-template-columns: minmax(0, 0.7fr) minmax(0, 0.8fr);
            gap: 8px 14px;
            min-height: 82px;
            padding: 16px 18px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .execution-route span,
          .execution-route em {
            color: var(--muted);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.74rem;
            font-weight: 700;
            text-transform: uppercase;
          }

          .execution-route strong {
            font-size: 1rem;
          }

          .execution-route em {
            grid-column: 1 / -1;
            color: var(--yellow);
            font-style: normal;
            text-transform: none;
          }

          .flow-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
          }

          .flow-card {
            position: relative;
            min-height: 220px;
            padding: 18px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: var(--panel);
            overflow: hidden;
          }

          .flow-card::after {
            content: "";
            position: absolute;
            left: 18px;
            right: 18px;
            bottom: 18px;
            height: 6px;
            border-radius: 999px;
            background: linear-gradient(90deg, var(--green), var(--cyan), var(--pink));
          }

          .flow-card h3 {
            margin-top: 36px;
            font-family: "Archivo", sans-serif;
            font-size: 1.3rem;
            line-height: 1.03;
            text-transform: uppercase;
          }

          .flow-card p {
            margin-top: 12px;
            color: #ddd7fe;
            line-height: 1.5;
            font-size: 0.94rem;
          }

          .prediction-panel {
            display: grid;
            grid-template-columns: minmax(0, 0.82fr) minmax(320px, 0.48fr);
            gap: 18px;
            align-items: stretch;
          }

          .arena-board {
            min-height: 420px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background:
              linear-gradient(135deg, rgba(110, 84, 255, 0.18), rgba(133, 230, 255, 0.04) 48%, rgba(255, 142, 228, 0.1)),
              var(--panel);
            position: relative;
            overflow: hidden;
          }

          .arena-board::before {
            content: "";
            position: absolute;
            inset: 28px;
            border-radius: 8px;
            border: 1px dashed rgba(255, 255, 255, 0.18);
          }

          .board-card {
            position: absolute;
            width: 170px;
            height: 236px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            background: var(--panel-2);
            box-shadow: 0 18px 50px rgba(0, 0, 0, 0.38);
            overflow: hidden;
          }

          .board-card::before {
            content: "";
            position: absolute;
            inset: 12px;
            border-radius: 6px;
            background:
              linear-gradient(160deg, rgba(255, 255, 255, 0.14), transparent 42%),
              var(--accent-color);
          }

          .board-card:nth-child(1) {
            --accent-color: linear-gradient(160deg, #ddd7fe, #0e091c);
            left: 12%;
            top: 20%;
            transform: rotate(-8deg);
          }

          .board-card:nth-child(2) {
            --accent-color: linear-gradient(160deg, #85e6ff, #0e091c);
            left: 38%;
            top: 12%;
            transform: rotate(5deg);
          }

          .board-card:nth-child(3) {
            --accent-color: linear-gradient(160deg, #ff8ee4, #0e091c);
            right: 12%;
            top: 27%;
            transform: rotate(11deg);
          }

          .prediction-table {
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            background: var(--panel);
            overflow: hidden;
          }

          .prediction-title {
            padding: 18px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
          }

          .prediction-title h3 {
            font-family: "Archivo", sans-serif;
            font-size: 1.62rem;
            text-transform: uppercase;
          }

          .prediction-title p {
            margin-top: 8px;
            color: var(--muted);
            line-height: 1.45;
          }

          .prediction-row {
            display: grid;
            grid-template-columns: minmax(116px, 0.75fr) minmax(0, 1fr) auto;
            gap: 14px;
            align-items: center;
            min-height: 76px;
            padding: 16px 18px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .prediction-row strong {
            overflow-wrap: anywhere;
          }

          .prediction-row em {
            min-width: 52px;
            text-align: right;
            color: var(--yellow);
            font-family: "IBM Plex Mono", monospace;
            font-style: normal;
            font-weight: 800;
          }

          .cta-band {
            padding: 88px 0;
            background:
              radial-gradient(circle at 82% 18%, rgba(255, 174, 69, 0.18), transparent 24rem),
              linear-gradient(90deg, rgba(110, 84, 255, 0.34), rgba(133, 230, 255, 0.12), rgba(255, 142, 228, 0.18)),
              #110b22;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          .cta-inner {
            width: var(--page);
            margin: 0 auto;
            display: grid;
            grid-template-columns: minmax(0, 0.78fr) auto;
            gap: 24px;
            align-items: center;
          }

          .cta-inner h2 {
            font-family: "Archivo", sans-serif;
            font-size: clamp(2.4rem, 5vw, 5rem);
            line-height: 0.9;
            text-transform: uppercase;
          }

          .cta-inner p {
            margin-top: 16px;
            color: #ddd7fe;
            line-height: 1.52;
            max-width: 640px;
          }

          footer {
            width: var(--page);
            margin: 0 auto;
            padding: 28px 0 42px;
            display: flex;
            justify-content: space-between;
            gap: 18px;
            color: var(--quiet);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.76rem;
          }

          @media (max-width: 980px) {
            .nav a {
              display: none;
            }

            .nav .nav-cta {
              display: inline-flex;
            }

            .drop-banner-inner,
            .hero-inner,
            .section-head,
            .founder-proof-grid,
            .execution-panel,
            .prediction-panel,
            .cta-inner {
              grid-template-columns: 1fr;
            }

            .hero-inner {
              gap: 28px;
            }

            .drop-banner {
              padding-top: 84px;
            }

            .banner-lede {
              grid-template-columns: minmax(0, 1fr) auto;
              gap: 10px 14px;
            }

            .banner-lede .eyebrow,
            .banner-lede h2 {
              grid-column: 1;
            }

            .banner-lede .hero-cta {
              grid-column: 2;
              grid-row: 1 / span 2;
              align-self: center;
            }

            .arena-visual {
              min-height: 520px;
            }

            .signal-grid,
            .flow-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 640px) {
            .topbar-inner {
              min-height: 62px;
            }

            .brand-copy small {
              display: none;
            }

            .hero {
              min-height: auto;
              padding-top: 58px;
              padding-bottom: 54px;
            }

            .drop-banner {
              padding-top: 82px;
              padding-bottom: 14px;
            }

            .drop-banner-inner {
              gap: 14px;
            }

            .banner-lede {
              grid-template-columns: 1fr;
            }

            .banner-lede .eyebrow,
            .banner-lede h2,
            .banner-lede .hero-cta {
              grid-column: auto;
              grid-row: auto;
            }

            .banner-lede h2 {
              font-size: 1.52rem;
            }

            .banner-item {
              width: 154px;
              min-height: 146px;
              grid-template-rows: 88px auto;
            }

            h1 {
              font-size: clamp(2.25rem, 10.2vw, 2.62rem);
              line-height: 0.92;
            }

            .hero-proof,
            .signal-grid,
            .flow-grid,
            .proof-collectible-grid {
              grid-template-columns: 1fr;
            }

            .pack-stack {
              left: 0;
              transform: scale(0.78);
              transform-origin: top left;
            }

            .arena-terminal {
              left: 0;
              right: auto;
              width: 100%;
            }

            .agent-row {
              grid-template-columns: 38px minmax(0, 1fr);
            }

            .agent-signal {
              grid-column: 2;
              justify-items: start;
            }

            .execution-node {
              grid-template-columns: 38px minmax(0, 1fr);
            }

            .execution-node em {
              grid-column: 2;
              white-space: normal;
            }

            .execution-route,
            .prediction-row {
              grid-template-columns: 1fr;
              gap: 7px;
              align-items: start;
            }

            .execution-route em,
            .prediction-row em {
              grid-column: auto;
              min-width: 0;
              text-align: left;
            }

            .prediction-row strong {
              white-space: normal;
            }

            .section {
              padding: 62px 0;
            }

            .board-card {
              width: 136px;
              height: 190px;
            }

            footer {
              display: grid;
            }
          }
        </style>
      </head>
      <body>
        <main class="site">
          <header class="topbar">
            <div class="topbar-inner">
              <a class="brand" href="#top" aria-label="Pack Alpha Concierge">
                <span class="brand-mark" aria-hidden="true">A</span>
                <span class="brand-copy">
                  <span>Pack Alpha Concierge</span>
                  <small>Pokemon vault on Monad</small>
                </span>
              </a>
              <nav class="nav" aria-label="Primary navigation">
                <a href="#signals">Signals</a>
                <a href="#agents">Agents</a>
                <a href="#trade">Vault</a>
                <a href="#prediction">Redeem</a>
                <a class="nav-cta" href="/pack-alpha/app?walletFlow=header">Connect wallet</a>
              </nav>
            </div>
          </header>

          ${renderBannerCollectibles()}

          <section class="hero" id="top">
            <div class="hero-inner">
              <div class="hero-content">
                <p class="eyebrow">AI procurement + vault receipts + Monad settlement</p>
                <h1>Buy hot cards<br />globally, then<br />vault or<br />tokenize them.</h1>
                <p class="hero-copy">
                  Pack Alpha Concierge lets users ask an agent to scout Pokemon cards and packs across eBay,
                  Mercari, Sneaker Dunk, Cardrush, Dubizzle, and regional markets, then commit purchase orders,
                  vault receipts, tokenization, and redemption actions on Monad.
                </p>
                <div class="hero-actions">
                  <a class="hero-cta" href="/pack-alpha/app">Open concierge</a>
                  <a class="hero-secondary" href="#trade">See vault flow</a>
                </div>
                <div class="hero-proof" aria-label="Arena highlights">
                  <div>
                    <strong>3</strong>
                    <span>purchase targets, vault items, and tokenization actions</span>
                  </div>
                  <div>
                    <strong>5</strong>
                    <span>vault routes: US, Japan, Singapore, Dubai, and Holland</span>
                  </div>
                  <div>
                    <strong>0</strong>
                    <span>fake listing prices; fresh quote required before purchase</span>
                  </div>
                </div>
              </div>

              <div class="arena-visual" aria-label="Pack opening strategy dashboard preview">
                <div class="pack-stack" aria-hidden="true">
                  ${renderHeroCollectibles()}
                </div>
                <aside class="arena-terminal">
                  <div class="terminal-top">
                    <span>Concierge order board</span>
                    <span class="terminal-status">on Monad</span>
                  </div>
                  <div class="agent-list">
                    ${renderAgentRows()}
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section class="section" id="signals">
            <div class="section-head">
              <h2>Alpha starts before the card reaches the vault.</h2>
              <p>
                The agent uses source-backed benchmarks, region-specific marketplaces, and user max bids. It does
                not invent executable prices; it queues a purchase request only when fresh listings beat the threshold.
              </p>
            </div>
            <div class="signal-grid">
              ${renderMarketSignals()}
            </div>
          </section>

          <section class="section">
            <div class="section-head">
              <h2>The spread is not theoretical.</h2>
              <p>
                Pack Alpha is built around a real collector-trader pain point: sourcing where Japanese Pokemon cards
                are underpriced, then storing or selling where demand is stronger.
              </p>
            </div>
            <div class="founder-proof-grid">
              <article class="founder-proof-card">
                <div>
                  <span class="eyebrow">Founder Insight</span>
                  <h3>Japan-to-global box spreads can compound fast.</h3>
                </div>
                <p>
                  The founder bought Team Rocket boxes x10, White Flare boxes x50, and Black Bolt boxes x50 in Japan.
                  Within six months, secondary prices moved to roughly 3x purchase cost. A Brooklyn shop visit showed
                  comparable Japanese cards selling at 2-2.5x Japan pricing.
                </p>
                <div class="proof-chip-row">
                  <span class="proof-chip">3x box price move</span>
                  <span class="proof-chip">2-2.5x Brooklyn spread</span>
                  <span class="proof-chip">Fresh quote required</span>
                </div>
                <div class="proof-collectible-grid">
                  ${renderProofCollectibles()}
                </div>
              </article>
              <aside class="vault-network-card">
                <div>
                  <span class="eyebrow">Vault Network</span>
                  <h3>Buy globally, custody locally.</h3>
                </div>
                <p>
                  Pack Alpha routes purchases into owned-entity and partner-warehouse vaults, then lets the user
                  tokenize, list, hold, or redeem from the GUI.
                </p>
                <div class="vault-chip-row">
                  <span class="vault-chip">US</span>
                  <span class="vault-chip">Japan</span>
                  <span class="vault-chip">Singapore</span>
                  <span class="vault-chip">Dubai</span>
                  <span class="vault-chip">Holland</span>
                </div>
              </aside>
            </div>
          </section>

          <section class="section" id="trade">
            <div class="section-head">
              <h2>When an agent finds edge, the next click is a purchase request.</h2>
              <p>
                Concierge ranks procurement, vault tokenization, and redemption actions so users can move from
                desired card to onchain order receipt without pretending Monad already has deep Pokemon-card liquidity.
              </p>
            </div>
            <div class="execution-panel">
              <div class="execution-map" aria-label="Execution router workflow">
                <div class="execution-node">
                  <i>1</i>
                  <div>
                    <strong>Benchmark the card</strong>
                    <span>Use sold comps and source-backed values as the max-bid guardrail.</span>
                  </div>
                  <em>live quote</em>
                </div>
                <div class="execution-node">
                  <i>2</i>
                  <div>
                    <strong>Scout venues</strong>
                    <span>Open eBay, Mercari, Sneaker Dunk, Cardrush, Dubizzle, and regional venues for fresh quotes.</span>
                  </div>
                  <em>risk checked</em>
                </div>
                <div class="execution-node">
                  <i>3</i>
                  <div>
                    <strong>Vault or redeem</strong>
                    <span>Commit order, custody, NFT mint/listing, and physical redemption receipts on Monad.</span>
                  </div>
                  <em>auditable</em>
                </div>
              </div>
              <aside class="execution-table">
                <div class="prediction-title">
                  <h3>Concierge router</h3>
                  <p>Procure only below max bid; tokenize vault items when liquidity matters; redeem when users want delivery.</p>
                </div>
                ${renderExecutionRoutes()}
              </aside>
            </div>
          </section>

          <section class="band" id="agents">
            <div class="section">
              <div class="section-head">
              <h2>The agent works for the buyer, not for a fake onchain marketplace.</h2>
              <p>
                  The user is on Monad. The agent researches offchain markets, asks the concierge to purchase, and
                  uses Monad as the settlement, receipt, vault, and reputation layer.
                </p>
              </div>
              <div class="flow-grid">
                <article class="flow-card">
                  <span>01 / Read</span>
                  <h3>Card and pack signals</h3>
                  <p>Normalize identity, grade, language, source-backed value, max bid, and regional availability.</p>
                </article>
                <article class="flow-card">
                  <span>02 / Commit</span>
                  <h3>Order hash on Monad</h3>
                  <p>Lock the agent thesis, max bid, source packet, and user approval as an auditable order intent.</p>
                </article>
                <article class="flow-card">
                  <span>03 / Run</span>
                  <h3>Buy, vault, tokenize</h3>
                  <p>The operator purchases offchain, stores the card, and can mint an NFT receipt for secondary liquidity.</p>
                </article>
                <article class="flow-card">
                  <span>04 / Rank</span>
                  <h3>Redeem or list</h3>
                  <p>Users can keep the vault receipt, list it, or redeem the physical card to their home.</p>
                </article>
              </div>
            </div>
          </section>

          <section class="section" id="prediction">
            <div class="section-head">
              <h2>Monad becomes the receipt layer for real-world collecting actions.</h2>
              <p>
                The demo records source-backed valuations, order intents, custody receipts, tokenization decisions,
                and redemption requests. The offchain market stays offchain; the user flow settles on Monad.
              </p>
            </div>
            <div class="prediction-panel">
              <div class="arena-board" aria-label="Three strategy cards competing in the prediction arena">
                <div class="board-card"></div>
                <div class="board-card"></div>
                <div class="board-card"></div>
              </div>
              <aside class="prediction-table">
                <div class="prediction-title">
                  <h3>Vault action book</h3>
                  <p>Order receipts, tokenization receipts, redemption receipts, and agent reputation. No fake liquidity required.</p>
                </div>
                ${renderPredictionRows()}
              </aside>
            </div>
          </section>

          <section class="cta-band" id="demo">
            <div class="cta-inner">
              <div>
                <h2>Built for a seven-hour Blitz demo.</h2>
                <p>
                  Use source-backed card values, let the agent scout global markets, commit the purchase order on
                  Monad, then show the card in a vault with tokenize and redeem actions.
                </p>
              </div>
              <a class="hero-cta" href="/pack-alpha/app">Run concierge flow</a>
            </div>
          </section>

          <footer>
            <span>Pack Alpha Concierge</span>
            <span>AI purchasing agent and Pokemon vault on Monad</span>
          </footer>
        </main>
      </body>
    </html>`;
}
