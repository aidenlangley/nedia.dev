<script>
	import { blurb, dob, education, experience } from '$lib/stores/constants';

	import Blurb from '$lib/Blurb.svelte';
	import Title from '$lib/Title.svelte';
	import Heading from '$lib/Heading.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Link from '$lib/Link.svelte';
	import Experience from '$lib/Experience.svelte';
</script>

<article>
	<title>Resume</title>
	<Blurb />
</article>

<section>
	{#each $experience as { company, industry, location, duration, titles, technologies, responsibilities, notables }}
		<Experience
			{company}
			{industry}
			{location}
			{duration}
			{titles}
			{technologies}
			{responsibilities}
			{notables}
		/>
		<!-- 	<Heading>{company}</Heading> -->
		<!-- 	<h3>{location}</h3> -->
		<!-- 	<h4>{duration}</h4> -->
		<!-- 	<Paragraph> -->
		<!-- 		{#each titles as title} -->
		<!-- 			{title} -->
		<!-- 		{/each} -->
		<!-- 	</Paragraph> -->

		<!-- 	{#each responsibilities as responsibility} -->
		<!-- 		<Paragraph>{responsibility}</Paragraph> -->
		<!-- 	{/each} -->

		<!-- 	<ul> -->
		<!-- 		{#each technologies as technology} -->
		<!-- 			<li>{technology}</li> -->
		<!-- 		{/each} -->
		<!-- 	</ul> -->

		<!-- 	<small>Some notable clients/competitors/facts...</small> -->
		<!-- 	<ul> -->
		<!-- 		{#each notables as notable} -->
		<!-- 			<li>{notable}</li> -->
		<!-- 		{/each} -->
		<!-- 	</ul> -->
	{/each}
</section>

<style>
	h1 {
		font-size: 2rem;
		line-height: 0.5rem;
	}
</style>
