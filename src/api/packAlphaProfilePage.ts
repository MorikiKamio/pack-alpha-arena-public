import { renderFaviconLinks } from './branding.js';

export function renderPackAlphaProfilePage() {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pack Alpha Profile Vault</title>
        <meta
          name="description"
          content="Pack Alpha profile screen for owned Pokemon cards, tokenization, and physical redemption."
        />
        ${renderFaviconLinks()}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style>
          :root {
            --bg: #0e091c;
            --panel: #171029;
            --panel-2: #21163d;
            --ink: #fbfaf9;
            --muted: #ddd7fe;
            --quiet: #9c92cd;
            --line: rgba(221, 215, 254, 0.16);
            --line-strong: rgba(221, 215, 254, 0.28);
            --cyan: #85e6ff;
            --pink: #ff8ee4;
            --violet: #6e54ff;
            --page: min(1380px, calc(100vw - 32px));
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            min-height: 100vh;
            background:
              radial-gradient(circle at 12% -8%, rgba(110, 84, 255, 0.36), transparent 32rem),
              radial-gradient(circle at 86% 0%, rgba(255, 142, 228, 0.16), transparent 26rem),
              radial-gradient(circle at 54% -10%, rgba(133, 230, 255, 0.12), transparent 24rem),
              linear-gradient(180deg, rgba(221, 215, 254, 0.08), rgba(14, 9, 28, 0) 360px),
              repeating-linear-gradient(90deg, rgba(221, 215, 254, 0.04) 0 1px, transparent 1px 92px),
              var(--bg);
            color: var(--ink);
            font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          button {
            font: inherit;
          }

          .shell {
            width: var(--page);
            margin: 0 auto;
            padding: 22px 0 44px;
          }

          .topbar {
            min-height: 64px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            border-bottom: 1px solid var(--line);
            background: rgba(14, 9, 28, 0.66);
            border-radius: 8px;
            padding: 0 12px;
            backdrop-filter: blur(16px);
          }

          .brand {
            display: flex;
            align-items: center;
            gap: 12px;
            font-family: "Archivo", sans-serif;
            font-weight: 900;
          }

          .brand-mark {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            display: grid;
            place-items: center;
            color: #0e091c;
            background:
              linear-gradient(135deg, #ddd7fe, #ffffff 38%, #6e54ff 39%, #6e54ff 68%, #85e6ff 69%);
          }

          .brand small {
            display: block;
            margin-top: 3px;
            color: var(--muted);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.68rem;
            text-transform: uppercase;
          }

          .top-actions,
          .action-row {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
          }

          .ghost-link,
          .refresh-button,
          .primary-button {
            min-height: 42px;
            border: 1px solid var(--line-strong);
            border-radius: 8px;
            padding: 0 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--ink);
            background: rgba(255, 255, 255, 0.055);
            font-family: "Archivo", sans-serif;
            font-weight: 900;
            text-transform: uppercase;
            cursor: pointer;
          }

          .primary-button {
            border-color: rgba(133, 230, 255, 0.42);
            background: linear-gradient(135deg, #6e54ff, #7a5cff 58%, #85e6ff);
            color: #ffffff;
          }

          .hero {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(320px, 0.48fr);
            gap: 14px;
            margin: 16px 0;
            align-items: stretch;
          }

          .hero-copy,
          .panel,
          .holding-card,
          .detail-panel,
          .ticket-card {
            border: 1px solid var(--line);
            border-radius: 8px;
            background: rgba(18, 11, 35, 0.78);
            box-shadow: 0 18px 60px rgba(0, 0, 0, 0.28);
          }

          .hero-copy {
            min-height: 220px;
            padding: 20px;
            display: grid;
            align-content: center;
            overflow: hidden;
            position: relative;
          }

          .hero-copy::after {
            display: none;
          }

          .kicker,
          .metric span,
          .holding-meta,
          .status,
          .step-list span,
          .region-card span,
          .region-card small {
            color: var(--muted);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.72rem;
            font-weight: 800;
            text-transform: uppercase;
          }

          h1,
          h2,
          h3,
          p {
            margin: 0;
          }

          h1 {
            max-width: 760px;
            font-family: "Archivo", sans-serif;
            font-size: clamp(2.35rem, 4.6vw, 4.8rem);
            line-height: 0.93;
            letter-spacing: 0;
            text-transform: uppercase;
          }

          h2,
          h3 {
            font-family: "Archivo", sans-serif;
            text-transform: uppercase;
            letter-spacing: 0;
          }

          .hero-copy p {
            max-width: 780px;
            margin-top: 10px;
            color: var(--muted);
            font-size: 0.98rem;
            line-height: 1.45;
          }

          .metric-panel {
            padding: 16px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .metric {
            min-height: 86px;
            border: 1px solid var(--line);
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.045);
            padding: 13px;
            display: grid;
            align-content: space-between;
          }

          .metric strong {
            font-family: "Archivo", sans-serif;
            font-size: 1.56rem;
            line-height: 1;
          }

          .layout {
            display: grid;
            grid-template-columns: minmax(330px, 0.72fr) minmax(0, 1.28fr);
            gap: 14px;
            align-items: start;
          }

          .panel {
            overflow: hidden;
          }

          .panel-head {
            min-height: 64px;
            padding: 14px 16px;
            border-bottom: 1px solid var(--line);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }

          .holding-list {
            display: grid;
          }

          .holding-card {
            width: 100%;
            border-width: 0 0 1px;
            border-radius: 0;
            padding: 14px 16px;
            color: inherit;
            display: grid;
            grid-template-columns: 82px minmax(0, 1fr);
            gap: 13px;
            text-align: left;
            cursor: pointer;
          }

          .holding-card.is-active {
            background: rgba(110, 84, 255, 0.22);
          }

          .holding-card img {
            width: 82px;
            height: 112px;
            object-fit: contain;
            border-radius: 6px;
            background: #0b0716;
          }

          .holding-copy {
            min-width: 0;
            display: grid;
            gap: 8px;
            align-content: center;
          }

          .holding-copy strong {
            font-family: "Archivo", sans-serif;
            font-size: 1.1rem;
          }

          .holding-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            color: var(--muted);
          }

          .detail-panel {
            padding: 16px;
            display: grid;
            gap: 16px;
          }

          .detail-hero {
            display: grid;
            grid-template-columns: minmax(170px, 230px) minmax(0, 1fr) minmax(180px, 220px);
            gap: 14px;
            align-items: stretch;
          }

          .detail-media {
            height: 260px;
            min-height: 260px;
            border: 1px solid var(--line);
            border-radius: 8px;
            background:
              radial-gradient(circle at 50% 18%, rgba(221, 215, 254, 0.2), transparent 8rem),
              #0e091c;
            display: grid;
            place-items: center;
            padding: 14px;
            overflow: hidden;
          }

          .detail-media img {
            width: 100%;
            height: 100%;
            max-height: 100%;
            object-fit: contain;
            filter: drop-shadow(0 18px 24px rgba(0, 0, 0, 0.42));
          }

          .detail-copy {
            min-width: 0;
            display: grid;
            align-content: start;
            gap: 12px;
          }

          .detail-copy h2 {
            font-size: clamp(2rem, 3.2vw, 3.55rem);
            line-height: 0.92;
          }

          .asset-meta {
            color: var(--muted);
            line-height: 1.45;
          }

          .action-box {
            border: 1px solid rgba(133, 230, 255, 0.3);
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.045);
            padding: 14px;
            display: grid;
            align-content: start;
            gap: 10px;
          }

          .action-box strong {
            font-family: "Archivo", sans-serif;
            font-size: 1.45rem;
          }

          .region-grid,
          .sell-grid,
          .ticket-grid {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 10px;
          }

          .region-card,
          .sell-card,
          .ticket-card {
            border: 1px solid var(--line);
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.045);
            padding: 12px;
            display: grid;
            gap: 8px;
          }

          .sell-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .sell-card {
            color: var(--ink);
            text-align: left;
            cursor: pointer;
          }

          .sell-card:hover {
            border-color: rgba(133, 230, 255, 0.45);
          }

          .sell-card strong {
            font-family: "Archivo", sans-serif;
            font-size: 1.02rem;
            text-transform: uppercase;
          }

          .sell-card em {
            color: var(--cyan);
            font-family: "Archivo", sans-serif;
            font-size: 1.36rem;
            font-style: normal;
          }

          .region-card strong {
            font-family: "Archivo", sans-serif;
            font-size: 1.34rem;
          }

          .region-card em {
            color: var(--cyan);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.7rem;
            font-style: normal;
            font-weight: 900;
            text-transform: uppercase;
          }

          .ticket-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ticket-card strong {
            font-family: "Archivo", sans-serif;
            text-transform: uppercase;
          }

          .ticket-card code {
            max-width: 100%;
            overflow-wrap: anywhere;
            color: var(--cyan);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.7rem;
          }

          .step-list {
            display: grid;
            gap: 8px;
          }

          .step-list span {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            border-top: 1px solid var(--line);
            padding-top: 8px;
          }

          @media (max-width: 1060px) {
            .hero,
            .layout,
            .detail-hero {
              grid-template-columns: 1fr;
            }

            .hero-copy {
              min-height: 190px;
            }

            .region-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .sell-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 720px) {
            .shell {
              width: min(100vw - 20px, 680px);
              padding-top: 10px;
            }

            .topbar,
            .panel-head {
              align-items: flex-start;
              flex-direction: column;
              padding: 12px;
              gap: 10px;
            }

            .top-actions {
              width: 100%;
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 8px;
            }

            .ghost-link,
            .refresh-button,
            .primary-button {
              width: 100%;
              min-height: 38px;
              padding: 0 10px;
              font-size: 0.9rem;
              text-align: center;
            }

            .brand {
              min-width: 0;
            }

            .brand small {
              font-size: 0.62rem;
              line-height: 1.25;
              overflow-wrap: anywhere;
            }

            .hero {
              gap: 10px;
              margin: 12px 0;
            }

            .hero-copy {
              min-height: 0;
              padding: 18px;
            }

            .hero-copy::after {
              display: none;
            }

            h1 {
              font-size: clamp(2rem, 10.5vw, 3.1rem);
              line-height: 0.98;
            }

            .hero-copy p {
              font-size: 0.92rem;
              line-height: 1.42;
            }

            .holding-card {
              grid-template-columns: 68px minmax(0, 1fr);
              gap: 10px;
              padding: 12px;
            }

            .holding-card img {
              width: 68px;
              height: 92px;
            }

            .holding-copy strong {
              font-size: 1rem;
            }

            .holding-bottom {
              align-items: flex-start;
              flex-direction: column;
              gap: 4px;
            }

            .detail-panel {
              padding: 12px;
              gap: 12px;
            }

            .detail-media {
              height: 220px;
              min-height: 220px;
            }

            .detail-copy h2 {
              font-size: clamp(1.9rem, 11vw, 3rem);
            }

            .action-box {
              padding: 12px;
            }

            .region-grid,
            .sell-grid,
            .ticket-grid {
              grid-template-columns: 1fr;
            }

            .metric-panel {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 8px;
              padding: 12px;
            }

            .metric {
              min-height: 76px;
              padding: 10px;
            }

            .metric strong {
              font-size: 1.25rem;
            }
          }
        </style>
      </head>
      <body>
        <main class="shell">
          <header class="topbar">
            <a class="brand" href="/pack-alpha/app" aria-label="Pack Alpha Concierge Vault">
              <span class="brand-mark" aria-hidden="true">A</span>
              <span>
                <span>Pack Alpha Profile</span>
                <small>Owned cards / vault receipts / redemption</small>
              </span>
            </a>
            <div class="top-actions">
              <a class="ghost-link" href="/pack-alpha/app">App</a>
              <a class="ghost-link" href="/pack-alpha">LP</a>
              <button class="refresh-button" type="button" id="wallet-button">Connect wallet</button>
              <button class="refresh-button" type="button" id="signin-button">Sign in</button>
            </div>
          </header>

          <section class="hero">
            <div class="hero-copy">
              <div>
                <span class="kicker">Profile vault</span>
                <h1>Your cards, ready to tokenise or redeem.</h1>
                <p>
                  Review already-owned Pokemon cards in vault custody, select an item, then create a Monad-ready
                  tokenisation or physical redemption request without leaving Pack Alpha.
                </p>
              </div>
            </div>
            <aside class="panel metric-panel" id="summary-panel">
              <div class="metric"><span>Holdings</span><strong>--</strong></div>
              <div class="metric"><span>Market value</span><strong>--</strong></div>
              <div class="metric"><span>Unrealized P/L</span><strong>--</strong></div>
              <div class="metric"><span>Actions ready</span><strong>--</strong></div>
            </aside>
          </section>

          <section class="layout">
            <aside class="panel">
              <div class="panel-head">
                <h2>Owned Cards</h2>
                <span class="kicker" id="wallet-status">Wallet not connected</span>
              </div>
              <div class="holding-list" id="holding-list"></div>
            </aside>

            <section class="detail-panel">
              <div id="detail-root"></div>
              <div>
                <div class="panel-head">
                  <h2>Vault Action Tickets</h2>
                  <span class="kicker">tokenise / redeem</span>
                </div>
                <div class="ticket-grid" id="ticket-list"></div>
              </div>
            </section>
          </section>
        </main>

        <script>
          const state = {
            profile: null,
            selectedHoldingId: null,
            wallet: {
              account: null,
              signedIn: false,
              signature: null,
              message: 'Wallet not connected'
            }
          };

          const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
          const shortAddress = (value) => value ? value.slice(0, 6) + '...' + value.slice(-4) : '';
          const demoWalletAddress = '0xeBf8c12A6Ebc94143baf2c8506CFCBD2BE7B5D33';

          async function fetchJson(url, options) {
            const response = await fetch(url, {
              headers: { 'content-type': 'application/json' },
              ...options
            });
            if (!response.ok) {
              const payload = await response.json().catch(() => ({}));
              throw new Error(payload.error || response.statusText);
            }
            return response.json();
          }

          function renderSummary() {
            const summary = state.profile?.summary;
            const target = document.getElementById('summary-panel');
            target.innerHTML = summary ? \`
              <div class="metric"><span>Holdings</span><strong>\${summary.holdingCount}</strong></div>
              <div class="metric"><span>Market value</span><strong>\${money.format(summary.totalMarketValueUsd)}</strong></div>
              <div class="metric"><span>Unrealized P/L</span><strong>\${money.format(summary.unrealizedPnlUsd)}</strong></div>
              <div class="metric"><span>Actions ready</span><strong>\${summary.tokenizeReadyCount + summary.redeemReadyCount}</strong></div>
            \` : '<div class="metric"><span>Loading</span><strong>--</strong></div>';
          }

          function renderWallet() {
            const status = document.getElementById('wallet-status');
            status.textContent = state.wallet.message || (state.wallet.account
              ? (state.wallet.signedIn ? 'Signed ' + shortAddress(state.wallet.account) : 'Connected ' + shortAddress(state.wallet.account))
              : 'Wallet not connected');
            document.getElementById('wallet-button').textContent = state.wallet.account ? shortAddress(state.wallet.account) : 'Connect wallet';
            document.getElementById('signin-button').textContent = state.wallet.signedIn ? 'Signed in' : 'Sign in';
          }

          function walletRequestWithTimeout(request, timeoutMs) {
            return Promise.race([
              request,
              new Promise((_, reject) => {
                window.setTimeout(() => reject(new Error('Wallet request timed out')), timeoutMs);
              })
            ]);
          }

          function useDemoWallet(reason) {
            state.wallet.account = demoWalletAddress;
            state.wallet.message = reason
              ? 'Demo wallet connected: ' + shortAddress(demoWalletAddress)
              : 'Connected ' + shortAddress(demoWalletAddress);
            renderWallet();
          }

          function renderHoldings() {
            const holdings = state.profile?.holdings || [];
            const target = document.getElementById('holding-list');
            target.innerHTML = holdings.map((holding) => \`
              <button class="holding-card \${holding.holdingId === state.selectedHoldingId ? 'is-active' : ''}" type="button" data-holding-id="\${holding.holdingId}">
                <img src="\${holding.imageUrl}" alt="\${holding.imageAlt}" loading="lazy" />
                <span class="holding-copy">
                  <span class="holding-meta">\${holding.grade} / \${holding.language} / \${holding.custodyLocation}</span>
                  <strong>\${holding.name}</strong>
                  <span class="asset-meta">\${holding.setName} / \${holding.vaultState.replace(/_/g, ' ')} / \${holding.nftStatus.replace(/_/g, ' ')}</span>
                  <span class="holding-bottom"><span>Basis \${money.format(holding.costBasisUsd)}</span><span>\${money.format(holding.marketValueUsd)}</span></span>
                </span>
              </button>
            \`).join('');
            document.querySelectorAll('[data-holding-id]').forEach((button) => {
              button.addEventListener('click', () => {
                state.selectedHoldingId = button.getAttribute('data-holding-id');
                renderAll();
              });
            });
          }

          function selectedHolding() {
            return (state.profile?.holdings || []).find((holding) => holding.holdingId === state.selectedHoldingId) || null;
          }

          function renderRegionBoard(holding) {
            return holding.regionalPriceBoard.map((row) => \`
              <article class="region-card">
                <span>\${row.region}</span>
                <strong>\${money.format(row.valueUsd)}</strong>
                <em>\${row.status}</em>
                <small>\${row.sourceLabel}. Confidence \${Number(row.confidenceScore).toFixed(2)}.</small>
              </article>
            \`).join('');
          }

          function renderSellOptions(holding) {
            return (holding.sellOptions || []).map((option) => \`
              <button class="sell-card" type="button" data-sell-venue="\${option.venue}">
                <span class="kicker">\${option.region} / \${option.venue.replace(/_/g, ' ')}</span>
                <strong>\${option.label}</strong>
                <em>\${money.format(option.estimatedNetUsd)} net</em>
                <span class="asset-meta">Ask \${money.format(option.grossAskUsd)} / fees \${money.format(option.estimatedFeesUsd)} / confidence \${Number(option.confidenceScore).toFixed(2)}</span>
              </button>
            \`).join('');
          }

          function renderDetail() {
            const holding = selectedHolding();
            const target = document.getElementById('detail-root');
            if (!holding) {
              target.innerHTML = '<p class="asset-meta">Select a vaulted card to start tokenisation or redemption.</p>';
              return;
            }
            target.innerHTML = \`
              <div class="detail-hero">
                <div class="detail-media">
                  <img src="\${holding.imageUrl}" alt="\${holding.imageAlt}" loading="lazy" />
                </div>
                <div class="detail-copy">
                  <span class="kicker">Vault item / \${holding.custodyLocation}</span>
                  <h2>\${holding.name}</h2>
                  <p class="asset-meta">\${holding.setName} / \${holding.grade} / acquired \${holding.acquiredAt}</p>
                  <p class="asset-meta">\${holding.valuationBasis}</p>
                  <p class="asset-meta">Receipt \${holding.receiptHash.slice(0, 12)}...\${holding.receiptHash.slice(-10)}</p>
                </div>
                <div class="action-box">
                  <span class="kicker">Vault actions</span>
                  <strong>\${money.format(holding.marketValueUsd)}</strong>
                  <span class="status">Connect wallet + sign in for ready demo status</span>
                  <button class="primary-button" type="button" data-vault-action="tokenize">Tokenise receipt</button>
                  <button class="refresh-button" type="button" data-vault-action="redeem">Redeem physical</button>
                </div>
              </div>
              <div>
                <div class="panel-head">
                  <h2>Sell Options</h2>
                  <span class="kicker">eBay / SNKRDUNK / Dubizzle / Mercari</span>
                </div>
                <div class="sell-grid">\${renderSellOptions(holding)}</div>
              </div>
              <div>
                <div class="panel-head">
                  <h2>Regional Price Board</h2>
                  <span class="kicker">source-backed + estimated</span>
                </div>
                <div class="region-grid">\${renderRegionBoard(holding)}</div>
              </div>
            \`;
            document.querySelectorAll('[data-vault-action]').forEach((button) => {
              button.addEventListener('click', async () => {
                await createVaultAction(button.getAttribute('data-vault-action'));
              });
            });
            document.querySelectorAll('[data-sell-venue]').forEach((button) => {
              button.addEventListener('click', async () => {
                await createSellAction(button.getAttribute('data-sell-venue'));
              });
            });
          }

          function renderTickets() {
            const tickets = state.profile?.actionTickets || [];
            const sellTickets = state.profile?.sellTickets || [];
            const target = document.getElementById('ticket-list');
            const vaultTicketHtml = tickets.map((ticket) => \`
              <article class="ticket-card">
                <span class="kicker">\${ticket.action} / \${ticket.status.replace(/_/g, ' ')}</span>
                <strong>\${ticket.holdingId.replace('holding-', '').replace(/-/g, ' ')}</strong>
                <span class="asset-meta">Fee estimate \${money.format(ticket.expectedFeeUsd)} / custody \${ticket.custodyLocation}</span>
                <code>\${ticket.receiptHash}</code>
                <div class="step-list">
                  \${ticket.steps.map((step) => \`<span><span>\${step.label}</span><em>\${step.status}</em></span>\`).join('')}
                </div>
              </article>
            \`).join('');
            const sellTicketHtml = sellTickets.map((ticket) => \`
              <article class="ticket-card">
                <span class="kicker">sell / \${ticket.status.replace(/_/g, ' ')}</span>
                <strong>\${ticket.label}</strong>
                <span class="asset-meta">Ask \${money.format(ticket.grossAskUsd)} / net \${money.format(ticket.estimatedNetUsd)} / custody \${ticket.custodyLocation}</span>
                <code>\${ticket.receiptHash}</code>
                <div class="step-list">
                  \${ticket.steps.map((step) => \`<span><span>\${step.label}</span><em>\${step.status}</em></span>\`).join('')}
                </div>
              </article>
            \`).join('');
            target.innerHTML = vaultTicketHtml || sellTicketHtml
              ? sellTicketHtml + vaultTicketHtml
              : '<p class="asset-meta">No vault action tickets yet.</p>';
          }

          function renderAll() {
            renderSummary();
            renderWallet();
            renderHoldings();
            renderDetail();
            renderTickets();
          }

          async function loadProfile() {
            state.profile = await fetchJson('/api/pack-alpha/profile');
            if (!state.selectedHoldingId) {
              state.selectedHoldingId = state.profile.holdings[0]?.holdingId || null;
            }
            renderAll();
          }

          async function connectWallet() {
            state.wallet.message = 'Connecting wallet...';
            renderWallet();
            if (window.ethereum?.request) {
              try {
                const accounts = await walletRequestWithTimeout(
                  window.ethereum.request({ method: 'eth_requestAccounts' }),
                  8000
                );
                state.wallet.account = accounts[0] || demoWalletAddress;
                state.wallet.message = 'Connected ' + shortAddress(state.wallet.account);
                renderWallet();
                return;
              } catch (_error) {
                useDemoWallet('Wallet unavailable, using demo wallet');
                return;
              }
            }
            useDemoWallet('No browser wallet, using demo wallet');
          }

          async function signIn() {
            if (!state.wallet.account) {
              await connectWallet();
            }
            state.wallet.message = 'Signing profile intent...';
            renderWallet();
            const message = 'Pack Alpha profile action approval ' + new Date().toISOString();
            if (window.ethereum?.request && state.wallet.account) {
              try {
                state.wallet.signature = await walletRequestWithTimeout(
                  window.ethereum.request({
                    method: 'personal_sign',
                    params: [message, state.wallet.account]
                  }),
                  8000
                );
              } catch (_error) {
                state.wallet.signature = 'demo-signature';
              }
            } else {
              state.wallet.signature = 'demo-signature';
            }
            state.wallet.signedIn = true;
            state.wallet.message = 'Signed ' + shortAddress(state.wallet.account);
            renderWallet();
          }

          async function createVaultAction(action) {
            const holding = selectedHolding();
            if (!holding) return;
            const ticket = await fetchJson('/api/pack-alpha/vault-actions', {
              method: 'POST',
              body: JSON.stringify({
                holdingId: holding.holdingId,
                action,
                walletAddress: state.wallet.account,
                signedIn: state.wallet.signedIn
              })
            });
            state.profile.actionTickets = [ticket, ...(state.profile.actionTickets || [])];
            renderTickets();
          }

          async function createSellAction(venue) {
            const holding = selectedHolding();
            if (!holding) return;
            const ticket = await fetchJson('/api/pack-alpha/sell-actions', {
              method: 'POST',
              body: JSON.stringify({
                holdingId: holding.holdingId,
                venue,
                walletAddress: state.wallet.account,
                signedIn: state.wallet.signedIn
              })
            });
            state.profile.sellTickets = [ticket, ...(state.profile.sellTickets || [])];
            renderTickets();
          }

          document.getElementById('wallet-button').addEventListener('click', connectWallet);
          document.getElementById('signin-button').addEventListener('click', signIn);

          loadProfile().catch((error) => {
            document.getElementById('detail-root').innerHTML = '<p class="asset-meta">' + error.message + '</p>';
          });
        </script>
      </body>
    </html>`;
}
