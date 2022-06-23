<script lang="ts">
	import { blurb, hobbies } from '$lib/stores/constants';
	import Paragraph from './Paragraph.svelte';
</script>

<section class="blurb">
	<h1>Aiden Langley</h1>
	<h2>Software Engineer</h2>
	<small>{$blurb}</small>
</section>

<style>
	.blurb {
		display: grid;
		grid-auto-flow: row;
	}

	h1 {
		font-size: 3rem;
		margin-top: 0.8rem;
		margin-bottom: 0.1rem;
	}

	h2 {
		font-family: monospace;
		font-size: 1.2rem;
		margin-top: 0.1rem;
	}

	small {
		font-family: sans-serif;
		text-align: justify;
	}
</style>
