<script lang="ts">
	import { blurb } from '$lib/stores/constants';
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

	.blurb > h1 {
		font-size: 2rem;
		line-height: 0.5rem;
	}

	.blurb > h2 {
		font-family: monospace;
		font-size: 1.2rem;
		line-height: 0.4rem;
	}

	.blurb > small {
		font-family: sans-serif;
		text-align: justify;
	}
</style>
