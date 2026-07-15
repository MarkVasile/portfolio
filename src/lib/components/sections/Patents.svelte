<script lang="ts">
	import { _ } from 'svelte-i18n';

	const patents = [
		{
			flag: '🇺🇸',
			office: 'United States Patent & Trademark Office',
			number: 'US 10,454,599 B2',
			titleKey: 'emfDesign',
			roleKey: 'coInventor',
			grantDateKey: 'usGrant',
			relevanceKey: 'emfRelevance',
			links: [
				{ label: 'Google Patents', url: 'https://patents.google.com/patent/US10454599B2/en' }
			]
		},
		{
			flag: '🇯🇵',
			office: 'Japan Patent Office (特許庁)',
			number: 'JP 7150002 B2',
			titleKey: 'devSupport',
			roleKey: 'inventor',
			grantDateKey: 'jpGrant',
			relevanceKey: 'devRelevance',
			links: [
				{ label: 'J-PlatPat', url: 'https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2020-219816/10/ja' },
				{ label: 'English translation', url: 'https://patents.google.com/patent/JP2022104700A/en' }
			]
		}
	];
</script>

<section class="section" id="patents">
	<h2 class="section-title">{$_('patents.title')}</h2>
	<p class="section-subtitle">{$_('patents.subtitle')}</p>

	<div class="patents-grid">
		{#each patents as patent}
			<article class="patent-card">
				<div class="patent-header">
					<span class="patent-flag" aria-hidden="true">{patent.flag}</span>
					<div class="patent-meta">
						<span class="patent-number">{patent.number}</span>
						<span class="patent-office">{patent.office}</span>
					</div>
				</div>

				<h3 class="patent-title">{$_('patents.items.' + patent.titleKey)}</h3>

				<p class="patent-relevance">{$_('patents.relevance.' + patent.relevanceKey)}</p>

				<div class="patent-badges">
					<span class="patent-badge role">{$_('patents.roles.' + patent.roleKey)}</span>
					<span class="patent-badge date">{$_('patents.grants.' + patent.grantDateKey)}</span>
				</div>

				<div class="patent-links">
					{#each patent.links as link}
						<a href={link.url} target="_blank" rel="noopener noreferrer" class="patent-link">
							{link.label} ↗
						</a>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	.patents-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 2rem;
		max-width: 900px;
		margin: 0 auto;
	}

	.patent-card {
		background: linear-gradient(135deg, rgba(79, 171, 47, 0.05) 0%, rgba(32, 115, 96, 0.05) 100%);
		border: 1px solid rgba(79, 171, 47, 0.15);
		border-radius: 15px;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		transition: all 0.3s ease;
	}

	.patent-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 25px rgba(79, 171, 47, 0.15);
		border-color: rgba(79, 171, 47, 0.3);
	}

	.patent-header {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.patent-flag {
		font-size: 2.25rem;
		line-height: 1;
	}

	.patent-meta {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.patent-number {
		font-weight: 700;
		font-size: 1.1rem;
		color: #207360;
		letter-spacing: 0.02em;
	}

	.patent-office {
		font-size: 0.85rem;
		color: #666;
	}

	.patent-title {
		font-size: 1.15rem;
		font-weight: 600;
		color: #000;
		margin: 0;
		line-height: 1.4;
	}

	.patent-relevance {
		font-size: 0.92rem;
		color: #555;
		margin: 0;
		line-height: 1.5;
	}

	.patent-badges {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: auto;
	}

	.patent-badge {
		padding: 0.35rem 0.85rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.patent-badge.role {
		background: rgba(79, 171, 47, 0.15);
		color: #4fab2f;
		border: 1px solid rgba(79, 171, 47, 0.25);
	}

	.patent-badge.date {
		background: rgba(32, 115, 96, 0.1);
		color: #207360;
		border: 1px solid rgba(32, 115, 96, 0.2);
	}

	.patent-links {
		display: flex;
		flex-wrap: wrap;
		gap: 1.25rem;
	}

	.patent-link {
		color: #4fab2f;
		font-weight: 600;
		font-size: 0.9rem;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.patent-link:hover {
		color: #207360;
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.patents-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.patent-card {
			padding: 1.5rem;
		}
	}
</style>
