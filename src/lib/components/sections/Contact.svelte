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
	
	const socialLinks = [
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/markvasile',
			icon: '💼',
			color: '#0077b5'
		},
		{
			name: 'X (Twitter)',
			url: 'https://x.com/markvasile',
			icon: '🐦',
			color: '#1da1f2'
		},
		{
			name: 'Facebook',
			url: 'https://facebook.com/marian.vasile',
			icon: '📘',
			color: '#1877f2'
		},
		{
			name: 'Instagram',
			url: 'https://instagram.com/markvasile',
			icon: '📷',
			color: '#e4405f'
		}
	];
	
	const copyEmail = () => {
		navigator.clipboard.writeText('mark@markvasile.com');
		// You could add a toast notification here
	};
</script>

<section class="section" id="contact">
	{#await waitLocale() then}
	<h2 class="section-title">Get In Touch</h2>
	
	<div class="contact-cta">
		<div class="cta-content">
			<h3>
				{#if isReady}
					{$_('contact.buildTogetherTitle')}
				{:else}
					Let's Build Something Amazing Together
				{/if}
			</h3>
			<p>
				{#if isReady}
					{$_('contact.buildTogetherDescription')}
				{:else}
					Whether you're looking for a software engineer, want to collaborate on a project, or just want to chat about technology, I'd love to hear from you!
				{/if}
			</p>
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
				<a href="#about">
					{#if isReady}
						{$_('contact.footer.sections.about')}
					{:else}
						About
					{/if}
				</a>
				<a href="#blogs">
					{#if isReady}
						{$_('contact.footer.sections.blogs')}
					{:else}
						Blogs
					{/if}
				</a>
				<a href="#projects">
					{#if isReady}
						{$_('contact.footer.sections.projects')}
					{:else}
						Projects
					{/if}
				</a>
				<a href="#contact">
					{#if isReady}
						{$_('contact.footer.sections.contact')}
					{:else}
						Contact
					{/if}
				</a>
			</div>
			
			<div class="footer-social">
				{#each socialLinks as social}
					<a href={social.url} target="_blank" rel="noopener noreferrer" class="footer-social-link">
						{social.icon}
					</a>
				{/each}
			</div>
		</div>
		
		<div class="footer-bottom">
			<p>
				{#if isReady}
					{$_('contact.footer.builtWith')}
				{:else}
					Built with ❤️ using Svelte
				{/if}
			</p>
		</div>
	</footer>
	{/await}
</section>

<style>

	.contact-content {
		display: grid;
    grid-template-columns: auto;
		gap: 4rem;
		margin-bottom: 4rem;
	}
	
	.contact-info {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	
	.contact-card {
		background: white;
		border: 1px solid #e0e0e0;
		border-radius: 15px;
		padding: 2rem;
		text-align: center;
		transition: all 0.3s ease;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
	}
	
	.contact-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 35px rgba(79, 171, 47, 0.15);
	}
	
	.contact-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}
	
	.contact-card h3 {
		font-size: 1.3rem;
		font-weight: 600;
		color: #000000;
		margin-bottom: 0.5rem;
	}
	
	.contact-card p {
		color: #666;
		margin-bottom: 1.5rem;
		font-size: 1.1rem;
	}
	
	.social-section h3 {
		font-size: 1.8rem;
		font-weight: 600;
		color: #000000;
		margin-bottom: 2rem;
		text-align: center;
	}
	
	.social-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
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
	
	.cta-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
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
		
		.cta-actions {
			flex-direction: column;
			align-items: center;
		}
		
		.cta-actions .btn {
			width: 100%;
			max-width: 300px;
		}
	}
</style>
