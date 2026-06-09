import { createApp } from './app.js';

const port = Number(process.env.PORT ?? 3000);

createApp().listen(port, () => {
  console.log(`Pack Alpha public demo listening on http://localhost:${port}`);
});
