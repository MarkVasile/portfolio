<script lang="ts">
	import { onMount } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { initializeI18n } from '../lib/i18n';

	let { children } = $props();
	
	onMount(async () => {
		// Initialize i18n and wait for locale to be ready
		await initializeI18n();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
