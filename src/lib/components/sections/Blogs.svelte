<script lang="ts">
	import { _ } from 'svelte-i18n';

	const blogPlatforms = [
		{
			name: 'Medium',
			url: 'https://medium.com/@markvasile',
			descriptionKey: 'medium',
			icon: '📝',
			color: '#00ab6c'
		},
		{
			name: 'Substack',
			url: 'https://codeawareness.substack.com',
			descriptionKey: 'substack',
			icon: '📰',
			color: '#ff6719'
		},
		{
			name: 'Ghost',
			url: 'https://code-awareness.ghost.io',
			descriptionKey: 'ghost',
			icon: '👻',
			color: '#15171a'
		}
	];
</script>

<section class="section" id="blogs">
	<h2 class="section-title">{$_('blogs.title')}</h2>
	<p class="section-subtitle">{$_('blogs.subtitle')}</p>

	<div class="blogs-grid">
		{#each blogPlatforms as platform}
			<div class="blog-card">
				<div class="blog-header">
					<div class="blog-icon" style="background-color: {platform.color}">
						{platform.icon}
					</div>
					<h3 class="blog-name">{platform.name}</h3>
				</div>

				<p class="blog-description">{$_('blogs.descriptions.' + platform.descriptionKey)}</p>

				<div class="blog-actions">
					<a href={platform.url} target="_blank" rel="noopener noreferrer" class="blog-link">
						{$_('blogs.readMore')}
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.blogs-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 1rem;
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
		margin-bottom: 0;
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
	}
</style>
