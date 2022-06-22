<script lang="ts">
	import Link from '$lib/Link.svelte';
	import { email, phone } from '$lib/stores/constants';
	const obf_email_parts = $email.split('@');
	const obf_email = `${obf_email_parts[0]} at ${obf_email_parts[1]}`;
</script>

<section class="links">
	<ul>
		<li>
			<Link
				to="https://github.com/aidenlangley"
				label="opens an external link to GitHub where some of my projects can be found"
			>
				<!-- Little terminal SVG goes here -->
				GitHub
			</Link>
		</li>

		<li>
			<!-- Notepad SVG? -->
			<Link to="/resume" label="opens my résumé, also known as a CV" internal>
				View Resume
			</Link>
			<!-- <Small italic>or résumé if you're flash</Small> -->
		</li>

		<li>
			<!-- Mail SVG -->
			<Link
				to="mailto:{obf_email}"
				label="opens an email client to write me a message"
			>
				Send an email -> <span class="email">{obf_email}</span>
			</Link>
		</li>

		<li>
			<!-- Phone SVG -->
			<Link to="tel:{$phone}" label="contacts me via a phone call">
				Phone (NZ) -> {$phone}
			</Link>
		</li>
	</ul>
</section>
