<script lang="ts">
	export let to: string;
	export let label: string;
	export let internal = false;
</script>

{#if internal}
	<a href={to} aria-label={label}>
		<slot />
	</a>
{:else}
	<a href={to} target="_blank" rel="noopener external" aria-label={label}>
		<slot />
	</a>
{/if}

<style>
	a:hover,
	a:active {
		color: blue;
	}

	:global(.dark) a:hover,
	:global(.dark) a:active {
		color: skyblue;
	}

	a:visited {
		color: gray;
	}
</style>
