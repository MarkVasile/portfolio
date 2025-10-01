<script lang="ts">
	import { onMount } from 'svelte';
	import { init, locale, getLocaleFromNavigator } from 'svelte-i18n';
	import { i18nReady } from '../i18n';
	
	let isReady = $state(false);
	
	onMount(() => {
		init({
        initialLocale: getLocaleFromNavigator(), // Or a specific locale like 'en'
        fallbackLocale: 'en'
    });

		const unsubscribe = i18nReady.subscribe(ready => {
			isReady = ready;
		});
		return unsubscribe;
	});
	
	const switchLanguage = (newLocale: string) => {
		locale.set(newLocale);
	};
</script>

{#if isReady}
	<div class="language-switcher">
		<button 
			class="lang-btn" 
			class:active={$locale === 'en'}
			onclick={() => switchLanguage('en')}
			aria-label="Switch to English"
		>
			EN
		</button>
		<span class="separator">|</span>
		<button 
			class="lang-btn" 
			class:active={$locale === 'ja'}
			onclick={() => switchLanguage('ja')}
			aria-label="日本語に切り替え"
		>
			日本語
		</button>
	</div>
{/if}

<style>
	.language-switcher {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(255, 255, 255, 0.9);
		backdrop-filter: blur(10px);
		padding: 0.4rem 0.8rem;
		border-radius: 20px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}
	
	.lang-btn {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 0.9rem;
		font-weight: 500;
		color: #666;
		transition: all 0.2s ease;
		padding: 0.25rem 0.5rem;
		border-radius: 15px;
	}
	
	.lang-btn:hover {
		color: #4fab2f;
		background: rgba(79, 171, 47, 0.1);
	}
	
	.lang-btn.active {
		color: #4fab2f;
		background: rgba(79, 171, 47, 0.2);
		font-weight: 600;
	}
	
	.separator {
		color: #ccc;
		font-size: 0.8rem;
	}
	
	@media (max-width: 768px) {
		.language-switcher {
			top: 0.5rem;
			right: 0.5rem;
			padding: 0.4rem 0.8rem;
		}
		
		.lang-btn {
			font-size: 0.8rem;
		}
	}
</style>
