<script lang="ts">
	import { email, phone } from '$lib/stores/constants';

	import GitHub from './GitHub.svelte';
	import Email from './Email.svelte';
	import Phone from './Phone.svelte';

	const obf_email_parts = $email.split('@');
	const obf_email = `${obf_email_parts[0]} at ${obf_email_parts[1]}`;
</script>

<section class="links">
	<GitHub />
	<Email address={obf_email} />
	<Phone number={$phone} />
</section>

<style>
	.links {
		display: grid;
		grid-auto-flow: column;
		align-items: center;
		justify-items: center;
	}
</style>
