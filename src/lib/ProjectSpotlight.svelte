<script lang="ts">
	import { projects } from '$lib/stores/constants';
</script>

<section class="spotlight">
	<h1>
		<!-- <Link to="/projects" label="opens the projects page" internal> -->
		Projects
		<!-- </Link> -->
	</h1>
	{#each $projects as { title, description, urls, key_words }}
		<div class="spotlighted-project">
			<h1>{title}</h1>
			<ul>
				{#each key_words as word}
					<li>{word}</li>
				{/each}
			</ul>
			{#if description}
				{#each description as paragraph}
					<p>{paragraph}</p>
				{/each}
			{/if}
			{#if urls && urls.length > 0}
				<h3>External Links</h3>
				<ul>
					{#each urls as url}
						<li><a href={url}>{url}</a></li>
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
</section>
