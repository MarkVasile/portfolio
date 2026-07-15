<script lang="ts">
	import { _ } from 'svelte-i18n';

	const email = 'mark@kawacode.ai';

	// For a government / enterprise evaluation audience, keep the professional set
	// only: LinkedIn, GitHub, and email. Personal social accounts are omitted.
	const socialLinks = [
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/markvasile',
			icon: '💼',
			color: '#0077b5'
		},
		{
			name: 'GitHub',
			url: 'https://github.com/MarkVasile',
			icon: '💻',
			color: '#171515'
		},
		{
			name: 'Email',
			url: `mailto:${email}`,
			icon: '✉️',
			color: '#207360'
		}
	];

	let copied = $state(false);
	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(email);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		} catch {
			/* clipboard unavailable */
		}
	};
</script>

<section class="section" id="contact">
	<h2 class="section-title">{$_('contact.title')}</h2>

	<div class="contact-cta">
		<div class="cta-content">
			<h3>{$_('contact.buildTogetherTitle')}</h3>
			<p>{$_('contact.buildTogetherDescription')}</p>
			<div class="email-row">
				<a class="email-address" href={`mailto:${email}`}>{email}</a>
				<button class="btn btn-secondary email-copy" onclick={copyEmail}>
					{copied ? $_('contact.copied') : $_('contact.copyEmail')}
				</button>
			</div>
		</div>
	</div>

	<div class="documents">
		<h3>{$_('contact.documentsTitle')}</h3>
		<div class="documents-grid">
			<a class="doc-link" href="/Mark-Vasile-Resume.pdf" target="_blank" rel="noopener noreferrer">
				<span class="doc-icon" aria-hidden="true">📄</span>
				<span>{$_('contact.downloadCv')}</span>
			</a>
			<a class="doc-link" href="/Code-Awareness-LLC-Capability-Statement.pdf" target="_blank" rel="noopener noreferrer">
				<span class="doc-icon" aria-hidden="true">📄</span>
				<span>{$_('contact.capabilityStatement')}</span>
			</a>
		</div>
	</div>

	<div class="contact-content">
		<div class="social-section">
			<div class="social-grid">
				{#each socialLinks as social}
					<a href={social.url} target="_blank" rel="noopener noreferrer" class="social-link">
						<div class="social-icon" style="background-color: {social.color}">
							{social.icon}
						</div>
						<span class="social-name">{social.name}</span>
					</a>
				{/each}
			</div>
		</div>
	</div>


	<footer class="footer">
		<div class="footer-content">
			<div class="footer-logo">
				<img src="/codeawareness.jpg" alt="CodeAwareness Logo" />
				<span>Mark Vasile</span>
			</div>
			
			<div class="footer-links">
				<a href="#patents">{$_('contact.footer.sections.patents')}</a>
				<a href="#about">{$_('contact.footer.sections.about')}</a>
				<a href="#projects">{$_('contact.footer.sections.projects')}</a>
				<a href="#blogs">{$_('contact.footer.sections.blogs')}</a>
				<a href="#contact">{$_('contact.footer.sections.contact')}</a>
			</div>

			<div class="footer-social">
				{#each socialLinks as social}
					<a href={social.url} target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label={social.name}>
						{social.icon}
					</a>
				{/each}
			</div>
		</div>

		<div class="footer-bottom">
			<p>{$_('contact.footer.builtWith')}</p>
		</div>
	</footer>
</section>

<style>

	.contact-content {
		display: grid;
    grid-template-columns: auto;
		gap: 4rem;
		margin-bottom: 4rem;
	}
	
	.social-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		max-width: 720px;
		margin: 0 auto;
	}

	.email-row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
		margin-top: 1.5rem;
	}

	.email-address {
		font-size: 1.2rem;
		font-weight: 600;
		color: #207360;
		text-decoration: none;
	}

	.email-address:hover {
		text-decoration: underline;
	}

	.email-copy {
		padding: 0.5rem 1rem;
		font-size: 0.9rem;
	}

	.documents {
		text-align: center;
		margin-bottom: 3rem;
	}

	.documents h3 {
		font-size: 1.4rem;
		font-weight: 600;
		color: #000000;
		margin-bottom: 1.5rem;
	}

	.documents-grid {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.doc-link {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.85rem 1.4rem;
		background: white;
		border: 2px solid #4fab2f;
		border-radius: 12px;
		text-decoration: none;
		color: #207360;
		font-weight: 600;
		transition: all 0.3s ease;
	}

	.doc-link:hover {
		background: #4fab2f;
		color: white;
		transform: translateY(-3px);
		box-shadow: 0 10px 25px rgba(79, 171, 47, 0.2);
	}

	.doc-icon {
		font-size: 1.2rem;
	}
	
	.social-link {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.5rem;
		background: white;
		border: 1px solid #e0e0e0;
		border-radius: 15px;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
	}
	
	.social-link:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 25px rgba(79, 171, 47, 0.15);
	}
	
	.social-icon {
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
	
	.social-name {
		font-weight: 600;
		color: #000000;
	}
	
	.contact-cta {
		background: linear-gradient(135deg, rgba(79, 171, 47, 0.1) 0%, rgba(32, 115, 96, 0.1) 100%);
		padding: 4rem 2rem;
		border-radius: 20px;
		border: 1px solid rgba(79, 171, 47, 0.1);
		margin-bottom: 3rem;
	}
	
	.cta-content {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}
	
	.cta-content h3 {
		font-size: 2rem;
		font-weight: 600;
		color: #000000;
		margin-bottom: 1rem;
	}
	
	.cta-content p {
		font-size: 1.2rem;
		color: #666;
		margin-bottom: 2rem;
		line-height: 1.6;
	}
	
	.footer {
		background: #000000;
		color: white;
		padding: 3rem 0 1rem;
		margin-top: 4rem;
	}
	
	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		gap: 2rem;
		align-items: center;
		margin-bottom: 2rem;
	}
	
	.footer-logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 600;
		font-size: 1.2rem;
	}
	
	.footer-logo img {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		object-fit: cover;
	}
	
	.footer-links {
		display: flex;
		justify-content: center;
		gap: 2rem;
		flex-wrap: wrap;
	}
	
	.footer-links a {
		color: #ccc;
		text-decoration: none;
		transition: color 0.2s ease;
	}
	
	.footer-links a:hover {
		color: #4fab2f;
	}
	
	.footer-social {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
	}
	
	.footer-social-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 50%;
		text-decoration: none;
		font-size: 1.2rem;
		transition: all 0.2s ease;
	}
	
	.footer-social-link:hover {
		background: #4fab2f;
		transform: translateY(-2px);
	}
	
	.footer-bottom {
		border-top: 1px solid #333;
		padding-top: 1rem;
		text-align: center;
		color: #888;
		font-size: 0.9rem;
	}
	
	.footer-bottom p {
		margin: 0.25rem 0;
	}
	
	@media (max-width: 768px) {
		.contact-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		
		.social-grid {
			grid-template-columns: 1fr;
		}
		
		.footer-content {
			grid-template-columns: 1fr;
			text-align: center;
			gap: 1.5rem;
		}
		
		.footer-links {
			justify-content: center;
		}
		
		.footer-social {
			justify-content: center;
		}
	}
</style>
