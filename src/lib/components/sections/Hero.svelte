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
			<div class="code-block">
				<div class="code-line">
					<span class="keyword">const</span> 
					<span class="variable">developer</span> 
					<span class="operator">=</span> 
					<span class="string">'Mark Vasile'</span>;
				</div>
				<div class="code-line">
					<span class="keyword">const</span> 
					<span class="variable">passion</span> 
					<span class="operator">=</span> 
					<span class="string">'Work better with people'</span>;
				</div>
				<div class="code-line">
					<span class="keyword">const</span> 
					<span class="variable">mission</span> 
					<span class="operator">=</span> 
					<span class="function">solveProblems</span><span class="variable">(passion)</span>;
				</div>
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
	
	.code-block {
		background: #000000;
		border-radius: 10px;
		padding: 2rem;
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
		font-size: 1rem;
		line-height: 1.8;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
		border: 1px solid #333;
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
