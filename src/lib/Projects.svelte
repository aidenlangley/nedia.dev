<script lang="ts">
	import { projects } from '$lib/stores/constants';

	import Heading from './Heading.svelte';
	import Link from './Link.svelte';
	import Paragraph from './Paragraph.svelte';
	import Title from './Title.svelte';
</script>

<section class="spotlight">
	<Title>Projects</Title>
	{#each $projects as { title, description, urls, key_words }}
		<Heading>{title}</Heading>
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
					<li><Link to={url} label="hyperlink to {url}">{url}</Link></li>
				{/each}
			</ul>
		{/if}
	{/each}
</section>

<style>
	ul {
		font-family: sans-serif;
	}
</style>
