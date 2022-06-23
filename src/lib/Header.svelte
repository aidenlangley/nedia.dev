<script lang="ts">
	import { pages, email } from '$lib/stores/constants';

	import Link from './Link.svelte';
</script>

<h1>{$email}</h1>

<nav>
	<ol>
		{#each pages as { page, url }}
			<li>
				{#if url}
					<Link to={url} label="navigate to {page} page" internal>{page}</Link>
				{:else}
					{page}
				{/if}
			</li>
		{/each}
	</ol>
</nav>

<style>
	h1 {
		font-family: monospace;
		text-align: center;
	}

	nav > ol {
		display: grid;
		grid-auto-flow: column;
		justify-content: center;

		/* Remove circles, ugly. */
		list-style-type: none;

		/* Reset default styles. */
		margin: 0;
		padding: 0;
	}

	li {
		margin-left: 0.2rem;
		margin-right: 0.2rem;
	}
</style>
