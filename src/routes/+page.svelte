<script lang="ts">
	import { onMount } from 'svelte';
	import { _, waitLocale } from 'svelte-i18n';
	import { initializeI18n } from '../lib/i18n';
	import Hero from '$lib/components/sections/Hero.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Blogs from '$lib/components/sections/Blogs.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	
	onMount(async () => {
		// Ensure i18n is initialized
		await waitLocale();
		await initializeI18n();
	});
</script>

<svelte:head>
	<title>Mark Vasile - Software Engineer</title>
</svelte:head>

<Navigation />
<main>
	<Hero />
	<About />
	<Projects />
	<Blogs />
	<Contact />
</main>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
	
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		line-height: 1.6;
		color: #000000;
		background: #ffffff;
	}
	
	main {
		position: relative;
	}
	
	:global(.section) {
		padding: 4rem 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}
	
	:global(.section-title) {
		font-size: 2.5rem;
		font-weight: 700;
		color: #000000;
		margin-bottom: 2rem;
		text-align: center;
	}
	
	:global(.section-subtitle) {
		font-size: 1.2rem;
		color: #666;
		text-align: center;
		margin-bottom: 3rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}
	
	:global(.btn) {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background: #4fab2f;
		color: white;
		text-decoration: none;
		border-radius: 25px;
		font-weight: 600;
		transition: all 0.3s ease;
		border: none;
		cursor: pointer;
		font-size: 1rem;
	}
	
	:global(.btn:hover) {
		background: #207360;
		transform: translateY(-2px);
		box-shadow: 0 4px 15px rgba(79, 171, 47, 0.3);
	}
	
	:global(.btn-secondary) {
		background: transparent;
		color: #4fab2f;
		border: 2px solid #4fab2f;
	}
	
	:global(.btn-secondary:hover) {
		background: #4fab2f;
		color: white;
	}
	
	@media (max-width: 768px) {
		:global(.section) {
			padding: 2rem 1rem;
		}
		
		:global(.section-title) {
			font-size: 2rem;
		}
		
		:global(.section-subtitle) {
			font-size: 1rem;
		}
	}
</style>