import { browser } from '$app/environment';
import { init, register, waitLocale, locale } from 'svelte-i18n';
import { writable } from 'svelte/store';

const defaultLocale = 'en';

register('en', () => import('./locales/en.json'));
register('ja', () => import('./locales/ja.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? (window.navigator.language.startsWith('ja') ? 'ja' : 'en') : defaultLocale,
});

// Create a store to track if i18n is ready
export const i18nReady = writable(false);

// Wait for the initial locale to be loaded
export const initializeI18n = async () => {
	await waitLocale();
	i18nReady.set(true);
};
