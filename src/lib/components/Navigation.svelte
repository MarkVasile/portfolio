<script lang="ts">
	import { onMount } from 'svelte';
	import { _, waitLocale } from 'svelte-i18n';
	import { i18nReady } from '../i18n';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	
	let isReady = $state(false);
	
	onMount(() => {
		const unsubscribe = i18nReady.subscribe(ready => {
			isReady = ready;
		});
		return unsubscribe;
	});
	
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
	
	// Navigation text with fallbacks
	const navText = {
		about: 'About',
		github: 'GitHub', 
		blogs: 'Blogs',
		projects: 'Projects',
		contact: 'Contact'
	};
</script>

<nav class="navigation">
	<div class="nav-container">
		<div class="logo">
			<img src="/codeawareness.jpg" alt="CodeAwareness Logo" />
			<span>Mark Vasile</span>
		</div>
		
		{#await waitLocale() then}
		<div class="nav-links">
			<button onclick={() => scrollToSection('about')} class="nav-link">
				{#if isReady}
					{$_('navigation.about')}
				{:else}
					{navText.about}
				{/if}
			</button>
			<button onclick={() => scrollToSection('blogs')} class="nav-link">
				{#if isReady}
					{$_('navigation.blogs')}
				{:else}
					{navText.blogs}
				{/if}
			</button>
			<button onclick={() => scrollToSection('projects')} class="nav-link">
				{#if isReady}
					{$_('navigation.projects')}
				{:else}
					{navText.projects}
				{/if}
			</button>
			<button onclick={() => scrollToSection('contact')} class="nav-link">
				{#if isReady}
					{$_('navigation.contact')}
				{:else}
					{navText.contact}
				{/if}
			</button>
		</div>
		{/await}
		
		<div class="nav-right">
			<LanguageSwitcher />
			<button class="mobile-menu-btn" aria-label="Toggle menu">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	</div>
</nav>

<style>
	.navigation {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		z-index: 1000;
		border-bottom: 1px solid rgba(79, 171, 47, 0.1);
	}
	
	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 700;
		font-size: 1.2rem;
		color: #000000;
	}
	
	.logo img {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		object-fit: cover;
	}
	
	.nav-links {
		display: flex;
		gap: 2rem;
		align-items: center;
	}
	
	.nav-link {
		background: none;
		border: none;
		color: #666;
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
		transition: color 0.2s ease;
		padding: 0.5rem 0;
	}
	
	.nav-link:hover {
		color: #4fab2f;
	}
	
	.nav-right {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	
	.mobile-menu-btn {
		display: none;
		flex-direction: column;
		gap: 4px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
	}
	
	.mobile-menu-btn span {
		width: 25px;
		height: 3px;
		background: #4fab2f;
		transition: all 0.3s ease;
	}
	
	@media (max-width: 768px) {
		.nav-container {
			padding: 1rem;
		}
		
		.nav-links {
			display: none;
		}
		
		.nav-right {
			gap: 0.5rem;
		}
		
		.mobile-menu-btn {
			display: flex;
		}
		
		.logo span {
			display: none;
		}
	}
</style>
