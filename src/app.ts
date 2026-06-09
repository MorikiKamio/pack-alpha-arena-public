import express from 'express';

import { renderPackAlphaAppPage } from './api/packAlphaAppPage.js';
import { renderPackAlphaPage } from './api/packAlphaPage.js';
import { renderPackAlphaProfilePage } from './api/packAlphaProfilePage.js';
import {
  buildPackAlphaRound,
  createPackAlphaIntent,
  createPackAlphaPurchaseOrder,
  createPackAlphaSellActionTicket,
  createPackAlphaVaultActionTicket,
  getPackAlphaAsset,
  getPackAlphaProfile,
  listPackAlphaAssets,
  listPackAlphaIntents,
  listPackAlphaPickedUpItems,
  listPackAlphaPurchaseOrders,
  runNetEdgeRouter,
  runPackAlphaAgentMode
} from './api/packAlphaEngine.js';
import { getPackAlphaOnchainConfig, getPackAlphaOnchainDemoFlow } from './api/packAlphaOnchain.js';

export function createApp() {
  const app = express();

  app.get('/', (_req, res) => {
    res.redirect('/pack-alpha');
  });

  app.get('/pack-alpha', (_req, res) => {
    res.type('html').send(renderPackAlphaPage());
  });

  app.get('/pack-alpha/app', (_req, res) => {
    res.type('html').send(renderPackAlphaAppPage());
  });

  app.get('/pack-alpha/profile', (_req, res) => {
    res.type('html').send(renderPackAlphaProfilePage());
  });

  app.get('/api/pack-alpha/assets', (_req, res) => {
    res.json(listPackAlphaAssets());
  });

  app.get('/api/pack-alpha/profile', (_req, res) => {
    res.json(getPackAlphaProfile());
  });

  app.get('/api/pack-alpha/picked-up', (_req, res) => {
    res.json(listPackAlphaPickedUpItems());
  });

  app.get('/api/pack-alpha/assets/:assetId', (req, res) => {
    const asset = getPackAlphaAsset(req.params.assetId);
    if (!asset) {
      res.status(404).json({ error: 'Pack Alpha asset not found' });
      return;
    }

    res.json(asset);
  });

  app.get('/api/pack-alpha/assets/:assetId/decision', (req, res) => {
    const decision = runNetEdgeRouter(req.params.assetId);
    if (!decision) {
      res.status(404).json({ error: 'Pack Alpha asset not found' });
      return;
    }

    res.json(decision);
  });

  app.get('/api/pack-alpha/round', (_req, res) => {
    res.json(buildPackAlphaRound());
  });

  app.post('/api/pack-alpha/agent/run', express.json(), (_req, res) => {
    const run = runPackAlphaAgentMode();
    if (!run) {
      res.status(404).json({ error: 'No Pack Alpha agent candidates found' });
      return;
    }

    res.status(201).json(run);
  });

  app.get('/api/pack-alpha/intents', (_req, res) => {
    res.json(listPackAlphaIntents());
  });

  app.post('/api/pack-alpha/intents', express.json(), (req, res) => {
    const assetId = typeof req.body?.assetId === 'string' ? req.body.assetId : '';
    const intent = createPackAlphaIntent(assetId);
    if (!intent) {
      res.status(404).json({ error: 'Pack Alpha asset not found' });
      return;
    }

    res.status(201).json(intent);
  });

  app.get('/api/pack-alpha/purchase-orders', (_req, res) => {
    res.json(listPackAlphaPurchaseOrders());
  });

  app.post('/api/pack-alpha/purchase-orders', express.json(), (req, res) => {
    const order = createPackAlphaPurchaseOrder({
      assetId: typeof req.body?.assetId === 'string' ? req.body.assetId : undefined,
      pickedUpId: typeof req.body?.pickedUpId === 'string' ? req.body.pickedUpId : undefined,
      walletAddress: typeof req.body?.walletAddress === 'string' ? req.body.walletAddress : undefined,
      signedIn: Boolean(req.body?.signedIn)
    });
    if (!order) {
      res.status(404).json({ error: 'Pack Alpha purchase item not found' });
      return;
    }

    res.status(201).json(order);
  });

  app.post('/api/pack-alpha/vault-actions', express.json(), (req, res) => {
    const action = req.body?.action === 'redeem' ? 'redeem' : req.body?.action === 'tokenize' ? 'tokenize' : null;
    if (!action) {
      res.status(400).json({ error: 'Vault action must be tokenize or redeem' });
      return;
    }

    const ticket = createPackAlphaVaultActionTicket({
      holdingId: typeof req.body?.holdingId === 'string' ? req.body.holdingId : '',
      action,
      walletAddress: typeof req.body?.walletAddress === 'string' ? req.body.walletAddress : undefined,
      signedIn: Boolean(req.body?.signedIn)
    });
    if (!ticket) {
      res.status(404).json({ error: 'Pack Alpha profile holding not found' });
      return;
    }

    res.status(201).json(ticket);
  });

  app.post('/api/pack-alpha/sell-actions', express.json(), (req, res) => {
    const allowedVenues = new Set(['ebay', 'sneaker_dunk', 'dubizzle', 'mercari_jp']);
    const venue = typeof req.body?.venue === 'string' && allowedVenues.has(req.body.venue) ? req.body.venue : null;
    if (!venue) {
      res.status(400).json({ error: 'Sell venue must be ebay, sneaker_dunk, dubizzle, or mercari_jp' });
      return;
    }

    const ticket = createPackAlphaSellActionTicket({
      holdingId: typeof req.body?.holdingId === 'string' ? req.body.holdingId : '',
      venue: venue as 'ebay' | 'sneaker_dunk' | 'dubizzle' | 'mercari_jp',
      walletAddress: typeof req.body?.walletAddress === 'string' ? req.body.walletAddress : undefined,
      signedIn: Boolean(req.body?.signedIn)
    });
    if (!ticket) {
      res.status(404).json({ error: 'Pack Alpha sell route not found' });
      return;
    }

    res.status(201).json(ticket);
  });

  app.get('/api/pack-alpha/onchain/config', (_req, res) => {
    res.json(getPackAlphaOnchainConfig());
  });

  app.get('/api/pack-alpha/onchain/demo-flow', (req, res) => {
    const demoUsdcAddress =
      typeof req.query.demoUsdcAddress === 'string' && /^0x[a-fA-F0-9]{40}$/.test(req.query.demoUsdcAddress)
        ? req.query.demoUsdcAddress
        : null;
    res.json(getPackAlphaOnchainDemoFlow({ demoUsdcAddress }));
  });

  return app;
}
