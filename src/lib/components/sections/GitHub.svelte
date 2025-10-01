<script lang="ts">
	import { onMount } from 'svelte';
	import { _, waitLocale } from 'svelte-i18n';
	import { i18nReady } from '../../i18n';
	
	let isReady = false;
	
	onMount(() => {
		const unsubscribe = i18nReady.subscribe(ready => {
			isReady = ready;
		});
		return unsubscribe;
	});
	
	interface Repository {
		name: string;
		description: string;
		html_url: string;
		language: string;
		stargazers_count: number;
		forks_count: number;
		updated_at: string;
	}
	
	interface GitHubData {
		personal: Repository[];
		codeawareness: Repository[];
		loading: boolean;
		error: string | null;
	}
	
	let githubData: GitHubData = {
		personal: [],
		codeawareness: [],
		loading: true,
		error: null
	};
	
	const fetchRepositories = async (username: string): Promise<Repository[]> => {
		try {
			const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
			if (!response.ok) throw new Error('Failed to fetch repositories');
			return await response.json();
		} catch (error) {
			console.error(`Error fetching ${username} repositories:`, error);
			return [];
		}
	};
	
	const formatDate = (dateString: string): string => {
		const date = new Date(dateString);
		return date.toLocaleDateString();
	};
	
	onMount(async () => {
		try {
			const [personalRepos, codeawarenessRepos] = await Promise.all([
				fetchRepositories('MarkVasile'),
				fetchRepositories('CodeAwareness')
			]);
			
      console.log(personalRepos, codeawarenessRepos);
			githubData = {
				personal: personalRepos,
				codeawareness: codeawarenessRepos,
				loading: false,
				error: null
			};
		} catch (error) {
			githubData = {
				personal: [],
				codeawareness: [],
				loading: false,
				error: 'Failed to load GitHub data'
			};
		}
	});
</script>

<section class="section" id="github">
	{#await waitLocale() then}
	<h2 class="section-title">
		{#if isReady}
			{$_('github.title')}
		{:else}
			GitHub Portfolio
		{/if}
	</h2>
	<p class="section-subtitle">
		{#if isReady}
			{$_('github.subtitle')}
		{:else}
			Explore my open source contributions and projects
		{/if}
	</p>
	
	{#if githubData.loading}
		<div class="loading">
			<div class="spinner"></div>
			<p>
				{#if isReady}
					{$_('common.loading')}
				{:else}
					Loading...
				{/if}
			</p>
		</div>
	{:else if githubData.error}
		<div class="error">
			<p>
				{#if isReady}
					{$_('common.error')}
				{:else}
					Error loading content
				{/if}
			</p>
			<button class="btn" on:click={() => window.location.reload()}>
				{#if isReady}
					{$_('common.retry')}
				{:else}
					Retry
				{/if}
			</button>
		</div>
	{:else}
		<div class="github-content">
			<div class="github-section">
				<h3>
					{#if isReady}
						{$_('github.personal')}
					{:else}
						Personal Projects
					{/if}
				</h3>
				<div class="repos-grid">
					{#each githubData.personal as repo}
						<div class="repo-card">
							<div class="repo-header">
								<h4 class="repo-name">{repo.name}</h4>
								<span class="repo-language">{repo.language || 'Other'}</span>
							</div>
							<p class="repo-description">{repo.description || 'No description available'}</p>
							<div class="repo-stats">
								<span class="stat">
									⭐ {repo.stargazers_count}
								</span>
								<span class="stat">
									🍴 {repo.forks_count}
								</span>
								<span class="stat">
									📅 {formatDate(repo.updated_at)}
								</span>
							</div>
							<a href={repo.html_url} target="_blank" rel="noopener noreferrer" class="repo-link">
								View Repository
							</a>
						</div>
					{/each}
				</div>
				<a href="https://github.com/MarkVasile" target="_blank" rel="noopener noreferrer" class="profile-link">
					View Profile → MarkVasile
				</a>
			</div>
			
			<div class="github-section">
				<h3>
					{#if isReady}
						{$_('github.codeawareness')}
					{:else}
						CodeAwareness
					{/if}
				</h3>
				<div class="repos-grid">
					{#each githubData.codeawareness as repo}
						<div class="repo-card">
							<div class="repo-header">
								<h4 class="repo-name">{repo.name}</h4>
								<span class="repo-language">{repo.language || 'Other'}</span>
							</div>
							<p class="repo-description">{repo.description || 'No description available'}</p>
							<div class="repo-stats">
								<span class="stat">
									⭐ {repo.stargazers_count}
								</span>
								<span class="stat">
									🍴 {repo.forks_count}
								</span>
								<span class="stat">
									📅 {formatDate(repo.updated_at)}
								</span>
							</div>
							<a href={repo.html_url} target="_blank" rel="noopener noreferrer" class="repo-link">
								View Repository
							</a>
						</div>
					{/each}
				</div>
				<a href="https://github.com/CodeAwareness" target="_blank" rel="noopener noreferrer" class="profile-link">
					View Profile → CodeAwareness
				</a>
			</div>
		</div>
	{/if}
	{/await}
</section>

<style>
	.github-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
	}
	
	.github-section h3 {
		font-size: 1.8rem;
		font-weight: 600;
		color: #000000;
		margin-bottom: 2rem;
		text-align: center;
	}
	
	.repos-grid {
		display: grid;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}
	
	.repo-card {
		background: white;
		border: 1px solid #e0e0e0;
		border-radius: 10px;
		padding: 1.5rem;
		transition: all 0.3s ease;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
	}
	
	.repo-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 25px rgba(79, 171, 47, 0.15);
		border-color: #4fab2f;
	}
	
	.repo-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}
	
	.repo-name {
		font-size: 1.2rem;
		font-weight: 600;
		color: #000000;
		margin: 0;
	}
	
	.repo-language {
		background: rgba(79, 171, 47, 0.1);
		color: #4fab2f;
		padding: 0.25rem 0.75rem;
		border-radius: 15px;
		font-size: 0.8rem;
		font-weight: 500;
	}
	
	.repo-description {
		color: #666;
		margin-bottom: 1rem;
		line-height: 1.5;
	}
	
	.repo-stats {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
		flex-wrap: wrap;
	}
	
	.stat {
		font-size: 0.9rem;
		color: #888;
	}
	
	.repo-link {
		display: inline-block;
		color: #4fab2f;
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s ease;
	}
	
	.repo-link:hover {
		color: #207360;
	}
	
	.profile-link {
		display: block;
		text-align: center;
		color: #4fab2f;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.1rem;
		padding: 1rem;
		border: 2px solid #4fab2f;
		border-radius: 10px;
		transition: all 0.3s ease;
	}
	
	.profile-link:hover {
		background: #4fab2f;
		color: white;
	}
	
	.loading,
	.error {
		text-align: center;
		padding: 3rem;
	}
	
	.spinner {
		width: 40px;
		height: 40px;
		border: 4px solid #f3f3f3;
		border-top: 4px solid #4fab2f;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin: 0 auto 1rem;
	}
	
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
	
	.error p {
		color: #e74c3c;
		margin-bottom: 1rem;
	}
	
	@media (max-width: 768px) {
		.github-content {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
		
		.repo-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}
		
		.repo-stats {
			justify-content: space-between;
		}
	}
</style>
