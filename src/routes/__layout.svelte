<script lang="ts">
	import { dark as dark_state } from '$lib/stores/global';

	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Links from '$lib/Links.svelte';
	import Blurb from '$lib/Blurb.svelte';

	$: dark = $dark_state;
</script>

<div id="root" class:dark>
	<header>
		<Header />
	</header>

	<div class="blurb">
		<Blurb />
	</div>

	<div class="links">
		<Links />
	</div>

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
			'. blurb  . '
			'. links  . '
			'. main   . '
			'. footer . ';
		padding: 1rem;
	}

	.dark {
		background-color: #181a1b;
		color: #e7e6e3;
	}

	header {
		grid-area: header;
	}

	.blurb {
		grid-area: blurb;
	}

	.links {
		grid-area: links;
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
