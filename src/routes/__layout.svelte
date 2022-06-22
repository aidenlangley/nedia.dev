<script lang="ts">
	import { dark as dark_state } from '$lib/stores/global';

	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';

	$: dark = $dark_state;
</script>

<div id="root" class:dark>
	<header>
		<Header />
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<Footer />
	</footer>
</div>

<style>
	#root {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(375px, 720px) minmax(0, 1fr);
		grid-template-areas:
			'. header . '
			'. main   . '
			'. footer . ';
	}

	#root > * {
		padding: 1rem;
	}

	.dark {
		background-color: #181a1b;
		color: #e7e6e3;
	}

	header {
		grid-area: header;
	}

	main {
		grid-area: main;
	}

	footer {
		grid-area: footer;
	}

	footer {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: max-content;
	}
</style>
