<script lang="ts">
	import { source_gh, svelte, svelte_kit } from '$lib/stores/constants';
</script>

<span class="svelte-kit">
	<a href={$svelte} target="_blank" rel="noopener external" class="svelte">
		svelte
	</a>
	<a href={$svelte_kit} target="_blank" rel="noopener external" class="kit">
		kit
	</a>
</span>
<span> | </span>
<span>
	<a href={$source_gh} target="_blank" rel="noopener external"> source code </a>
</span>

<style>
	span {
		margin-left: 0.3rem;
		margin-right: 0.3rem;
	}

	a {
		font-family: monospace;
		text-decoration: none;
		color: blue;
	}

	:global(dark) a {
		color: #2d8ff9;
	}

	a:hover,
	a:active {
		text-decoration: underline;
		font-weight: bold;
	}

	a:visited {
		color: purple;
	}

	:global(dark) a:visited {
		color: lightpurple;
	}

	.svelte-kit > a {
		margin-left: initial;
		margin-right: initial;
	}

	.kit {
		color: orangered;
	}

	a:visited.kit {
		color: red;
	}
</style>
