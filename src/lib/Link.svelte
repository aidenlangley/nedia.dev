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
