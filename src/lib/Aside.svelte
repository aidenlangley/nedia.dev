<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { drawer } from '$lib/stores/global';

	import Links from '$lib/Links.svelte';
</script>

{#if $drawer}
	<aside transition:slide={{ delay: 250, duration: 300, easing: quintOut }}>
		<Links />
	</aside>
{/if}
