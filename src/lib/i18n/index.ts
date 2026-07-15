import { browser } from '$app/environment';
import { init, addMessages, waitLocale, locale } from 'svelte-i18n';
import { writable } from 'svelte/store';
import en from './locales/en.json';
import ja from './locales/ja.json';

const defaultLocale = 'en';
const supportedLocales = ['en', 'ja'];
const STORAGE_KEY = 'preferred-locale';

// Bundle both dictionaries synchronously so translations are available during
// server-side prerendering (crawlable HTML) and on first client paint, with no
// async loading flash. The catalogs are small, so the bundle cost is negligible.
addMessages('en', en);
addMessages('ja', ja);

// Decide which language to show: a previously saved manual choice wins,
// otherwise fall back to the browser's preferred languages, then to English.
// On the server (prerender) there is no browser, so we always emit English.
function detectLocale(): string {
	if (!browser) return defaultLocale;

	const saved = localStorage.getItem(STORAGE_KEY);
	if (saved && supportedLocales.includes(saved)) return saved;

	const candidates = navigator.languages?.length ? navigator.languages : [navigator.language];
	for (const lang of candidates) {
		const base = lang.toLowerCase().split('-')[0];
		if (supportedLocales.includes(base)) return base;
	}

	return defaultLocale;
}

init({
	fallbackLocale: defaultLocale,
	initialLocale: detectLocale()
});

// Keep the <html lang> attribute in sync for SEO and accessibility.
if (browser) {
	locale.subscribe((value) => {
		if (value) document.documentElement.lang = value;
	});
}

// Retained for backwards compatibility with components that gate on readiness.
// With synchronous message loading the catalog is ready immediately, so this
// starts true and never needs to flip.
export const i18nReady = writable(true);

// Messages are loaded synchronously, but keep the async signature so callers
// awaiting readiness continue to work.
export const initializeI18n = async () => {
	await waitLocale();
	i18nReady.set(true);
};

// Switch language and remember the choice so detection respects it next visit.
export function setLocale(newLocale: string) {
	if (!supportedLocales.includes(newLocale)) return;
	if (browser) localStorage.setItem(STORAGE_KEY, newLocale);
	locale.set(newLocale);
}
