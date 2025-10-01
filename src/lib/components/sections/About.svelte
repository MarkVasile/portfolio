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
	
	const skills = [
		'TypeScript',
		'Python',
		'Rust',
		'Ruby',
		'C#',
		'C',
		'C++',
		'Node.js',
		'React',
    'Svelte',
    'Angular',
    'VueJS',
    'MongoDB',
		'PostgreSQL',
		'Docker',
		'Kubernetes',
		'AI/ML Integration',
		'System Architecture',
		'Cloud Computing',
    'AWS',
    'GCP',
	];
	
	const currentFocus = [
		'AI-powered development tools',
		'Code awareness and intelligence',
		'Developer productivity solutions',
		'Open source contributions'
	];
	
	const currentFocusKeys = [
		'aiTools',
		'codeIntelligence',
		'productivity',
		'openSource'
	];
</script>

<section class="section" id="about">
	{#await waitLocale() then}
	<h2 class="section-title">
		{#if isReady}
			{$_('about.title')}
		{:else}
			About Me
		{/if}
	</h2>
	<p class="section-subtitle">
		{#if isReady}
			{$_('about.description')}
		{:else}
			I'm a passionate software engineer with expertise in full-stack development, AI integration, and system architecture. I love building tools that solve real-world problems and exploring new technologies.
		{/if}
	</p>
	
	<div class="about-content">
		<div class="about-text">
			<div class="skills-section">
				<h3>
					{#if isReady}
						{$_('about.skills')}
					{:else}
						Skills & Technologies
					{/if}
				</h3>
				<div class="skills-grid">
					{#each skills as skill}
						<span class="skill-tag">{skill}</span>
					{/each}
				</div>
			</div>
			
			<div class="focus-section">
				<h3>
					{#if isReady}
						{$_('about.focus')}
					{:else}
						Current Focus
					{/if}
				</h3>
				<ul class="focus-list">
					{#each currentFocus as focus, index}
						<li>
							{#if isReady}
								{$_('about.focusItems.' + currentFocusKeys[index])}
							{:else}
								{focus}
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		</div>
		
		<div class="about-visual">
			<div class="stats-grid">
				<div class="stat-item">
					<div class="stat-number">25+</div>
					<div class="stat-label">
						{#if isReady}
							{$_('about.stats.yearsExperience')}
						{:else}
							Years Experience
						{/if}
					</div>
				</div>
				<div class="stat-item">
					<div class="stat-number">50+</div>
					<div class="stat-label">
						{#if isReady}
							{$_('about.stats.projectsCompleted')}
						{:else}
							Projects Completed
						{/if}
					</div>
				</div>
				<div class="stat-item">
					<div class="stat-number">40+</div>
					<div class="stat-label">
						{#if isReady}
							{$_('about.stats.technologies')}
						{:else}
							Technologies
						{/if}
					</div>
				</div>
				<div class="stat-item">
					<div class="stat-number">3</div>
					<div class="stat-label">
						{#if isReady}
							{$_('about.stats.continents')}
						{:else}
							Continents
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
	{/await}
</section>

<style>
	.about-content {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 4rem;
		align-items: start;
	}
	
	.skills-section,
	.focus-section {
		margin-bottom: 3rem;
	}
	
	.skills-section h3,
	.focus-section h3 {
		font-size: 1.5rem;
		font-weight: 600;
		color: #000000;
		margin-bottom: 1.5rem;
	}
	
	.skills-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}
	
	.skill-tag {
		background: rgba(79, 171, 47, 0.1);
		color: #4fab2f;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 500;
		border: 1px solid rgba(79, 171, 47, 0.2);
		transition: all 0.2s ease;
	}
	
	.skill-tag:hover {
		background: rgba(79, 171, 47, 0.2);
		transform: translateY(-2px);
	}
	
	.focus-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.focus-list li {
		padding: 0.75rem 0;
		border-bottom: 1px solid #eee;
		position: relative;
		padding-left: 1.5rem;
		color: #666;
		font-size: 1.1rem;
	}
	
	.focus-list li:before {
		content: '→';
		position: absolute;
		left: 0;
		color: #4fab2f;
		font-weight: bold;
	}
	
	.focus-list li:last-child {
		border-bottom: none;
	}
	
	.stats-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}
	
	.stat-item {
		text-align: center;
		padding: 2rem 1rem;
		background: linear-gradient(135deg, rgba(79, 171, 47, 0.05) 0%, rgba(32, 115, 96, 0.05) 100%);
		border-radius: 15px;
		border: 1px solid rgba(79, 171, 47, 0.1);
		transition: all 0.3s ease;
	}
	
	.stat-item:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 25px rgba(79, 171, 47, 0.15);
	}
	
	.stat-number {
		font-size: 2.5rem;
		font-weight: 800;
		color: #4fab2f;
		margin-bottom: 0.5rem;
	}
	
	.stat-label {
		font-size: 0.9rem;
		color: #666;
		font-weight: 500;
	}
	
	@media (max-width: 768px) {
		.about-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		
		.stats-grid {
			grid-template-columns: 1fr 1fr;
			gap: 1rem;
		}
		
		.stat-item {
			padding: 1.5rem 0.5rem;
		}
		
		.stat-number {
			font-size: 2rem;
		}
		
		.skills-grid {
			justify-content: center;
		}
	}
</style>
