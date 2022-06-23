<script lang="ts">
	import Heading from './Heading.svelte';
	import Paragraph from './Paragraph.svelte';
	import Title from './Title.svelte';

	export let company: string;
	export let industry: string;
	export let location: string;
	export let duration: string;
	export let titles: string[];
	export let technologies: string[];
	export let responsibilities: string[];

	const joined_titles = titles.join(', ');
</script>

<Title>{company}</Title>
<small>{location} | {industry} | {duration}</small>
<Heading>{joined_titles}</Heading>

<h3>Responsibilities</h3>
<ul>
	{#each responsibilities as responsibility}
		<li><small>{responsibility}</small></li>
	{/each}
</ul>

<h3>Technologies</h3>
<ul>
	{#each technologies as technology}
		<li><small>{technology}</small></li>
	{/each}
</ul>

<style>
	small {
		font-family: sans-serif;
	}

	h3 {
		font-family: monospace;
	}
</style>
