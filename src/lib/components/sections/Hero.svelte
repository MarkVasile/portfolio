<script lang="ts">
	import { _ } from 'svelte-i18n';

	const scrollToSection = (sectionId: string) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<section class="hero" id="hero">
	<div class="hero-container">
		<div class="hero-content">
			<h1 class="hero-title">{$_('hero.title')}</h1>
			<h2 class="hero-subtitle">{$_('hero.subtitle')}</h2>
			<p class="hero-description">{$_('hero.description')}</p>

			<div class="hero-actions">
				<button class="btn" onclick={() => scrollToSection('projects')}>
					{$_('hero.cta')}
				</button>
				<a class="btn btn-secondary" href="/Mark-Vasile-Resume.pdf" target="_blank" rel="noopener noreferrer">
					{$_('hero.downloadCv')}
				</a>
				<button class="btn btn-secondary" onclick={() => scrollToSection('contact')}>
					{$_('contact.title')}
				</button>
			</div>
		</div>

		<div class="hero-visual">
			<div class="hero-photo-wrap">
				<img class="hero-photo" src="/me-at-starbucks.jpg" alt="Mark Vasile" />
			</div>
		</div>
	</div>
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

	.hero-photo-wrap {
		position: relative;
		width: 100%;
		max-width: 460px;
		/* room for the card to hang below the photo edge */
		margin-bottom: 1.5rem;
	}

	.hero-photo {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		border-radius: 16px;
		box-shadow: 0 20px 45px rgba(0, 0, 0, 0.28);
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
	}
</style>
