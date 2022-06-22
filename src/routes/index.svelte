<script lang="ts">
	import Links from '$lib/Links.svelte';
	import ProjectSpotlight from '$lib/ProjectSpotlight.svelte';
	import { blurb } from '$lib/stores/constants';
</script>

<section class="blurb">
	<h1>Aiden Langley</h1>
	<h2>Software Engineer</h2>
	<p>{$blurb}</p>
</section>

<Links />

<ProjectSpotlight />
