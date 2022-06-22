<script lang="ts">
	import { projects } from '$lib/stores/constants';
	import Heading from './Heading.svelte';
	import Paragraph from './Paragraph.svelte';

	import Title from './Title.svelte';
</script>

<section class="spotlight">
	<Title>Projects</Title>
	{#each $projects as { title, description, urls, key_words }}
		<Heading>{title}</Heading>
		<div class="spotlighted-project">
			<ul>
				{#each key_words as word}
					<li>{word}</li>
				{/each}
			</ul>
			{#if description}
				{#each description as paragraph}
					<Paragraph>{paragraph}</Paragraph>
				{/each}
			{/if}
			{#if urls && urls.length > 0}
				<ul>
					{#each urls as url}
						<li><a href={url}>{url}</a></li>
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
</section>

<style>
	h1 {
		font-family: monospace;
	}
</style>
