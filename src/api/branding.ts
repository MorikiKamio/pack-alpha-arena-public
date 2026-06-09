export const PACK_ALPHA_LOGO_PATH = '/assets/pack-alpha-icon.png';

export function renderFaviconLinks() {
  return `
      <link rel="icon" type="image/png" href="${PACK_ALPHA_LOGO_PATH}" />
      <link rel="apple-touch-icon" href="${PACK_ALPHA_LOGO_PATH}" />
  `;
}
