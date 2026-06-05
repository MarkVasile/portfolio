<script lang="ts">
	import { onMount } from 'svelte';
	import { _, waitLocale } from 'svelte-i18n';
	import { i18nReady } from '../../i18n';
	
	let isReady = false;
	
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
	
	// Fallback text
	const heroText = {
		title: 'Mark Vasile',
		subtitle: 'Software Engineer',
		description: 'Building innovative solutions and exploring the intersection of technology and creativity.',
		cta: 'Explore My Work',
		contact: 'Contact'
	};
</script>

<section class="hero" id="hero">
	{#await waitLocale() then}
	<div class="hero-container">
		<div class="hero-content">
			<h1 class="hero-title">
				{#if isReady}
					{$_('hero.title')}
				{:else}
					{heroText.title}
				{/if}
			</h1>
			<h2 class="hero-subtitle">
				{#if isReady}
					{$_('hero.subtitle')}
				{:else}
					{heroText.subtitle}
				{/if}
			</h2>
			<p class="hero-description">
				{#if isReady}
					{$_('hero.description')}
				{:else}
					{heroText.description}
				{/if}
			</p>
			
			<div class="hero-actions">
				<button class="btn" on:click={() => scrollToSection('projects')}>
					{#if isReady}
						{$_('hero.cta')}
					{:else}
						{heroText.cta}
					{/if}
				</button>
				<button class="btn btn-secondary" on:click={() => scrollToSection('contact')}>
					{#if isReady}
						{$_('contact.title')}
					{:else}
						{heroText.contact}
					{/if}
				</button>
			</div>
		</div>
		
		<div class="hero-visual">
			<div class="hero-photo-wrap">
        <img class="hero-photo" src="/me-at-starbucks.jpg" alt="Mark Vasile" />
			</div>
		</div>
	</div>
	{/await}
	<div class="scroll-indicator">
		<div class="scroll-arrow"></div>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
		position: relative;
		padding: 2rem;
	}
	
	.hero-container {
		max-width: 1200px;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}
	
	.hero-content {
		text-align: left;
	}
	
	.hero-title {
		font-size: 3.5rem;
		font-weight: 800;
		color: #000000;
		margin: 0 0 0.5rem 0;
		line-height: 1.1;
	}
	
	.hero-subtitle {
		font-size: 1.5rem;
		font-weight: 600;
		color: #4fab2f;
		margin: 0 0 1.5rem 0;
	}
	
	.hero-description {
		font-size: 1.2rem;
		color: #666;
		margin: 0 0 2.5rem 0;
		line-height: 1.6;
		max-width: 500px;
	}
	
	.hero-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}
	
	.hero-visual {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hero-photo-wrap {
		position: relative;
		width: 100%;
		max-width: 460px;
		/* room for the card to hang below the photo edge */
		margin-bottom: 1.5rem;
	}

	.hero-photo {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		border-radius: 16px;
		box-shadow: 0 20px 45px rgba(0, 0, 0, 0.28);
	}

	.code-block {
		position: absolute;
		left: 50%;
		bottom: -1.5rem;
		transform: translateX(-50%);
		width: 88%;
		box-sizing: border-box;
		background: rgba(10, 10, 10, 0.82);
		-webkit-backdrop-filter: blur(6px);
		backdrop-filter: blur(6px);
		border-radius: 12px;
		padding: 1.5rem;
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
		font-size: 0.95rem;
		line-height: 1.8;
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
		border: 1px solid rgba(255, 255, 255, 0.12);
	}
	
	.code-line {
		margin-bottom: 0.5rem;
	}
	
	.keyword {
		color: #ff6b6b;
		font-weight: bold;
	}
	
	.variable {
		color: #4ecdc4;
	}
	
	.operator {
		color: #ffe66d;
	}
	
	.string {
		color: #95e1d3;
	}
	
	.function {
		color: #a8e6cf;
	}
	
	.scroll-indicator {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		animation: bounce 2s infinite;
	}
	
	.scroll-arrow {
		width: 20px;
		height: 20px;
		border-right: 2px solid #4fab2f;
		border-bottom: 2px solid #4fab2f;
		transform: rotate(45deg);
	}
	
	@keyframes bounce {
		0%, 20%, 50%, 80%, 100% {
			transform: translateX(-50%) translateY(0);
		}
		40% {
			transform: translateX(-50%) translateY(-10px);
		}
		60% {
			transform: translateX(-50%) translateY(-5px);
		}
	}
	
	@media (max-width: 768px) {
		.hero-container {
			grid-template-columns: 1fr;
			gap: 2rem;
			text-align: center;
		}
		
		.hero-title {
			font-size: 2.5rem;
		}
		
		.hero-subtitle {
			font-size: 1.2rem;
		}
		
		.hero-description {
			font-size: 1rem;
		}
		
		.hero-actions {
			justify-content: center;
		}
		
		.code-block {
			padding: 1.5rem;
			font-size: 0.9rem;
		}
	}
</style>
