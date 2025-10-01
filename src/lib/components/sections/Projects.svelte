<script lang="ts">
	import { onMount } from 'svelte';
	import { _, locale, waitLocale } from 'svelte-i18n';
	import { i18nReady } from '../../i18n';
	
	let isReady = $state(false);
	
	onMount(() => {
		const unsubscribe = i18nReady.subscribe(ready => {
			isReady = ready;
		});
		return unsubscribe;
	});
	
	let showAllProjects = $state(false);
	
	// This will be easily editable for future projects
	const toyProjects = [
		{
			name: 'Speed of light electric field simulations',
			description: 'A project to simulate the speed of light electric field',
			descriptionKey: 'speedOfLight',
			technologies: ['Python', 'Javascript'],
			status: 'active',
			url: 'https://github.com/MarkVasile/speed_of_light_in_a_medium',
			image: '/speed_of_light.jpg'
		},
		{
			name: 'Hypercube coding challenge',
			description: 'Count the number of times the word XMAS shows up in any direction in a multi-dimensional hypercube',
			descriptionKey: 'hypercube',
			technologies: ['Javascript', 'Python'],
			status: 'active',
			url: 'https://github.com/MarkVasile/hypercube-xmas',
			image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_wAM4gNmin-W0ROSJkKowQ.png',
		},
		{
			name: 'CodeAwareness Platform',
			description: 'AI-powered development environment that provides intelligent code insights and context-aware assistance.',
			descriptionKey: 'codeAwareness',
			technologies: ['TypeScript', 'Rust', 'AI/ML', 'WebSocket'],
			status: 'active',
			url: 'https://github.com/CodeAwareness',
			image: '/codeawareness.jpg'
		},
		{
			name: 'Mongo-Alias',
			description: 'A lightweight aliasing layer on top of mongodb node driver',
			descriptionKey: 'mongoAlias',
			technologies: ['Node.js', 'MongoDB', 'TypeScript'],
			status: 'active',
			url: 'https://github.com/CodeAwareness/mongo-alias',
			image: null
		},
		{
			name: 'Emacs - Code Awareness package',
			description: 'Emacs package for Code Awareness',
			descriptionKey: 'emacsPackage',
			technologies: ['Emacs', 'Lisp'],
			status: 'active',
			url: 'https://github.com/CodeAwareness/ca.emacs',
			image: null
		},
		{
			name: 'Portfolio (this website)',
			description: 'My portfolio website',
			descriptionKey: 'portfolio',
			technologies: ['Svelte', 'SvelteKit', 'TailwindCSS'],
			status: 'active',
			url: 'https://github.com/MarkVasile/portfolio',
			image: null
		},
	];
	
	let visibleProjects = $derived(showAllProjects ? toyProjects : toyProjects.slice(0, 3));
	
	const toggleProjects = () => {
		showAllProjects = !showAllProjects;
	};
</script>

<section class="section" id="projects">
	{#await waitLocale() then}
	<h2 class="section-title">
		{#if isReady}
			{$_('projects.title')}
		{:else}
			Toy Projects
		{/if}
	</h2>
	<p class="section-subtitle">Experimental projects and creative coding experiments</p>
	
	<div class="projects-grid">
		{#each visibleProjects as project}
			<div class="project-card" class:planned={project.status === 'planned'}>
				{#if project.image}
					<div class="project-image">
						<img src={project.image} alt={project.name} />
					</div>
				{:else}
					<div class="project-placeholder">
						<div class="placeholder-icon">🚀</div>
					</div>
				{/if}
				
				<div class="project-content">
					<div class="project-header">
						<h3 class="project-name">{project.name}</h3>
						<span class="project-status" class:active={project.status === 'active'} class:planned={project.status === 'planned'}>
							{project.status === 'active' ? 'Active' : 'Planned'}
						</span>
					</div>
					
					<p class="project-description">
						{$_('projects.descriptions.' + project.descriptionKey)}
					</p>
					
					<div class="project-technologies">
						{#each project.technologies as tech}
							<span class="tech-tag">{tech}</span>
						{/each}
					</div>
					
					<div class="project-actions">
						{#if project.url}
							<a href={project.url} target="_blank" rel="noopener noreferrer" class="project-link">
								View Project
							</a>
						{:else}
							<span class="project-coming-soon">
								Coming Soon
							</span>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
	
	{#if toyProjects.length > 3}
		<div class="projects-toggle">
			<button class="btn btn-secondary" onclick={toggleProjects}>
				{showAllProjects ? 'Show Less' : `Show All ${toyProjects.length} Projects`}
			</button>
		</div>
	{/if}
	
	<div class="projects-cta">
		<h3>
			{#if isReady}
				{$_('projects.collaborationTitle')}
			{:else}
				Interested in Collaboration?
			{/if}
		</h3>
		<p>
			{#if isReady}
				{$_('projects.collaborationDescription')}
			{:else}
				I'm always excited to work on new projects and explore innovative ideas. Let's build something amazing together!
			{/if}
		</p>
		<button class="btn" onclick={() => {
			const contactSection = document.getElementById('contact');
			if (contactSection) {
				contactSection.scrollIntoView({ behavior: 'smooth' });
			}
		}}>
			{#if isReady}
				{$_('projects.getInTouch')}
			{:else}
				Get In Touch
			{/if}
		</button>
	</div>
	{/await}
</section>

<style>
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}
	
	.project-card {
		background: white;
		border: 1px solid #e0e0e0;
		border-radius: 15px;
		overflow: hidden;
		transition: all 0.3s ease;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
	}
	
	.project-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 35px rgba(79, 171, 47, 0.15);
	}
	
	.project-card.planned {
		opacity: 0.7;
	}
	
	.project-image {
		height: 200px;
		overflow: hidden;
	}
	
	.project-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.project-placeholder {
		height: 200px;
		background: linear-gradient(135deg, rgba(79, 171, 47, 0.1) 0%, rgba(32, 115, 96, 0.1) 100%);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.placeholder-icon {
		font-size: 3rem;
		opacity: 0.5;
	}
	
	.project-content {
		padding: 2rem;
	}
	
	.project-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
		gap: 1rem;
	}
	
	.project-name {
		font-size: 1.4rem;
		font-weight: 600;
		color: #000000;
		margin: 0;
		flex: 1;
	}
	
	.project-status {
		padding: 0.25rem 0.75rem;
		border-radius: 15px;
		font-size: 0.8rem;
		font-weight: 500;
		white-space: nowrap;
	}
	
	.project-status.active {
		background: rgba(79, 171, 47, 0.1);
		color: #4fab2f;
	}
	
	.project-status.planned {
		background: rgba(255, 193, 7, 0.1);
		color: #ffc107;
	}
	
	.project-description {
		color: #666;
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}
	
	.project-technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}
	
	.tech-tag {
		background: rgba(79, 171, 47, 0.1);
		color: #4fab2f;
		padding: 0.25rem 0.75rem;
		border-radius: 15px;
		font-size: 0.8rem;
		font-weight: 500;
		border: 1px solid rgba(79, 171, 47, 0.2);
	}
	
	.project-actions {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.project-link {
		color: #4fab2f;
		text-decoration: none;
		font-weight: 600;
		padding: 0.5rem 1rem;
		border: 2px solid #4fab2f;
		border-radius: 25px;
		transition: all 0.3s ease;
	}
	
	.project-link:hover {
		background: #4fab2f;
		color: white;
	}
	
	.project-coming-soon {
		color: #ffc107;
		font-weight: 500;
		font-style: italic;
	}
	
	.projects-toggle {
		text-align: center;
		margin-bottom: 3rem;
	}
	
	.projects-cta {
		text-align: center;
		background: linear-gradient(135deg, rgba(79, 171, 47, 0.05) 0%, rgba(32, 115, 96, 0.05) 100%);
		padding: 3rem 2rem;
		border-radius: 20px;
		border: 1px solid rgba(79, 171, 47, 0.1);
	}
	
	.projects-cta h3 {
		font-size: 1.8rem;
		font-weight: 600;
		color: #000000;
		margin-bottom: 1rem;
	}
	
	.projects-cta p {
		font-size: 1.1rem;
		color: #666;
		margin-bottom: 2rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}
	
	@media (max-width: 768px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
		
		.project-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}
		
		.project-content {
			padding: 1.5rem;
		}
		
		.project-image,
		.project-placeholder {
			height: 150px;
		}
	}
</style>
