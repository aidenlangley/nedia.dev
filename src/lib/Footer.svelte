<script lang="ts">
	import { source_gh, svelte, svelte_kit } from '$lib/stores/constants';

	import Link from './Link.svelte';
</script>

<div class="links">
	<span class="svelte-kit">
		<Link to={$svelte} label="">svelte</Link>
		<Link to={$svelte_kit} label="">kit</Link>
	</span>
	<span>
		<Link to={$source_gh} label="">source code</Link>
	</span>
</div>

<style>
	span {
		font-family: monospace;
		margin-left: 0.3rem;
		margin-right: 0.3rem;
	}
</style>
