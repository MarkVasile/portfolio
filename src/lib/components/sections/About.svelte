<script lang="ts">
	import { _ } from 'svelte-i18n';

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
		'GCP'
	];

	const currentFocusKeys = ['aiTools', 'codeIntelligence', 'productivity', 'openSource'];

	const aiPrincipleKeys = ['intent', 'rootCause', 'commits', 'multiRepo'];

	// Concrete, verifiable figures rather than vanity metrics. Each is defensible
	// from the record on this page (patents, delivered systems, industries served).
	const stats = [
		{ number: '25+', labelKey: 'yearsExperience' },
		{ number: '2', labelKey: 'patents' },
		{ number: '15+', labelKey: 'systemsDelivered' },
		{ number: '6', labelKey: 'industries' }
	];
</script>

<section class="section" id="about">
	<h2 class="section-title">{$_('about.title')}</h2>
	<p class="section-subtitle">{$_('about.description')}</p>

	<div class="about-content">
		<div class="about-text">
			<div class="skills-section">
				<h3>{$_('about.skills')}</h3>
				<div class="skills-grid">
					{#each skills as skill}
						<span class="skill-tag">{skill}</span>
					{/each}
				</div>
			</div>

			<div class="focus-section">
				<h3>{$_('about.focus')}</h3>
				<ul class="focus-list">
					{#each currentFocusKeys as key}
						<li>{$_('about.focusItems.' + key)}</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="about-visual">
			<div class="stats-grid">
				{#each stats as stat}
					<div class="stat-item">
						<div class="stat-number">{stat.number}</div>
						<div class="stat-label">{$_('about.stats.' + stat.labelKey)}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="ai-workflow">
		<h3>{$_('about.aiWorkflow.title')}</h3>
		<p class="ai-workflow-lead">{$_('about.aiWorkflow.description')}</p>
		<ul class="ai-principles">
			{#each aiPrincipleKeys as key}
				<li>{$_('about.aiWorkflow.principles.' + key)}</li>
			{/each}
		</ul>
	</div>
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

	.ai-workflow {
		margin-top: 4rem;
		padding: 2.5rem;
		background: linear-gradient(135deg, rgba(79, 171, 47, 0.05) 0%, rgba(32, 115, 96, 0.05) 100%);
		border-radius: 15px;
		border: 1px solid rgba(79, 171, 47, 0.1);
	}

	.ai-workflow h3 {
		font-size: 1.5rem;
		font-weight: 600;
		color: #000000;
		margin: 0 0 1rem;
	}

	.ai-workflow-lead {
		color: #444;
		font-size: 1.1rem;
		line-height: 1.7;
		margin: 0 0 2rem;
		max-width: 70ch;
	}

	.ai-principles {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem 2rem;
	}

	.ai-principles li {
		position: relative;
		padding-left: 1.5rem;
		color: #666;
		font-size: 1.05rem;
	}

	.ai-principles li:before {
		content: '→';
		position: absolute;
		left: 0;
		color: #4fab2f;
		font-weight: bold;
	}

	@media (max-width: 768px) {
		.about-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.ai-workflow {
			padding: 1.5rem;
			margin-top: 2.5rem;
		}

		.ai-principles {
			grid-template-columns: 1fr;
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
