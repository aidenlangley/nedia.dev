<script lang="ts">
	export let italic = false;
</script>

<small class:italic>
	<slot />
</small>

<style>
	.italic {
		font-style: italic;
	}
</style>
