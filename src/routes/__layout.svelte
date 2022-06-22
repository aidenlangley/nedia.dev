<script lang="ts">
	import { dark as dark_state } from '$lib/stores/global';
	import { email, source_gh, svelte, svelte_kit } from '$lib/stores/constants';

	$: dark = $dark_state;
</script>

<div id="root" class:dark>
	<header>
		<h1 class="banner-title">{$email}</h1>
	</header>

	<main>
		<slot />
	</main>

	<footer>
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
			<a href={$source_gh} target="_blank" rel="noopener external">
				source code
			</a>
		</span>
	</footer>
</div>

<style>
	.dark {
		background-color: #2b2a33;
		color: whitesmoke;
	}

	footer {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: max-content;
	}

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
		color: lightblue;
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

	.banner-title {
		font-family: monospace;
	}
</style>
