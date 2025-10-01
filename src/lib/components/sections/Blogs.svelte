<script lang="ts">
	import { onMount } from 'svelte';
	import { _, waitLocale } from 'svelte-i18n';
	import { i18nReady } from '../../i18n';
	
	let isReady = $state(false);
	
	onMount(() => {
		const unsubscribe = i18nReady.subscribe(ready => {
			isReady = ready;
		});
		return unsubscribe;
	});
	
	const blogPlatforms = [
		{
			name: 'Medium',
			url: 'https://medium.com/@markvasile',
			description: 'Technical articles and insights on software development',
			icon: '📝',
			color: '#00ab6c'
		},
		{
			name: 'Substack',
			url: 'https://codeawareness.substack.com',
			description: 'CodeAwareness newsletter with weekly updates',
			icon: '📰',
			color: '#ff6719'
		},
		{
			name: 'Ghost',
			url: 'https://code-awareness.ghost.io',
			description: 'In-depth technical content and tutorials',
			icon: '👻',
			color: '#15171a'
		}
	];
</script>

<section class="section" id="blogs">
	{#await waitLocale() then}
	<h2 class="section-title">
		{#if isReady}
			{$_('blogs.title')}
		{:else}
			Writing & Blog
		{/if}
	</h2>
	<p class="section-subtitle">
		{#if isReady}
			{$_('blogs.subtitle')}
		{:else}
			Follow my writing across different platforms
		{/if}
	</p>
	
	<div class="blogs-grid">
		{#each blogPlatforms as platform}
			<div class="blog-card">
				<div class="blog-header">
					<div class="blog-icon" style="background-color: {platform.color}">
						{platform.icon}
					</div>
					<h3 class="blog-name">{platform.name}</h3>
				</div>
				
				<p class="blog-description">{platform.description}</p>
				
				<div class="blog-actions">
					<a href={platform.url} target="_blank" rel="noopener noreferrer" class="blog-link">
						{#if isReady}
							{$_('blogs.readMore')}
						{:else}
							Read More
						{/if}
					</a>
				</div>
				
				<div class="blog-preview">
					{#if platform.name === 'Medium'}
						<div class="preview-content">
							<h4>
								{#if isReady}
									{$_('blogs.recentArticles')}
								{:else}
									Recent Articles
								{/if}
							</h4>
							<ul>
								<li>Software Development Best Practices</li>
								<li>AI Integration in Modern Applications</li>
								<li>Building Scalable Systems</li>
							</ul>
						</div>
					{:else if platform.name === 'Substack'}
						<div class="preview-content">
							<h4>
								{#if isReady}
									{$_('blogs.newsletterTopics')}
								{:else}
									Newsletter Topics
								{/if}
							</h4>
							<ul>
								<li>CodeAwareness Updates</li>
								<li>Developer Productivity Tips</li>
								<li>Industry Insights</li>
							</ul>
						</div>
					{:else if platform.name === 'Ghost'}
						<div class="preview-content">
							<h4>
								{#if isReady}
									{$_('blogs.technicalContent')}
								{:else}
									Technical Content
								{/if}
							</h4>
							<ul>
								<li>Deep-dive Tutorials</li>
								<li>Architecture Patterns</li>
								<li>Code Reviews & Analysis</li>
							</ul>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
	
	{/await}
</section>

<style>
	.blogs-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}
	
	.blog-card {
		background: white;
		border: 1px solid #e0e0e0;
		border-radius: 15px;
		padding: 2rem;
		transition: all 0.3s ease;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
		position: relative;
		overflow: hidden;
	}
	
	.blog-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, #4fab2f, #207360);
	}
	
	.blog-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 35px rgba(79, 171, 47, 0.15);
	}
	
	.blog-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}
	
	.blog-icon {
		width: 50px;
		height: 50px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		color: white;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
	}
	
	.blog-name {
		font-size: 1.5rem;
		font-weight: 600;
		color: #000000;
		margin: 0;
	}
	
	.blog-description {
		color: #666;
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}
	
	.blog-actions {
		margin-bottom: 1.5rem;
	}
	
	.blog-link {
		display: inline-block;
		color: #4fab2f;
		text-decoration: none;
		font-weight: 600;
		padding: 0.5rem 1rem;
		border: 2px solid #4fab2f;
		border-radius: 25px;
		transition: all 0.3s ease;
	}
	
	.blog-link:hover {
		background: #4fab2f;
		color: white;
	}
	
	.blog-preview {
		border-top: 1px solid #eee;
		padding-top: 1.5rem;
	}
	
	.preview-content h4 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #000000;
		margin-bottom: 1rem;
	}
	
	.preview-content ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.preview-content li {
		padding: 0.5rem 0;
		color: #666;
		position: relative;
		padding-left: 1.5rem;
	}
	
	.preview-content li::before {
		content: '•';
		position: absolute;
		left: 0;
		color: #4fab2f;
		font-weight: bold;
	}
	
	.blogs-cta {
		text-align: center;
		background: linear-gradient(135deg, rgba(79, 171, 47, 0.05) 0%, rgba(32, 115, 96, 0.05) 100%);
		padding: 3rem 2rem;
		border-radius: 20px;
		border: 1px solid rgba(79, 171, 47, 0.1);
	}
	
	.blogs-cta p {
		font-size: 1.2rem;
		color: #666;
		margin-bottom: 2rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}
	
	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}
	
	@media (max-width: 768px) {
		.blogs-grid {
			grid-template-columns: 1fr;
		}
		
		.blog-card {
			padding: 1.5rem;
		}
		
		.blog-header {
			flex-direction: column;
			text-align: center;
			gap: 0.5rem;
		}
		
		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}
		
		.cta-buttons .btn {
			width: 100%;
			max-width: 300px;
		}
	}
</style>
