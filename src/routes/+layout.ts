// Prerender the site to static HTML at build time. This emits real, crawlable
// markup (not an empty SPA shell), so search engines and link-preview bots see
// the actual content and metadata on a plain fetch. Client-side hydration and
// locale switching still work as before.
export const prerender = true;
export const ssr = true;
