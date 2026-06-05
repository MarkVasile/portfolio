import { browser } from '$app/environment';
import { init, register, waitLocale, locale } from 'svelte-i18n';
import { writable } from 'svelte/store';

const defaultLocale = 'en';
const supportedLocales = ['en', 'ja'];
const STORAGE_KEY = 'preferred-locale';

register('en', () => import('./locales/en.json'));
register('ja', () => import('./locales/ja.json'));

// Decide which language to show: a previously saved manual choice wins,
// otherwise fall back to the browser's preferred languages, then to English.
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

// Create a store to track if i18n is ready
export const i18nReady = writable(false);

// Wait for the initial locale to be loaded
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
