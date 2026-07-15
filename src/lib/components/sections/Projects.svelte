<script lang="ts">
	import { _ } from 'svelte-i18n';

	// Each entry: state ('active' | 'archived') and the original delivery year are
	// kept separate so the status badge styling works and the year reads clearly.
	// `kawa: true` marks projects rebuilt from legacy code as modern demos.
	const projects = [
		{
			name: 'ListingPR',
			descriptionKey: 'listingpr',
			technologies: ['Vue 3', 'TypeScript', 'Vite', 'Node.js', 'Fastify', 'MongoDB', 'Puppeteer', 'JWT', 'Docker', 'GCP Cloud Run'],
			state: 'archived',
			year: 2013,
			url: 'https://listingpr.markvasile.org',
			image: '/listingpr.jpg',
			kawa: true
		},
		{
			name: 'Speed of light electric field simulations',
			descriptionKey: 'speedOfLight',
			technologies: ['Python', 'NumPy', 'Matplotlib', 'SciPy', 'JavaScript', 'Three.js', 'HTML5 Canvas', 'FFmpeg'],
			state: 'active',
			year: 2025,
			url: 'https://github.com/MarkVasile/speed_of_light_in_a_medium',
			image: '/speed_of_light.jpg'
		},
		{
			name: 'Hypercube coding challenge',
			descriptionKey: 'hypercube',
			technologies: ['Python', 'Node.js', 'ES Modules', 'Manim'],
			state: 'archived',
			year: 2025,
			url: 'https://github.com/MarkVasile/hypercube-xmas',
			image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_wAM4gNmin-W0ROSJkKowQ.png'
		},
		{
			name: 'Kawa Code Platform',
			descriptionKey: 'KawaCode',
			technologies: ['TypeScript', 'Rust', 'AI/ML', 'WebSocket', 'IPC'],
			state: 'active',
			year: 2019,
			url: 'https://github.com/CodeAwareness',
			image: '/kawa-code-logo-white.jpg'
		},
		{
			name: 'Mongo-Alias',
			descriptionKey: 'mongoAlias',
			technologies: ['TypeScript', 'Node.js', 'MongoDB', 'Jest', 'ESLint', 'npm'],
			state: 'active',
			year: 2020,
			url: 'https://github.com/CodeAwareness/mongo-alias',
			image: null
		},
		{
			name: 'Emacs — Code Awareness package',
			descriptionKey: 'emacsPackage',
			technologies: ['Emacs', 'Lisp'],
			state: 'active',
			year: 2020,
			url: 'https://github.com/CodeAwareness/ca.emacs',
			image: null
		},
		{
			name: 'Portfolio (this website)',
			descriptionKey: 'portfolio',
			technologies: ['SvelteKit', 'Svelte 5', 'TypeScript', 'Vite', 'svelte-i18n'],
			state: 'active',
			year: 2025,
			url: 'https://github.com/MarkVasile/portfolio',
			image: null
		},
		{
			name: 'Artist fan-club',
			descriptionKey: 'lisa',
			technologies: ['Vue 3', 'JavaScript', 'Vite', 'Node.js', 'Fastify', 'MongoDB', 'vue-i18n', 'Pinia', 'JWT'],
			state: 'archived',
			year: 2014,
			url: 'https://lisa.markvasile.org',
			image: '/lisa.jpg',
			kawa: true
		},
		{
			name: 'Japanese Mentorship Academy',
			descriptionKey: 'shibajimu-web',
			technologies: ['Vue 3', 'TypeScript', 'PrimeVue', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Stripe', 'Socket.io', 'Video.js', 'AWS S3', 'JWT'],
			state: 'archived',
			year: 2019,
			url: 'https://shibajimu-web.markvasile.org',
			image: '/shibajimu-web.jpg'
		},
		{
			name: 'Japanese Mentorship Academy — admin dashboard',
			descriptionKey: 'shibajimu-dash',
			technologies: ['Vue 3', 'PrimeVue', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Passport.js', 'JWT', 'Socket.io', 'AWS S3', 'SASS'],
			state: 'archived',
			year: 2016,
			url: 'https://shibajimu-dash.markvasile.org',
			image: '/shibajimu-dash.jpg'
		},
		{
			name: 'Kanji Multi-Touch',
			descriptionKey: 'kanji-multitouch',
			technologies: ['Ionic', 'Angular', 'Cordova', 'TypeScript', 'RxJS', 'SQLite', 'iOS'],
			state: 'archived',
			year: 2016,
			url: 'https://www.youtube.com/shorts/AaBOtCxChaA',
			image: 'https://img.youtube.com/vi/AaBOtCxChaA/maxresdefault.jpg'
		},
		{
			name: 'CliqueInStyle wedding planner',
			descriptionKey: 'clique-in-style',
			technologies: ['Vue 3', 'TypeScript', 'Vite', 'PrimeVue', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Stripe', 'ONNX', 'IMG.LY', 'GCS'],
			state: 'archived',
			year: 2022,
			url: 'https://cns.markvasile.org',
			image: '/cns2.jpg',
			kawa: true
		},
		{
			name: 'Champ Forge',
			descriptionKey: 'champforge',
			technologies: ['Svelte 5', 'TypeScript', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Docker'],
			state: 'archived',
			year: 2017,
			url: 'https://champforge.markvasile.org',
			image: '/champforge.jpg',
			kawa: true
		},
		{
			name: 'Bitli',
			descriptionKey: 'bitli',
			technologies: ['Vue 3', 'TypeScript', 'Vite', 'Node.js', 'Fastify', 'MongoDB', 'Three.js', 'Pinia', 'JWT', 'Docker', 'GCP Cloud Run'],
			state: 'archived',
			year: 2011,
			url: 'https://bitli.markvasile.org',
			image: '/bitli.jpg',
			kawa: true
		},
		{
			name: 'PuddleJump',
			descriptionKey: 'puddlejump',
			technologies: ['Angular', 'TypeScript', 'Node.js', 'Fastify', 'MongoDB', 'Angular Material', 'Canvas 2D', 'AWS S3', 'SCSS', 'Docker'],
			state: 'archived',
			year: 2017,
			url: 'https://puddle.markvasile.org',
			image: '/puddlejump.jpg',
			kawa: true
		},
		{
			name: 'Colibri Reporting',
			descriptionKey: 'colibri',
			technologies: ['Vue 3', 'TypeScript', 'Vite', 'Node.js', 'Fastify', 'MongoDB', 'SQL', 'Puppeteer', 'Pinia', 'JWT', 'GCP Cloud Run'],
			state: 'archived',
			year: 2012,
			url: 'https://colibri.markvasile.org',
			image: '/colibri.jpg',
			kawa: true
		}
	];

	const initials = (name: string) =>
		name
			.replace(/[^A-Za-z0-9 ]/g, ' ')
			.split(/\s+/)
			.filter(Boolean)
			.slice(0, 2)
			.map((w) => w[0].toUpperCase())
			.join('');

	const scrollToContact = () => {
		document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<section class="section" id="projects">
	<h2 class="section-title">{$_('projects.title')}</h2>
	<p class="section-subtitle">{$_('projects.subtitle')}</p>

	<div class="projects-grid">
		{#each projects as project}
			<div class="project-card" class:archived={project.state === 'archived'}>
				{#if project.image}
					<div class="project-image">
						<img src={project.image} alt={project.name} loading="lazy" />
					</div>
				{:else}
					<div class="project-placeholder">
						<span class="placeholder-monogram">{initials(project.name)}</span>
					</div>
				{/if}

				<div class="project-content">
					<div class="project-header">
						<h3 class="project-name">{project.name}</h3>
						<span class="project-status" class:active={project.state === 'active'} class:archived={project.state === 'archived'}>
							{project.state === 'active' ? $_('projects.active') : $_('projects.archived')}
						</span>
					</div>

					<div class="project-year">
						{project.state === 'active'
							? `${$_('projects.since')} ${project.year}`
							: `${$_('projects.delivered')} ${project.year}`}
					</div>

					<p class="project-description">
						{$_('projects.descriptions.' + project.descriptionKey)}
					</p>

					{#if project.kawa}
						<div class="project-kawa">
							<span>{$_('projects.kawaRebuilt')}</span>
						</div>
					{/if}

					<div class="project-technologies">
						{#each project.technologies as tech}
							<span class="tech-tag">{tech}</span>
						{/each}
					</div>

					<div class="project-actions">
						{#if project.url}
							<a href={project.url} target="_blank" rel="noopener noreferrer" class="project-link">
								{$_('projects.viewProject')}
							</a>
						{:else}
							<span class="project-coming-soon">{$_('projects.comingSoon')}</span>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="projects-cta">
		<h3>{$_('projects.collaborationTitle')}</h3>
		<p>{$_('projects.collaborationDescription')}</p>
		<button class="btn" onclick={scrollToContact}>{$_('projects.getInTouch')}</button>
	</div>
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

	.project-card.archived {
		opacity: 0.92;
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

	.placeholder-monogram {
		font-size: 3rem;
		font-weight: 800;
		letter-spacing: 0.05em;
		color: rgba(32, 115, 96, 0.55);
	}

	.project-content {
		padding: 2rem;
	}

	.project-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.35rem;
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

	.project-status.archived {
		background: rgba(32, 115, 96, 0.08);
		color: #207360;
	}

	.project-year {
		font-size: 0.85rem;
		color: #888;
		margin-bottom: 1rem;
	}

	.project-description {
		color: #666;
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}

	.project-kawa {
		background: rgba(79, 171, 47, 0.08);
		border: 1px solid rgba(79, 171, 47, 0.2);
		border-radius: 10px;
		padding: 0.6rem 0.85rem;
		margin-bottom: 1.5rem;
		font-size: 0.85rem;
		line-height: 1.4;
		color: #207360;
		font-weight: 500;
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
		color: #888;
		font-weight: 500;
		font-style: italic;
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
		max-width: 640px;
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
