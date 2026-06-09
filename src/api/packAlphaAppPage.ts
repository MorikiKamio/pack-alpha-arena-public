import { renderFaviconLinks } from './branding.js';

export function renderPackAlphaAppPage() {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pack Alpha Concierge Vault</title>
        <meta
          name="description"
          content="A Monad-native Pokemon card procurement concierge, vault, tokenization, and redemption demo."
        />
        ${renderFaviconLinks()}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://esm.sh/@rainbow-me/rainbowkit@2.2.8/styles.css" />
        <style>
          :root {
            --bg: #0e091c;
            --panel: #171029;
            --panel-2: #21163d;
            --ink: #fbfaf9;
            --muted: #ddd7fe;
            --quiet: #9c92cd;
            --line: rgba(221, 215, 254, 0.14);
            --line-strong: rgba(221, 215, 254, 0.24);
            --yellow: #ddd7fe;
            --cyan: #85e6ff;
            --pink: #ff8ee4;
            --green: #6e54ff;
            --red: #ffae45;
            --page: min(1380px, calc(100vw - 32px));
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            min-height: 100vh;
            background:
              radial-gradient(circle at 12% -8%, rgba(110, 84, 255, 0.38), transparent 32rem),
              radial-gradient(circle at 84% 0%, rgba(255, 142, 228, 0.18), transparent 26rem),
              radial-gradient(circle at 52% -10%, rgba(133, 230, 255, 0.14), transparent 24rem),
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

          .top-actions {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .ghost-link,
          .primary-button,
          .refresh-button {
            min-height: 42px;
            border-radius: 8px;
            border: 1px solid var(--line-strong);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 0 14px;
            font-weight: 900;
            cursor: pointer;
          }

          .primary-button {
            background: var(--green);
            color: #ffffff;
            border-color: rgba(221, 215, 254, 0.24);
            box-shadow: 0 14px 36px rgba(110, 84, 255, 0.24);
          }

          .ghost-link,
          .refresh-button {
            background: rgba(221, 215, 254, 0.08);
            color: var(--ink);
          }

          .hero-row {
            display: grid;
            grid-template-columns: minmax(0, 0.9fr) minmax(320px, 0.58fr);
            gap: 18px;
            align-items: stretch;
            padding: 30px 0 18px;
          }

          h1,
          h2,
          h3,
          p {
            margin: 0;
          }

          .hero-copy {
            min-height: 242px;
            border-radius: 8px;
            border: 1px solid var(--line);
            background:
              linear-gradient(135deg, rgba(110, 84, 255, 0.24), rgba(133, 230, 255, 0.08) 46%, rgba(255, 142, 228, 0.14)),
              var(--panel);
            padding: 22px;
            display: grid;
            align-content: space-between;
          }

          .eyebrow {
            width: fit-content;
            padding: 7px 9px;
            border-radius: 8px;
            border: 1px solid rgba(221, 215, 254, 0.36);
            color: var(--yellow);
            background: rgba(110, 84, 255, 0.16);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.7rem;
            font-weight: 800;
            text-transform: uppercase;
          }

          h1 {
            margin-top: 18px;
            max-width: 850px;
            font-family: "Archivo", sans-serif;
            font-size: clamp(2.8rem, 5vw, 5.1rem);
            line-height: 0.9;
            letter-spacing: 0;
            text-transform: uppercase;
          }

          .hero-copy p {
            margin-top: 18px;
            color: #ddd7fe;
            font-size: 1.02rem;
            line-height: 1.5;
            max-width: 820px;
          }

          .summary-panel {
            border-radius: 8px;
            border: 1px solid var(--line);
            background: var(--panel);
            padding: 18px;
            display: grid;
            gap: 12px;
          }

          .summary-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .metric {
            min-height: 94px;
            border-radius: 8px;
            border: 1px solid var(--line);
            background: rgba(221, 215, 254, 0.06);
            padding: 14px;
            display: grid;
            align-content: space-between;
          }

          .metric span,
          .panel-kicker,
          .route-row span,
          .asset-meta,
          .reason-pill {
            color: var(--muted);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.72rem;
            font-weight: 800;
            text-transform: uppercase;
          }

          .asset-tag {
            width: fit-content;
            min-height: 24px;
            padding: 0 8px;
            border-radius: 8px;
            border: 1px solid rgba(221, 215, 254, 0.28);
            background: rgba(110, 84, 255, 0.14);
            color: var(--yellow);
            display: inline-flex;
            align-items: center;
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.68rem;
            font-weight: 900;
            text-transform: uppercase;
          }

          .metric strong {
            font-family: "Archivo", sans-serif;
            font-size: 1.7rem;
          }

          .pickup-panel {
            margin: 0 0 18px;
            border-radius: 8px;
            border: 1px solid var(--line);
            background:
              radial-gradient(circle at 10% 0%, rgba(255, 142, 228, 0.16), transparent 18rem),
              linear-gradient(135deg, rgba(110, 84, 255, 0.24), rgba(133, 230, 255, 0.08) 48%, rgba(255, 142, 228, 0.1)),
              var(--panel);
            overflow: hidden;
          }

          .pickup-head {
            min-height: 58px;
            padding: 14px 16px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            border-bottom: 1px solid var(--line);
          }

          .pickup-head h2 {
            font-family: "Archivo", sans-serif;
            font-size: 1.16rem;
            text-transform: uppercase;
          }

          .pickup-rail {
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: clamp(176px, 18vw, 220px);
            gap: 12px;
            overflow-x: auto;
            padding: 14px 16px 16px;
            scroll-snap-type: x mandatory;
          }

          .pickup-card {
            height: 306px;
            min-width: 0;
            border: 1px solid var(--line);
            border-radius: 8px;
            background: rgba(14, 9, 28, 0.62);
            color: var(--ink);
            display: grid;
            grid-template-rows: 162px minmax(0, 1fr);
            overflow: hidden;
            cursor: pointer;
            text-align: left;
            scroll-snap-align: start;
          }

          .pickup-card:hover {
            border-color: rgba(133, 230, 255, 0.5);
            transform: translateY(-1px);
          }

          .pickup-media,
          .asset-thumb,
          .decision-media {
            background:
              radial-gradient(circle at 50% 18%, rgba(221, 215, 254, 0.2), transparent 8rem),
              #0e091c;
          }

          .pickup-media {
            display: grid;
            place-items: center;
            min-width: 0;
            min-height: 0;
            padding: 12px;
            overflow: hidden;
          }

          .pickup-media img {
            display: block;
            width: 100%;
            height: 100%;
            min-width: 0;
            min-height: 0;
            object-fit: contain;
            filter: drop-shadow(0 18px 24px rgba(0, 0, 0, 0.42));
          }

          .pickup-copy {
            min-height: 0;
            padding: 12px;
            display: grid;
            gap: 8px;
            align-content: start;
            overflow: hidden;
          }

          .pickup-copy strong {
            font-size: 0.94rem;
            line-height: 1.08;
          }

          .pickup-copy small {
            color: var(--muted);
            line-height: 1.35;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }

          .pickup-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
          }

          .pickup-meta span {
            min-height: 24px;
            border-radius: 8px;
            border: 1px solid var(--line);
            background: rgba(221, 215, 254, 0.07);
            display: inline-flex;
            align-items: center;
            padding: 0 7px;
            color: var(--yellow);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.66rem;
            font-weight: 800;
            text-transform: uppercase;
          }

          .detail-modal {
            position: fixed;
            inset: 0;
            z-index: 50;
            display: grid;
            place-items: center;
            padding: 22px;
            background: rgba(4, 2, 11, 0.72);
            backdrop-filter: blur(18px);
          }

          .detail-modal[hidden] {
            display: none;
          }

          .detail-shell {
            width: min(1120px, 100%);
            max-height: min(860px, calc(100vh - 44px));
            border-radius: 8px;
            border: 1px solid rgba(221, 215, 254, 0.28);
            background:
              radial-gradient(circle at 86% 0%, rgba(255, 142, 228, 0.16), transparent 26rem),
              linear-gradient(135deg, rgba(110, 84, 255, 0.2), rgba(133, 230, 255, 0.06) 48%, rgba(255, 142, 228, 0.1)),
              var(--panel);
            box-shadow: 0 32px 90px rgba(0, 0, 0, 0.54);
            overflow: auto;
          }

          .detail-head {
            min-height: 64px;
            padding: 14px 18px;
            border-bottom: 1px solid var(--line);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }

          .detail-close {
            width: 42px;
            height: 42px;
            border-radius: 8px;
            border: 1px solid var(--line-strong);
            background: rgba(255, 255, 255, 0.06);
            color: var(--ink);
            font-size: 1.2rem;
            font-weight: 900;
            cursor: pointer;
          }

          .detail-body {
            padding: 18px;
            display: grid;
            gap: 16px;
          }

          .detail-hero {
            display: grid;
            grid-template-columns: minmax(180px, 260px) minmax(0, 1fr) minmax(150px, 220px);
            gap: 16px;
            align-items: stretch;
          }

          .detail-media {
            min-height: 260px;
            border-radius: 8px;
            border: 1px solid var(--line);
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
            font-family: "Archivo", sans-serif;
            font-size: clamp(2.1rem, 4vw, 4rem);
            line-height: 0.92;
            text-transform: uppercase;
          }

          .detail-action {
            border-radius: 8px;
            border: 1px solid rgba(133, 230, 255, 0.32);
            background: rgba(14, 9, 28, 0.58);
            padding: 14px;
            display: grid;
            gap: 10px;
            align-content: start;
          }

          .detail-action strong {
            font-family: "Archivo", sans-serif;
            font-size: 1.3rem;
            text-transform: uppercase;
          }

          .region-price-grid {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 10px;
          }

          .region-price-card {
            min-height: 132px;
            border-radius: 8px;
            border: 1px solid var(--line);
            background: rgba(255, 255, 255, 0.045);
            padding: 12px;
            display: grid;
            align-content: space-between;
            gap: 8px;
          }

          .region-price-card span,
          .region-price-card small,
          .detail-status {
            color: var(--muted);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.68rem;
            font-weight: 800;
            text-transform: uppercase;
          }

          .region-price-card strong {
            font-family: "Archivo", sans-serif;
            font-size: 1.72rem;
            line-height: 0.95;
          }

          .region-price-card em {
            color: var(--cyan);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.72rem;
            font-style: normal;
            font-weight: 900;
          }

          .insight-grid {
            display: grid;
            grid-template-columns: minmax(0, 1.05fr) minmax(300px, 0.7fr) minmax(320px, 0.8fr);
            gap: 14px;
            margin: 0 0 18px;
          }

          .insight-card {
            min-height: 168px;
            border-radius: 8px;
            border: 1px solid var(--line);
            background: var(--panel);
            padding: 16px;
            display: grid;
            gap: 12px;
            align-content: start;
          }

          .insight-card h2,
          .insight-card h3 {
            font-family: "Archivo", sans-serif;
            font-size: 1.16rem;
            text-transform: uppercase;
          }

          .insight-card p {
            color: #ddd7fe;
            line-height: 1.45;
            font-size: 0.94rem;
          }

          .proof-row,
          .vault-chip-row,
          .agent-model-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }

          .proof-pill,
          .vault-chip,
          .agent-step {
            min-height: 34px;
            border-radius: 8px;
            border: 1px solid var(--line);
            background: rgba(221, 215, 254, 0.07);
            color: var(--ink);
            display: inline-flex;
            align-items: center;
            padding: 0 10px;
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.72rem;
            font-weight: 800;
            text-transform: uppercase;
          }

          .proof-pill strong,
          .agent-step strong {
            margin-right: 6px;
            color: var(--cyan);
          }

          .workspace {
            display: grid;
            grid-template-columns: minmax(260px, 0.32fr) minmax(0, 0.68fr) minmax(330px, 0.42fr);
            gap: 14px;
            align-items: start;
          }

          .panel {
            border-radius: 8px;
            border: 1px solid var(--line);
            background: var(--panel);
            overflow: hidden;
          }

          .panel-head {
            min-height: 64px;
            padding: 15px 16px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            border-bottom: 1px solid var(--line);
          }

          .panel-head h2,
          .panel-head h3 {
            font-family: "Archivo", sans-serif;
            font-size: 1.18rem;
            text-transform: uppercase;
          }

          .asset-list {
            display: grid;
          }

          .asset-button {
            width: 100%;
            min-height: 112px;
            padding: 14px 16px;
            border: 0;
            border-bottom: 1px solid var(--line);
            background: transparent;
            color: var(--ink);
            text-align: left;
            display: grid;
            grid-template-columns: 54px minmax(0, 1fr);
            gap: 10px;
            cursor: pointer;
          }

          .asset-button:hover,
          .asset-button.is-active {
            background: rgba(110, 84, 255, 0.16);
          }

          .asset-button strong {
            font-size: 0.98rem;
          }

          .asset-thumb {
            width: 54px;
            height: 76px;
            border-radius: 8px;
            border: 1px solid var(--line);
            display: grid;
            place-items: center;
            overflow: hidden;
          }

          .asset-thumb img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          .asset-copy {
            min-width: 0;
            display: grid;
            gap: 7px;
          }

          .asset-bottom {
            display: flex;
            justify-content: space-between;
            gap: 8px;
            color: var(--muted);
            font-size: 0.82rem;
          }

          .decision-body {
            padding: 18px;
            display: grid;
            gap: 16px;
          }

          .decision-hero {
            display: grid;
            grid-template-columns: minmax(120px, 148px) minmax(0, 1fr) minmax(132px, 162px);
            gap: 14px;
            align-items: start;
          }

          .decision-hero > div {
            min-width: 0;
          }

          .decision-media {
            min-height: 206px;
            border-radius: 8px;
            border: 1px solid var(--line);
            display: grid;
            place-items: center;
            overflow: hidden;
            padding: 10px;
          }

          .decision-media img {
            width: 100%;
            max-height: 188px;
            object-fit: contain;
            filter: drop-shadow(0 18px 24px rgba(0, 0, 0, 0.42));
          }

          .action-badge {
            width: fit-content;
            padding: 8px 10px;
            border-radius: 8px;
            background: var(--yellow);
            color: #0e091c;
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.78rem;
            font-weight: 900;
            text-transform: uppercase;
          }

          .decision-title {
            margin-top: 12px;
            font-family: "Archivo", sans-serif;
            font-size: clamp(1.7rem, 2.8vw, 2.8rem);
            line-height: 0.92;
            text-transform: uppercase;
            overflow-wrap: anywhere;
          }

          .edge-box {
            width: min(162px, 100%);
            min-height: 132px;
            border-radius: 8px;
            border: 1px solid rgba(133, 230, 255, 0.32);
            background: rgba(110, 84, 255, 0.16);
            padding: 14px;
            display: grid;
            align-content: space-between;
            justify-items: end;
          }

          .edge-box span {
            color: var(--muted);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.7rem;
            font-weight: 800;
            text-transform: uppercase;
          }

          .edge-box strong {
            color: var(--cyan);
            font-family: "Archivo", sans-serif;
            font-size: 2.2rem;
          }

          .decision-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 10px;
          }

          .route-list,
          .source-list,
          .reason-list,
          .intent-list {
            display: grid;
          }

          .route-box {
            border-radius: 8px;
            border: 1px solid var(--line);
            background: rgba(255, 255, 255, 0.025);
            overflow: hidden;
          }

          .source-list {
            gap: 8px;
            padding: 14px 16px 16px;
          }

          .purchase-ticket,
          .source-row {
            min-height: 54px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: rgba(255, 255, 255, 0.035);
            padding: 10px 12px;
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 6px 12px;
            align-items: center;
          }

          .source-row button {
            border: 0;
            background: transparent;
            color: var(--cyan);
            font-weight: 900;
            text-align: left;
            padding: 0;
            cursor: pointer;
          }

          .purchase-ticket strong,
          .source-row strong {
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.9rem;
          }

          .purchase-ticket small,
          .source-row small {
            grid-column: 1 / -1;
            color: var(--quiet);
          }

          .purchase-ticket {
            margin: 0 16px 16px;
          }

          .purchase-ticket em {
            color: var(--yellow);
            font-family: "IBM Plex Mono", monospace;
            font-style: normal;
            font-weight: 900;
          }

          .route-row {
            min-height: 86px;
            padding: 14px 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            display: grid;
            grid-template-columns: minmax(0, 0.9fr) auto;
            gap: 8px 12px;
            align-items: center;
          }

          .route-row strong {
            font-size: 0.98rem;
          }

          .route-row em {
            color: var(--cyan);
            font-family: "IBM Plex Mono", monospace;
            font-style: normal;
            font-weight: 900;
          }

          .route-row small {
            grid-column: 1 / -1;
            color: var(--quiet);
            line-height: 1.4;
          }

          .reason-list {
            gap: 8px;
            padding: 16px;
          }

          .agent-run-banner {
            border-radius: 8px;
            border: 1px solid rgba(133, 230, 255, 0.28);
            background: rgba(110, 84, 255, 0.12);
            color: #ddd7fe;
            padding: 12px;
            display: grid;
            gap: 6px;
            font-size: 0.88rem;
            line-height: 1.35;
          }

          .agent-run-banner strong {
            color: var(--cyan);
            font-family: "Archivo", sans-serif;
            font-size: 1rem;
            text-transform: uppercase;
          }

          .reason-pill {
            min-height: 32px;
            border-radius: 8px;
            border: 1px solid var(--line);
            background: rgba(255, 255, 255, 0.045);
            display: flex;
            align-items: center;
            padding: 0 10px;
            color: #ddd7fe;
          }

          .intent-list {
            max-height: 312px;
            overflow: auto;
          }

          .wallet-box {
            padding: 16px;
            display: grid;
            gap: 10px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .wallet-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }

          .wallet-actions .primary-button,
          .wallet-actions .refresh-button {
            width: 100%;
            min-height: 40px;
            padding: 0 10px;
            font-size: 0.86rem;
          }

          .wallet-status {
            min-height: 40px;
            border-radius: 8px;
            border: 1px solid var(--line);
            background: rgba(255, 255, 255, 0.04);
            color: #ddd7fe;
            display: grid;
            align-content: center;
            gap: 4px;
            padding: 10px;
            font-size: 0.82rem;
            line-height: 1.35;
          }

          .rainbowkit-mount {
            min-height: 42px;
          }

          .signin-button {
            width: 100%;
          }

          .wallet-status code,
          .tx-link {
            color: var(--yellow);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.74rem;
            word-break: break-all;
          }

          .intent-item {
            padding: 14px 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            display: grid;
            gap: 6px;
          }

          .intent-item code {
            color: var(--yellow);
            font-family: "IBM Plex Mono", monospace;
            font-size: 0.76rem;
            word-break: break-all;
          }

          .empty {
            padding: 16px;
            color: var(--muted);
            line-height: 1.5;
          }

          @media (max-width: 1180px) {
            .hero-row,
            .insight-grid,
            .workspace {
              grid-template-columns: 1fr;
            }

            .decision-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 640px) {
            .topbar,
            .top-actions,
            .decision-hero {
              align-items: stretch;
              flex-direction: column;
              grid-template-columns: 1fr;
            }

            .pickup-rail {
              grid-auto-columns: minmax(168px, 72vw);
            }

            .top-actions {
              display: grid;
              grid-template-columns: 1fr;
            }

            h1 {
              font-size: clamp(2.18rem, 10vw, 2.8rem);
            }

            .summary-grid,
            .decision-grid {
              grid-template-columns: 1fr;
            }

            .detail-modal {
              padding: 10px;
            }

            .detail-hero,
            .region-price-grid {
              grid-template-columns: 1fr;
            }

            .detail-media {
              min-height: 220px;
            }

            .edge-box {
              width: 100%;
              justify-items: start;
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
                <span>Pack Alpha Concierge</span>
                <small>US / Japan / Singapore / Dubai / Holland</small>
              </span>
            </a>
            <div class="top-actions">
              <a class="ghost-link" href="/pack-alpha/profile">Profile</a>
              <a class="ghost-link" href="/pack-alpha">LP</a>
              <button class="refresh-button" type="button" id="header-wallet-button">Connect wallet</button>
              <button class="refresh-button" type="button" id="refresh-button">Refresh</button>
              <button class="primary-button" type="button" id="run-button">Run agent mode</button>
            </div>
          </header>

          <section class="hero-row">
            <div class="hero-copy">
              <div>
                <p class="eyebrow">Pokemon card concierge on Monad</p>
                <h1>Ask an agent to buy cards, then vault, tokenize, or redeem.</h1>
                <p>
                  Users request specific Pokemon cards or packs, the agent scouts eBay, Mercari, Sneaker Dunk,
                  Cardrush, Dubizzle, and regional venues, then commits a purchase order and vault receipt on Monad
                  across US, Japan, Singapore, Dubai, and Holland vault routes.
                </p>
              </div>
            </div>
            <aside class="summary-panel" aria-live="polite">
              <div class="panel-head">
                <h2>Order Desk</h2>
                <span class="panel-kicker" id="round-id">loading</span>
              </div>
              <div class="summary-grid">
                <div class="metric">
                  <span>Actionable</span>
                  <strong id="metric-executable">-</strong>
                </div>
                <div class="metric">
                  <span>Confidence</span>
                  <strong id="metric-confidence">-</strong>
                </div>
                <div class="metric">
                  <span>Best target edge</span>
                  <strong id="metric-edge">-</strong>
                </div>
                <div class="metric">
                  <span>Mode</span>
                  <strong>Vault</strong>
                </div>
              </div>
            </aside>
          </section>

          <section class="pickup-panel" aria-label="Picked up Pokemon cards and sealed boxes">
            <div class="pickup-head">
              <div>
                <span class="panel-kicker">Picked Up</span>
                <h2>Cards, packs, and boxes on the agent radar.</h2>
              </div>
              <span class="panel-kicker">real images / quote required</span>
            </div>
            <div class="pickup-rail" id="pickup-rail">
              <p class="empty">Loading picked up cards...</p>
            </div>
          </section>

          <section class="insight-grid" aria-label="Product thesis and agent model">
            <article class="insight-card">
              <span class="panel-kicker">Founder Insight</span>
              <h2>Cross-border spread is already real.</h2>
              <p>
                The operating thesis comes from real trading: Team Rocket boxes x10, White Flare boxes x50,
                and Black Bolt boxes x50 bought in Japan saw secondary prices reach 3x purchase cost within
                six months, while a Brooklyn shop showed comparable Japanese cards at 2-2.5x Japan pricing.
              </p>
              <div class="proof-row">
                <span class="proof-pill"><strong>3x</strong> six-month box move</span>
                <span class="proof-pill"><strong>2-2.5x</strong> Brooklyn retail spread</span>
              </div>
            </article>
            <article class="insight-card">
              <span class="panel-kicker">Vault Network</span>
              <h3>Buy where cards are cheap, store where users need liquidity.</h3>
              <p>Own entity and partner warehouses route custody, tokenization, listing, and redemption.</p>
              <div class="vault-chip-row">
                <span class="vault-chip">US</span>
                <span class="vault-chip">Japan</span>
                <span class="vault-chip">Singapore</span>
                <span class="vault-chip">Dubai</span>
                <span class="vault-chip">Holland</span>
              </div>
            </article>
            <article class="insight-card">
              <span class="panel-kicker">AI Agent Model</span>
              <h3>Research agent plus procurement router.</h3>
              <p>
                The agent does not trade on fake asks. It requests fresh executable quotes, verifies sources,
                prices all-in logistics, and only routes to the concierge when Net Edge Router clears risk rules.
              </p>
              <div class="agent-model-grid">
                <span class="agent-step"><strong>1</strong> Market Scout</span>
                <span class="agent-step"><strong>2</strong> Valuation Verify</span>
                <span class="agent-step"><strong>3</strong> Net Edge Router</span>
                <span class="agent-step"><strong>4</strong> Vault Router</span>
              </div>
            </article>
          </section>

          <section class="workspace">
            <aside class="panel">
              <div class="panel-head">
                <h2>Targets + Vault</h2>
                <span class="panel-kicker" id="asset-count">0</span>
              </div>
              <div class="asset-list" id="asset-list"></div>
            </aside>

            <section class="panel">
              <div class="panel-head">
                <h2>Agent Request</h2>
                <button class="primary-button" type="button" id="intent-button">Request action</button>
              </div>
              <div class="decision-body" id="decision-body">
                <p class="empty">Loading concierge action...</p>
              </div>
            </section>

            <aside class="panel">
              <div class="panel-head">
                <h2>Monad Ledger</h2>
                <span class="panel-kicker">Monad testnet</span>
              </div>
              <div class="wallet-box">
                <div class="wallet-status" id="wallet-status">Wallet not connected.</div>
                <div class="rainbowkit-mount" id="rainbowkit-root">
                  <button class="refresh-button" type="button" id="rainbowkit-fallback-button">RainbowKit wallet</button>
                </div>
                <div class="wallet-actions">
                  <button class="refresh-button" type="button" id="wallet-button">Connect wallet</button>
                  <button class="refresh-button" type="button" id="signin-button">Sign in</button>
                </div>
                <button class="refresh-button signin-button" type="button" id="deploy-button">Deploy contract</button>
                <button class="primary-button" type="button" id="onchain-button">Commit order</button>
                <button class="primary-button" type="button" id="flow-button">Run vault flow</button>
              </div>
              <div class="panel-head">
                <h2>Orders</h2>
                <span class="panel-kicker">local + tx</span>
              </div>
              <div class="intent-list" id="intent-list">
                <p class="empty">No intents yet.</p>
              </div>
              <div class="panel-head">
                <h3>Agent Checks</h3>
              </div>
              <div class="reason-list" id="reason-list"></div>
            </aside>
          </section>
        </main>

        <section class="detail-modal" id="item-detail-modal" hidden aria-modal="true" role="dialog" aria-label="Card and box detail">
          <div class="detail-shell">
            <div class="detail-head">
              <div>
                <span class="panel-kicker">Regional detail</span>
                <h2 id="detail-modal-title">Item detail</h2>
              </div>
              <button class="detail-close" type="button" id="detail-close-button" aria-label="Close detail">&times;</button>
            </div>
            <div class="detail-body" id="detail-body"></div>
          </div>
        </section>

        <script>
          const state = {
            assets: [],
            pickedUp: [],
            selectedAssetId: null,
            selectedPickedUpId: null,
            decision: null,
            round: null,
            onchain: null,
            wallet: {
              account: null,
              signedIn: false,
              signature: null,
              contractAddress: null,
              demoUsdcAddress: null,
              latestTxHash: null,
              flowProgress: []
            },
            purchaseOrders: []
          };

          const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
          const pct = (value) => (Number(value) >= 0 ? '+' : '') + Number(value).toFixed(1) + '%';
          const demoWalletAddress = '0xeBf8c12A6Ebc94143baf2c8506CFCBD2BE7B5D33';

          window.packAlphaWalletConnected = (address) => {
            state.wallet.account = address;
            renderWallet('RainbowKit wallet connected. Sign in to authorize paUSDC purchases.');
          };

          function actionLabel(action) {
            return String(action || '').replace(/_/g, ' ');
          }

          const detailRegions = ['Japan', 'Singapore', 'HK', 'US', 'Dubai'];
          const regionVenues = {
            Japan: 'Mercari / Sneaker Dunk / Cardrush',
            Singapore: 'Carousell / local dealer quote',
            HK: 'HK collector desks / cross-border quote',
            US: 'eBay / TCGPlayer / local shops',
            Dubai: 'Dubizzle / UAE dealer quote'
          };

          function regionalPriceRows(asset, pickedUp) {
            const board = asset?.regionalPriceBoard || pickedUp?.regionalPriceBoard || null;
            if (board && board.length) {
              return detailRegions.map((region) => {
                const regional = board.find((item) => item.region === region);
                if (!regional) {
                  return {
                    region,
                    venue: regionVenues[region],
                    value: 'Quote required',
                    status: 'agent quote needed',
                    note: 'No regional benchmark yet. Agent must request an executable quote.'
                  };
                }
                return {
                  region,
                  venue: regional.sourceLabel,
                  value: money.format(regional.valueUsd),
                  status: regional.status,
                  note: regional.basis + ' Confidence ' + Number(regional.confidenceScore).toFixed(2) + '.'
                };
              });
            }
            const sourcePrice = asset?.valuationSources?.[0]?.priceUsd || asset?.fairValueUsd || null;
            const maxBid = asset?.targetMaxBidUsd || null;
            const originRegion = pickedUp?.region || asset?.custodyLocation || asset?.targetMarkets?.[0] || 'US';
            return detailRegions.map((region) => {
              const hasSourceBenchmark = region === 'US' && sourcePrice;
              const hasMaxAuthorization = region === originRegion && maxBid;
              return {
                region,
                venue: regionVenues[region],
                value: hasSourceBenchmark
                  ? money.format(sourcePrice)
                  : hasMaxAuthorization
                    ? money.format(maxBid)
                    : 'Quote required',
                status: hasSourceBenchmark
                  ? 'source-backed benchmark'
                  : hasMaxAuthorization
                    ? 'max authorization'
                    : 'agent quote needed',
                note: region === originRegion ? 'Priority route for this item.' : 'Fresh executable quote before paUSDC capture.'
              };
            });
          }

          function renderRegionPriceCards(asset, pickedUp) {
            return regionalPriceRows(asset, pickedUp).map((row) => \`
              <article class="region-price-card">
                <span>\${row.region}</span>
                <strong>\${row.value}</strong>
                <em>\${row.status}</em>
                <small>\${row.venue}. \${row.note}</small>
              </article>
            \`).join('');
          }

          function benchmarkValue(asset, pickedUp) {
            if (asset?.fairValueUsd) return money.format(asset.fairValueUsd);
            const board = pickedUp?.regionalPriceBoard || [];
            const preferred = board.find((item) => item.status === 'source-backed benchmark') || board[0];
            return preferred ? money.format(preferred.valueUsd) : 'Quote';
          }

          function closeItemDetail() {
            document.getElementById('item-detail-modal').hidden = true;
          }

          async function openItemDetail(input) {
            const previousScrollY = window.scrollY;
            const pickedUp = input.pickedUpId
              ? state.pickedUp.find((item) => item.id === input.pickedUpId)
              : null;
            const assetId = input.assetId || pickedUp?.linkedAssetId || null;
            const asset = assetId ? state.assets.find((item) => item.id === assetId) : null;
            if (assetId) {
              state.selectedAssetId = assetId;
              state.selectedPickedUpId = pickedUp?.id || null;
              state.decision = await fetchJson('/api/pack-alpha/assets/' + encodeURIComponent(assetId) + '/decision');
              renderAssets();
              renderDecision();
              renderReasons();
            }
            const item = asset || pickedUp;
            if (!item) return;

            const detailKind = pickedUp?.kind || (asset?.mode === 'pack_pull' ? 'pack' : 'card');
            const detailStatus = pickedUp?.status || asset?.vaultState || asset?.mode || 'quote_required';
            const detailRegion = pickedUp?.region || asset?.custodyLocation || asset?.targetMarkets?.[0] || 'US';
            const decision = assetId === state.selectedAssetId ? state.decision : null;
            const purchaseAssetId = asset?.id || '';
            const purchasePickedId = pickedUp?.id || '';
            const sources = (asset?.valuationSources || pickedUp?.valuationSources || []).slice(0, 4).map((source) => \`
              <article class="source-row">
                <a href="\${source.url}" target="_blank" rel="noreferrer">\${source.label}</a>
                <strong>\${money.format(source.priceUsd)}</strong>
                <small>\${source.basis}. Observed \${source.observedAt}.</small>
              </article>
            \`).join('') || '<p class="empty">No source-backed benchmark yet. Agent must request executable quotes before purchase.</p>';

            document.getElementById('detail-modal-title').textContent = item.name;
            document.getElementById('detail-body').innerHTML = \`
              <div class="detail-hero">
                <a class="detail-media" href="\${item.imageSourceUrl || item.sourceUrl || '#'}" target="_blank" rel="noreferrer">
                  <img src="\${item.imageUrl}" alt="\${item.imageAlt}" loading="lazy" />
                </a>
                <div class="detail-copy">
                  <span class="action-badge">\${detailKind} / \${detailRegion}</span>
                  <h2>\${item.name}</h2>
                  <p class="asset-meta">\${item.setName} / \${String(detailStatus).replace(/_/g, ' ')} / Japan, Singapore, HK, US, Dubai price board</p>
                  <p class="asset-meta">\${asset?.valuationBasis || pickedUp?.note || 'Fresh regional quotes required before purchase.'}</p>
                  <p class="asset-meta">\${asset?.agentInstruction || 'Agent requests regional executable quotes, verifies seller/source quality, then routes a paUSDC purchase request inside Pack Alpha.'}</p>
                </div>
                <div class="detail-action">
                  <span class="panel-kicker">USDC purchase</span>
                  <strong>\${asset?.targetMaxBidUsd ? money.format(asset.targetMaxBidUsd) + ' cap' : 'Fresh quote'}</strong>
                  <span class="detail-status" id="detail-order-status">Connect wallet and sign in to buy with paUSDC.</span>
                  <button class="primary-button" type="button" data-detail-purchase-asset-id="\${purchaseAssetId}" data-detail-purchase-picked-id="\${purchasePickedId}">
                    Buy
                  </button>
                </div>
              </div>
              <div class="route-box">
                <div class="panel-head">
                  <h3>Regional Price Board</h3>
                  <span class="panel-kicker">Japan / Singapore / HK / US / Dubai</span>
                </div>
                <div class="region-price-grid">\${renderRegionPriceCards(asset, pickedUp)}</div>
              </div>
              <div class="decision-grid">
                <div class="metric"><span>Benchmark</span><strong>\${benchmarkValue(asset, pickedUp)}</strong></div>
                <div class="metric"><span>Target edge</span><strong>\${decision ? pct(decision.expectedNetEdgePct) : 'TBD'}</strong></div>
                <div class="metric"><span>Confidence</span><strong>\${decision ? Number(decision.confidenceScore).toFixed(2) : 'TBD'}</strong></div>
                <div class="metric"><span>Custody route</span><strong>\${detailRegion}</strong></div>
              </div>
              <div class="route-box">
                <div class="panel-head">
                  <h3>Benchmark Sources</h3>
                  <span class="panel-kicker">no fake asks</span>
                </div>
                <div class="source-list">\${sources}</div>
              </div>
            \`;

            document.querySelectorAll('[data-detail-purchase-asset-id]').forEach((button) => {
              button.addEventListener('click', async () => {
                const order = await createPurchaseOrder({
                  assetId: button.getAttribute('data-detail-purchase-asset-id') || undefined,
                  pickedUpId: button.getAttribute('data-detail-purchase-picked-id') || undefined,
                  skipTicket: true
                });
                if (order) {
                  document.getElementById('detail-order-status').textContent =
                    'Buy order queued / ' + order.settlementToken + ' / ' + String(order.status).replace(/_/g, ' ');
                }
              });
            });

            document.getElementById('item-detail-modal').hidden = false;
            requestAnimationFrame(() => window.scrollTo(0, previousScrollY));
          }

          async function fetchJson(url, options) {
            const response = await fetch(url, options);
            if (!response.ok) {
              throw new Error('Request failed: ' + response.status);
            }
            return response.json();
          }

          async function loadAssets() {
            state.assets = await fetchJson('/api/pack-alpha/assets');
            state.selectedAssetId = state.selectedAssetId || state.assets[0]?.id;
            renderAssets();
          }

          async function loadPickedUp() {
            state.pickedUp = await fetchJson('/api/pack-alpha/picked-up');
            renderPickedUp();
          }

          async function loadOnchainConfig() {
            state.onchain = await fetchJson('/api/pack-alpha/onchain/config');
            state.wallet.contractAddress =
              localStorage.getItem('packAlphaArenaAddress') ||
              state.onchain.contract.address ||
              null;
            state.wallet.demoUsdcAddress =
              localStorage.getItem('packAlphaDemoUsdcAddress') ||
              state.onchain.demoUsdc.address ||
              null;
            renderWallet();
          }

          async function loadRound() {
            state.round = await fetchJson('/api/pack-alpha/round');
            document.getElementById('round-id').textContent = state.round.roundId;
            document.getElementById('metric-executable').textContent = state.round.executableCount;
            document.getElementById('metric-confidence').textContent = Number(state.round.averageConfidence).toFixed(2);
            document.getElementById('metric-edge').textContent = pct(state.round.bestDecision?.expectedNetEdgePct || 0);
          }

          async function loadDecision() {
            if (!state.selectedAssetId) return;
            state.decision = await fetchJson('/api/pack-alpha/assets/' + encodeURIComponent(state.selectedAssetId) + '/decision');
            renderDecision();
            renderReasons();
          }

          async function loadIntents() {
            const intents = await fetchJson('/api/pack-alpha/intents');
            const target = document.getElementById('intent-list');
            target.innerHTML = intents.length
              ? intents.map((intent) => \`
                <article class="intent-item">
                  <strong>\${actionLabel(intent.action)} via \${intent.venue || 'review'}</strong>
                  <span class="asset-meta">\${intent.status}</span>
                  <code>\${intent.receiptHash}</code>
                </article>
              \`).join('')
              : '<p class="empty">No intents yet.</p>';
          }

          async function loadPurchaseOrders() {
            state.purchaseOrders = await fetchJson('/api/pack-alpha/purchase-orders');
            renderPurchaseOrders();
          }

          function renderPurchaseOrders() {
            const target = document.getElementById('intent-list');
            if (!state.purchaseOrders.length) return;
            const orders = state.purchaseOrders.map((order) => \`
              <article class="intent-item">
                <strong>paUSDC order / \${order.itemName}</strong>
                <span class="asset-meta">\${String(order.status).replace(/_/g, ' ')} / \${order.settlementToken}\${order.maxAuthorizationUsd ? ' / cap ' + money.format(order.maxAuthorizationUsd) : ' / quote required'}</span>
                <code>\${order.receiptHash}</code>
              </article>
            \`).join('');
            target.innerHTML = orders + target.innerHTML;
          }

          function setRunButton(status) {
            const button = document.getElementById('run-button');
            if (!button) return;
            button.disabled = status === 'running';
            button.textContent =
              status === 'running'
                ? 'Agent running...'
                : status === 'complete'
                  ? 'Run complete'
                  : 'Run agent mode';
            if (status === 'complete') {
              setTimeout(() => {
                button.textContent = 'Run agent mode';
              }, 1800);
            }
          }

          function shortAddress(value) {
            return value ? value.slice(0, 6) + '...' + value.slice(-4) : '';
          }

          function renderHeaderWallet() {
            const button = document.getElementById('header-wallet-button');
            if (!button) return;
            if (!state.wallet.account) {
              button.textContent = 'Connect wallet';
              return;
            }
            button.textContent = state.wallet.signedIn
              ? 'Signed ' + shortAddress(state.wallet.account)
              : shortAddress(state.wallet.account);
          }

          function renderWallet(message) {
            const target = document.getElementById('wallet-status');
            const parts = [];
            parts.push(state.wallet.account ? 'Wallet ' + shortAddress(state.wallet.account) : 'Wallet not connected.');
            parts.push(state.wallet.signedIn ? 'Signed in with wallet.' : 'Wallet signature required before paUSDC purchase.');
            parts.push(state.wallet.contractAddress ? 'Vault ledger ' + shortAddress(state.wallet.contractAddress) : 'No vault ledger deployed yet.');
            parts.push(state.wallet.demoUsdcAddress ? 'paUSDC ' + shortAddress(state.wallet.demoUsdcAddress) : 'No paUSDC order token deployed yet.');
            if (state.wallet.latestTxHash) {
              parts.push('<a class="tx-link" href="' + state.onchain.network.blockExplorerUrls[0] + '/tx/' + state.wallet.latestTxHash + '" target="_blank" rel="noreferrer">Tx ' + shortAddress(state.wallet.latestTxHash) + '</a>');
            }
            if (state.wallet.flowProgress.length) {
              parts.push(state.wallet.flowProgress.slice(-3).join('<br />'));
            }
            if (message) parts.push(message);
            target.innerHTML = parts.join('<br />');
            renderHeaderWallet();
          }

          function walletRequestWithTimeout(request, timeoutMs) {
            return Promise.race([
              request,
              new Promise((_, reject) => {
                window.setTimeout(() => reject(new Error('Wallet request timed out')), timeoutMs);
              })
            ]);
          }

          function useDemoWallet(message) {
            state.wallet.account = demoWalletAddress;
            renderWallet(message || 'Demo wallet connected for paUSDC purchase flow.');
          }

          function requireEthereum() {
            if (!window.ethereum) {
              throw new Error('No EVM wallet detected. Install MetaMask or a compatible wallet.');
            }
            return window.ethereum;
          }

          async function ensureMonadNetwork() {
            const ethereum = requireEthereum();
            const target = state.onchain.network;
            try {
              await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: target.chainIdHex }]
              });
            } catch (error) {
              if (error && error.code === 4902) {
                await ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [target]
                });
                return;
              }
              throw error;
            }
          }

          async function connectInjectedWallet(options = {}) {
            try {
              if (!window.ethereum) {
                if (options.allowDemoFallback) {
                  useDemoWallet('No browser wallet detected. Demo wallet connected for paUSDC purchase.');
                  return;
                }
                throw new Error('No EVM wallet detected. Install MetaMask or a compatible wallet.');
              }
              await ensureMonadNetwork();
              const accounts = await walletRequestWithTimeout(
                requireEthereum().request({ method: 'eth_requestAccounts' }),
                8000
              );
              state.wallet.account = accounts[0] || null;
              renderWallet('Connected to Monad testnet. Sign in to authorize paUSDC order flow.');
            } catch (error) {
              if (options.allowDemoFallback) {
                useDemoWallet('Wallet unavailable. Demo wallet connected for paUSDC purchase.');
                return;
              }
              renderWallet(error.message || String(error));
            }
          }

          async function connectWallet(options = {}) {
            try {
              if (!state.onchain) await loadOnchainConfig();
              const rainbowKitButton = document.querySelector('#rainbowkit-root button');
              if (!state.wallet.account && window.packAlphaRainbowKitReady && rainbowKitButton && !options.allowDemoFallback) {
                rainbowKitButton.click();
                renderWallet('Choose a wallet in RainbowKit.');
                return;
              }
              await connectInjectedWallet(options);
            } catch (error) {
              if (options.allowDemoFallback) {
                useDemoWallet('Wallet connection failed. Demo wallet connected for paUSDC purchase.');
                return;
              }
              renderWallet(error.message || String(error));
            }
          }

          async function signInWithWallet(options = {}) {
            try {
              if (!state.wallet.account) await connectWallet(options);
              if (!state.wallet.account) {
                if (options.allowDemoFallback) {
                  useDemoWallet('Demo wallet connected for paUSDC purchase.');
                } else {
                  throw new Error('Wallet connection required.');
                }
              }
              const message = [
                'Pack Alpha Concierge sign-in',
                'Wallet: ' + state.wallet.account,
                'Purpose: authorize in-app paUSDC purchase requests before fresh executable quote capture.',
                'Issued at: ' + new Date().toISOString()
              ].join('\\n');

              if (window.packAlphaRainbowKitSignMessage) {
                state.wallet.signature = await walletRequestWithTimeout(window.packAlphaRainbowKitSignMessage(message), 8000);
              } else if (window.ethereum?.request) {
                state.wallet.signature = await walletRequestWithTimeout(
                  requireEthereum().request({
                    method: 'personal_sign',
                    params: [message, state.wallet.account]
                  }),
                  8000
                );
              } else {
                state.wallet.signature = 'demo-signature';
              }
              state.wallet.signedIn = true;
              renderWallet('Signed in for paUSDC order flow.');
            } catch (error) {
              if (options.allowDemoFallback) {
                state.wallet.signature = 'demo-signature';
                state.wallet.signedIn = true;
                renderWallet('Demo signature accepted for paUSDC purchase flow.');
                return;
              }
              renderWallet(error.message || String(error));
            }
          }

          function strip0x(value) {
            return String(value || '').startsWith('0x') ? String(value).slice(2) : String(value || '');
          }

          function pad32(hex) {
            return strip0x(hex).padStart(64, '0');
          }

          function asciiToHex(value) {
            return Array.from(new TextEncoder().encode(String(value))).map((byte) => byte.toString(16).padStart(2, '0')).join('');
          }

          function encodeUint(value) {
            return BigInt(value).toString(16).padStart(64, '0');
          }

          function encodeInt(value) {
            const big = BigInt(value);
            if (big >= 0n) return big.toString(16).padStart(64, '0');
            return (2n ** 256n + big).toString(16).padStart(64, '0');
          }

          function encodeString(value) {
            const hex = asciiToHex(value);
            const byteLength = hex.length / 2;
            const paddedLength = Math.ceil(byteLength / 32) * 64;
            return encodeUint(byteLength) + hex.padEnd(paddedLength, '0');
          }

          function encodeAddress(value) {
            return strip0x(value).padStart(64, '0');
          }

          function encodeCommitDecision(decision, intent) {
            const selector = state.onchain.contract.commitDecisionSelector;
            const asset = state.assets.find((item) => item.id === decision.assetId);
            const assetId = asset?.id || decision.assetId;
            const action = decision.action || '';
            const venue = decision.preferredVenue || 'review';
            const edgeBps = Math.round(Number(decision.expectedNetEdgePct || 0) * 100);
            const receiptHash = intent.receiptHash;
            const headSize = 6 * 32;
            const assetEncoded = encodeString(assetId);
            const actionEncoded = encodeString(action);
            const venueEncoded = encodeString(venue);
            const assetOffset = headSize;
            const actionOffset = assetOffset + assetEncoded.length / 2;
            const venueOffset = actionOffset + actionEncoded.length / 2;
            return selector +
              pad32(decision.decisionHash) +
              encodeUint(assetOffset) +
              encodeUint(actionOffset) +
              encodeUint(venueOffset) +
              encodeInt(edgeBps) +
              pad32(receiptHash) +
              assetEncoded +
              actionEncoded +
              venueEncoded;
          }

          async function waitForReceipt(txHash) {
            const ethereum = requireEthereum();
            for (let index = 0; index < 40; index += 1) {
              const receipt = await ethereum.request({
                method: 'eth_getTransactionReceipt',
                params: [txHash]
              });
              if (receipt) return receipt;
              await new Promise((resolve) => setTimeout(resolve, 1200));
            }
            return null;
          }

          async function deployContract() {
            try {
              if (!state.onchain) await loadOnchainConfig();
              await connectWallet();
              if (!state.wallet.account) throw new Error('Wallet connection required.');

              if (!state.wallet.contractAddress) {
                if (!state.onchain.contract.bytecode) throw new Error('Contract bytecode missing. Run forge build.');
                renderWallet('Deploying Monad vault ledger...');
                const txHash = await requireEthereum().request({
                  method: 'eth_sendTransaction',
                  params: [{
                    from: state.wallet.account,
                    data: state.onchain.contract.bytecode
                  }]
                });
                state.wallet.latestTxHash = txHash;
                renderWallet('Waiting for vault ledger deploy receipt...');
                const receipt = await waitForReceipt(txHash);
                if (!receipt?.contractAddress) {
                  renderWallet('Vault ledger deploy submitted. Waiting longer may be needed.');
                  return;
                }
                state.wallet.contractAddress = receipt.contractAddress;
                localStorage.setItem('packAlphaArenaAddress', receipt.contractAddress);
              }

              if (!state.wallet.demoUsdcAddress) {
                if (!state.onchain.demoUsdc.bytecode) throw new Error('DemoUSDC bytecode missing. Run forge build.');
                renderWallet('Deploying paUSDC order token...');
                const tokenData = state.onchain.demoUsdc.bytecode + encodeAddress(state.wallet.account);
                const tokenTxHash = await requireEthereum().request({
                  method: 'eth_sendTransaction',
                  params: [{
                    from: state.wallet.account,
                    data: tokenData
                  }]
                });
                state.wallet.latestTxHash = tokenTxHash;
                renderWallet('Waiting for paUSDC order token receipt...');
                const tokenReceipt = await waitForReceipt(tokenTxHash);
                if (!tokenReceipt?.contractAddress) {
                  renderWallet('paUSDC order token deploy submitted. Waiting longer may be needed.');
                  return;
                }
                state.wallet.demoUsdcAddress = tokenReceipt.contractAddress;
                localStorage.setItem('packAlphaDemoUsdcAddress', tokenReceipt.contractAddress);
              }

              renderWallet('Vault ledger and paUSDC order token deployed.');
            } catch (error) {
              renderWallet(error.message || String(error));
            }
          }

          async function commitOnchain() {
            try {
              if (!state.onchain) await loadOnchainConfig();
              await connectWallet();
              if (!state.wallet.contractAddress) throw new Error('Deploy vault ledger first or set PACK_ALPHA_ARENA_ADDRESS.');
              if (!state.decision) await loadDecision();
              const intent = await fetchJson('/api/pack-alpha/intents', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ assetId: state.selectedAssetId })
              });
              await loadIntents();
              const data = encodeCommitDecision(state.decision, intent);
              renderWallet('Order commit transaction pending...');
              const txHash = await requireEthereum().request({
                method: 'eth_sendTransaction',
                params: [{
                  from: state.wallet.account,
                  to: state.wallet.contractAddress,
                  data
                }]
              });
              state.wallet.latestTxHash = txHash;
              renderWallet('Order intent committed onchain.');
            } catch (error) {
              renderWallet(error.message || String(error));
            }
          }

          async function runFullOnchainFlow() {
            try {
              if (!state.onchain) await loadOnchainConfig();
              await connectWallet();
              if (!state.wallet.contractAddress) throw new Error('Deploy vault ledger first or set PACK_ALPHA_ARENA_ADDRESS.');
              if (!state.wallet.demoUsdcAddress) throw new Error('Deploy paUSDC order token first.');
              const flow = await fetchJson('/api/pack-alpha/onchain/demo-flow?demoUsdcAddress=' + encodeURIComponent(state.wallet.demoUsdcAddress));
              state.wallet.flowProgress = [];
              for (const step of flow.steps) {
                renderWallet('Sending ' + step.label + '...');
                const txHash = await requireEthereum().request({
                  method: 'eth_sendTransaction',
                  params: [{
                    from: state.wallet.account,
                    to: state.wallet.contractAddress,
                    data: step.data
                  }]
                });
                state.wallet.latestTxHash = txHash;
                state.wallet.flowProgress.push(step.label + ' ' + shortAddress(txHash));
                renderWallet('Waiting for ' + step.label + ' receipt...');
                await waitForReceipt(txHash);
              }
              renderWallet('Vault order flow completed.');
            } catch (error) {
              renderWallet(error.message || String(error));
            }
          }

          async function selectAsset(assetId) {
            if (!assetId) return;
            state.selectedAssetId = assetId;
            renderAssets();
            await loadDecision();
          }

          async function createPurchaseOrder(input) {
            try {
              if (!state.wallet.account) await connectWallet({ allowDemoFallback: true });
              if (!state.wallet.account) {
                renderWallet('Connect a wallet with RainbowKit, then tap the item again to create a paUSDC order.');
                return null;
              }
              if (!state.wallet.signedIn) await signInWithWallet({ allowDemoFallback: true });
              if (!state.wallet.signedIn) {
                renderWallet('Sign in with wallet before creating a paUSDC order.');
                return null;
              }
              const order = await fetchJson('/api/pack-alpha/purchase-orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  assetId: input.assetId,
                  pickedUpId: input.pickedUpId,
                  walletAddress: state.wallet.account,
                  signedIn: state.wallet.signedIn
                })
              });
              state.purchaseOrders = [order, ...state.purchaseOrders.filter((item) => item.orderId !== order.orderId)];
              if (!input.skipTicket) {
                renderPurchaseTicket(order);
              }
              await loadIntents();
              await loadPurchaseOrders();
              return order;
            } catch (error) {
              const detailStatus = document.getElementById('detail-order-status');
              if (detailStatus) {
                detailStatus.textContent = error.message || String(error);
              }
              document.getElementById('decision-body').innerHTML =
                '<p class="empty">' + (error.message || String(error)) + '</p>';
              return null;
            }
          }

          function renderPurchaseTicket(order) {
            const target = document.getElementById('decision-body');
            const ticket = \`
              <article class="purchase-ticket">
                <strong>paUSDC purchase ticket</strong>
                <em>\${order.maxAuthorizationUsd ? 'Authorize up to ' + money.format(order.maxAuthorizationUsd) : 'Fresh quote required'}</em>
                <small>\${order.itemName} / \${order.itemSetName}. The agent keeps execution inside Pack Alpha and requests a fresh marketplace quote before paUSDC capture.</small>
              </article>
            \`;
            target.innerHTML = ticket + target.innerHTML;
          }

          function renderPickedUp() {
            const target = document.getElementById('pickup-rail');
            target.innerHTML = state.pickedUp.map((item) => \`
              <button class="pickup-card" type="button" data-picked-up-id="\${item.id}" data-picked-asset-id="\${item.linkedAssetId || ''}">
                <span class="pickup-media">
                  <img src="\${item.imageUrl}" alt="\${item.imageAlt}" loading="lazy" />
                </span>
                <span class="pickup-copy">
                  <span class="pickup-meta">
                    <span>\${item.kind}</span>
                    <span>\${item.region}</span>
                    <span>\${String(item.status).replace(/_/g, ' ')}</span>
                  </span>
                  <strong>\${item.name}</strong>
                  <small>\${item.setName}. \${item.note}</small>
                </span>
              </button>
            \`).join('');

            document.querySelectorAll('[data-picked-asset-id]').forEach((button) => {
              button.addEventListener('click', async () => {
                const assetId = button.getAttribute('data-picked-asset-id');
                if (assetId) {
                  await openItemDetail({ assetId, pickedUpId: button.getAttribute('data-picked-up-id') });
                  return;
                }
                await openItemDetail({ pickedUpId: button.getAttribute('data-picked-up-id') });
              });
            });
          }

          function renderAssets() {
            document.getElementById('asset-count').textContent = String(state.assets.length);
            document.getElementById('asset-list').innerHTML = state.assets.map((asset) => \`
              <button class="asset-button \${asset.id === state.selectedAssetId ? 'is-active' : ''}" type="button" data-asset-id="\${asset.id}">
                <span class="asset-thumb">
                  <img src="\${asset.imageUrl}" alt="\${asset.imageAlt}" loading="lazy" />
                </span>
                <span class="asset-copy">
                  <span class="asset-meta">\${asset.mode} / \${asset.grade} / \${asset.language}</span>
                  <strong>\${asset.name}</strong>
                  <span class="asset-tag">\${asset.demoTag}</span>
                  <span class="asset-bottom">
                    <span>\${asset.setName}</span>
                    <span>\${asset.mode === 'vault_item' ? 'Vault ' + asset.vaultState : 'Max bid ' + money.format(asset.targetMaxBidUsd || asset.exitValueUsd)}</span>
                  </span>
                </span>
              </button>
            \`).join('');

            document.querySelectorAll('[data-asset-id]').forEach((button) => {
              button.addEventListener('click', async () => {
                await openItemDetail({ assetId: button.getAttribute('data-asset-id') });
              });
            });
          }

          function renderDecision() {
            const decision = state.decision;
            const asset = state.assets.find((item) => item.id === decision.assetId);
            const searchLinks = (asset?.searchUrls || []).map((source) => \`
              <article class="source-row">
                <button type="button" data-purchase-asset-id="\${asset?.id || ''}" data-route-venue="\${source.venue}">\${source.label}</button>
                <strong>\${source.venue}</strong>
                <small>Agent requests a fresh executable quote in-app, then creates a paUSDC purchase ticket.</small>
              </article>
            \`).join('');
            const sources = (asset?.valuationSources || []).map((source) => \`
              <article class="source-row">
                <a href="\${source.url}" target="_blank" rel="noreferrer">\${source.label}</a>
                <strong>\${money.format(source.priceUsd)}</strong>
                <small>\${source.basis}. Observed \${source.observedAt}.</small>
              </article>
            \`).join('');
            const routes = decision.routeRanking.slice(0, 5).map((route) => \`
              <article class="route-row">
                <span>\${route.venue} / \${actionLabel(route.action)}</span>
                <em>\${pct(route.expectedNetValueUsd > 0 && asset?.costBasisUsd ? ((route.expectedNetValueUsd - asset.costBasisUsd) / asset.costBasisUsd) * 100 : decision.expectedNetEdgePct)}</em>
                <strong>\${route.label}</strong>
                <small>Model edge/net \${money.format(route.expectedNetValueUsd)} after \${money.format(route.feesUsd + route.frictionUsd)} friction. Expires \${new Date(route.expiresAt).toLocaleDateString()}.</small>
              </article>
            \`).join('');

            const valueLabel = 'Market value';
            document.getElementById('decision-body').innerHTML = \`
              <div class="decision-hero">
                <a class="decision-media" href="\${asset?.imageSourceUrl || '#'}" target="_blank" rel="noreferrer" aria-label="Open image source">
                  <img src="\${asset?.imageUrl || ''}" alt="\${asset?.imageAlt || ''}" loading="lazy" />
                </a>
                <div>
                  <span class="action-badge">\${actionLabel(decision.action)}</span>
                  <h2 class="decision-title">\${asset?.name || decision.assetId}</h2>
                  <p class="asset-meta">\${asset?.setName || ''} / \${asset?.targetMarkets?.join(', ') || ''} / \${decision.humanApprovalRequired ? 'approval required' : 'ready'}</p>
                  <p class="asset-meta">\${asset?.demoNote || ''}</p>
                  <p class="asset-meta">\${asset?.valuationBasis || ''}</p>
                  <p class="asset-meta">\${asset?.agentInstruction || ''}</p>
                </div>
                <div class="edge-box">
                  <span>Target edge</span>
                  <strong>\${pct(decision.expectedNetEdgePct)}</strong>
                </div>
              </div>
              <div class="decision-grid">
                <div class="metric"><span>\${valueLabel}</span><strong>\${money.format(asset?.fairValueUsd || 0)}</strong></div>
                <div class="metric"><span>\${asset?.mode === 'vault_item' ? 'Vault state' : 'Max bid'}</span><strong>\${asset?.mode === 'vault_item' ? asset?.vaultState : money.format(asset?.targetMaxBidUsd || 0)}</strong></div>
                <div class="metric"><span>Confidence</span><strong>\${Number(decision.confidenceScore).toFixed(2)}</strong></div>
                <div class="metric"><span>Reserve</span><strong>\${money.format(decision.downsideReserveUsd)}</strong></div>
              </div>
              <div class="route-box">
                <div class="panel-head">
                  <h3>Benchmark Sources</h3>
                  <span class="panel-kicker">source-backed</span>
                </div>
                <div class="source-list">\${sources}</div>
              </div>
              <div class="route-box">
                <div class="panel-head">
                  <h3>In-app Purchase Routes</h3>
                  <span class="panel-kicker">paUSDC / no handoff</span>
                </div>
                <div class="source-list">\${searchLinks}</div>
              </div>
              <div class="route-box">
                <div class="panel-head">
                  <h3>Agent Action Ranking</h3>
                  <span class="panel-kicker">\${decision.routeRanking.length} actions</span>
                </div>
                <div class="route-list">\${routes}</div>
              </div>
            \`;

            document.querySelectorAll('[data-purchase-asset-id]').forEach((button) => {
              button.addEventListener('click', async () => {
                const assetId = button.getAttribute('data-purchase-asset-id');
                if (assetId) {
                  await createPurchaseOrder({ assetId });
                }
              });
            });
          }

          function renderReasons() {
            const decision = state.decision;
            document.getElementById('reason-list').innerHTML = decision.reasonCodes
              .map((reason) => \`<span class="reason-pill">\${reason}</span>\`)
              .join('');
          }

          function renderAgentRun(run) {
            const asset = state.assets.find((item) => item.id === run.selectedAssetId);
            const target = document.getElementById('decision-body');
            const current = target.innerHTML;
            target.innerHTML = \`
              <div class="agent-run-banner">
                <strong>Agent mode executed</strong>
                <span>Scanned \${run.scannedCount} targets, ranked \${run.candidateCount} actionable candidates, and queued \${actionLabel(run.intent.action)} for \${asset?.name || run.selectedAssetId}.</span>
                <span class="asset-meta">Intent \${run.intent.intentId} / \${run.intent.status} / receipt \${run.intent.receiptHash.slice(0, 10)}...\${run.intent.receiptHash.slice(-8)}</span>
              </div>
            \` + current;
            document.getElementById('reason-list').innerHTML = run.checks
              .map((check) => \`<span class="reason-pill">\${check}</span>\`)
              .join('');
          }

          async function runAgentMode() {
            setRunButton('running');
            try {
              if (!state.assets.length) {
                await Promise.all([loadAssets(), loadPickedUp(), loadOnchainConfig()]);
              }
              const run = await fetchJson('/api/pack-alpha/agent/run', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mode: 'concierge_vault_router' })
              });
              state.selectedAssetId = run.selectedAssetId;
              state.decision = run.decision;
              renderAssets();
              renderDecision();
              renderAgentRun(run);
              await Promise.all([loadRound(), loadIntents()]);
              setRunButton('complete');
            } catch (error) {
              setRunButton('idle');
              document.getElementById('decision-body').innerHTML =
                '<p class="empty">' + (error.message || String(error)) + '</p>';
            }
          }

          async function commitIntent() {
            if (!state.selectedAssetId) return;
            const intent = await fetchJson('/api/pack-alpha/intents', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ assetId: state.selectedAssetId })
            });
            await loadIntents();
            document.getElementById('intent-button').textContent = intent.status === 'requires_approval' ? 'Approval queued' : 'Order logged';
            setTimeout(() => {
              document.getElementById('intent-button').textContent = 'Request action';
            }, 1600);
          }

          async function boot() {
            await Promise.all([loadAssets(), loadPickedUp(), loadOnchainConfig()]);
            await Promise.all([loadRound(), loadDecision(), loadIntents()]);
            await loadPurchaseOrders();
          }

          document.getElementById('run-button').addEventListener('click', runAgentMode);
          document.getElementById('refresh-button').addEventListener('click', boot);
          document.getElementById('intent-button').addEventListener('click', commitIntent);
          document.getElementById('detail-close-button').addEventListener('click', closeItemDetail);
          document.getElementById('item-detail-modal').addEventListener('click', (event) => {
            if (event.target?.id === 'item-detail-modal') closeItemDetail();
          });
          document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeItemDetail();
          });
          document.getElementById('header-wallet-button').addEventListener('click', connectWallet);
          document.getElementById('wallet-button').addEventListener('click', connectWallet);
          document.getElementById('rainbowkit-fallback-button')?.addEventListener('click', connectInjectedWallet);
          document.getElementById('signin-button').addEventListener('click', signInWithWallet);
          document.getElementById('deploy-button').addEventListener('click', deployContract);
          document.getElementById('onchain-button').addEventListener('click', commitOnchain);
          document.getElementById('flow-button').addEventListener('click', runFullOnchainFlow);
          boot().catch((error) => {
            document.getElementById('decision-body').innerHTML = '<p class="empty">' + error.message + '</p>';
          });
        </script>
        <script type="module">
          (async () => {
            const rootEl = document.getElementById('rainbowkit-root');
            if (!rootEl) return;
            try {
              rootEl.innerHTML = '<button class="refresh-button" type="button">Loading RainbowKit...</button>';
              const React = await import('https://esm.sh/react@18.2.0');
              const { createRoot } = await import('https://esm.sh/react-dom@18.2.0/client');
              const { QueryClient, QueryClientProvider } = await import('https://esm.sh/@tanstack/react-query@5.59.20');
              const { WagmiProvider, useAccount, useSignMessage } = await import('https://esm.sh/wagmi@2.15.6');
              const { RainbowKitProvider, ConnectButton, darkTheme, getDefaultConfig } = await import('https://esm.sh/@rainbow-me/rainbowkit@2.2.8');

              const monadTestnet = {
                id: 10143,
                name: 'Monad Testnet',
                nativeCurrency: { name: 'MON', symbol: 'MON', decimals: 18 },
                rpcUrls: { default: { http: ['https://testnet-rpc.monad.xyz'] } },
                blockExplorers: { default: { name: 'Monad Explorer', url: 'https://testnet.monadexplorer.com' } }
              };
              const config = getDefaultConfig({
                appName: 'Pack Alpha Concierge',
                projectId: 'pack-alpha-demo',
                chains: [monadTestnet],
                ssr: false
              });
              const queryClient = new QueryClient();
              window.packAlphaRainbowKitReady = true;

              function WalletBridge() {
                const account = useAccount();
                const signer = useSignMessage();
                React.useEffect(() => {
                  if (account.address && window.packAlphaWalletConnected) {
                    window.packAlphaWalletConnected(account.address);
                  }
                }, [account.address]);
                React.useEffect(() => {
                  window.packAlphaRainbowKitSignMessage = (message) => signer.signMessageAsync({ message });
                }, [signer.signMessageAsync]);
                return React.createElement(ConnectButton, {
                  label: 'Connect wallet',
                  accountStatus: 'address',
                  chainStatus: 'icon',
                  showBalance: false
                });
              }

              createRoot(rootEl).render(
                React.createElement(WagmiProvider, { config },
                  React.createElement(QueryClientProvider, { client: queryClient },
                    React.createElement(RainbowKitProvider, { theme: darkTheme({ accentColor: '#6e54ff' }) },
                      React.createElement(WalletBridge)
                    )
                  )
                )
              );
            } catch (error) {
              window.packAlphaRainbowKitReady = false;
              rootEl.innerHTML = '<button class="refresh-button" type="button" id="rainbowkit-fallback-button">RainbowKit unavailable; use injected wallet</button>';
              document.getElementById('rainbowkit-fallback-button')?.addEventListener('click', () => {
                document.getElementById('wallet-button')?.click();
              });
            }
          })();
        </script>
        <script>
          setTimeout(() => {
            const rootEl = document.getElementById('rainbowkit-root');
            if (!rootEl) return;
            const currentText = rootEl.textContent || '';
            if (rootEl.querySelector('button') && !currentText.includes('Loading RainbowKit')) return;
            rootEl.innerHTML = '<button class="refresh-button" type="button" id="rainbowkit-fallback-button">RainbowKit wallet</button>';
            document.getElementById('rainbowkit-fallback-button')?.addEventListener('click', () => {
              document.getElementById('wallet-button')?.click();
            });
          }, 2500);
        </script>
      </body>
    </html>`;
}
