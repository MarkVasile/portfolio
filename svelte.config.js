import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// No SPA fallback: every route is prerendered to real HTML so the
			// site is crawlable and produces link previews on a plain fetch.
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

export default config;
