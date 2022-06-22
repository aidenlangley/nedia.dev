<script lang="ts">
	import Link from '$lib/Link.svelte';
	import Small from '$lib/Small.svelte';
	import { email, phone } from '$lib/stores/constants';

	const obf_email_parts = $email.split('@');
	const obf_email = `${obf_email_parts[0]} at ${obf_email_parts[1]}`;

	const projects: Project[] = [
		{
			title: 'bspcq',
			description: [
				`A hobby of mine is tinkering with Linux - this was
        something I wrote to visually represent the bspwm data structure.
        It uses binary space partitioning to divide your desktop into
        nodes that a program can occupy. The code is recursive since you
        can theoretically have an infinite number of nodes, and was a
        lot of fun to write.`
			],
			urls: [
				'https://github.com/aidenlangley/bspcq',
				'https://pypi.org/project/bspcq'
			],
			key_words: ['python', 'a toy for bspwm, a window manager for Linux']
		},
		{
			title: 'nedots',
			urls: [
				'https://github.com/aidenlangley/nedots',
				'https://crates.io/crates/nedots'
			],
			key_words: ['rust', 'cli', 'interfaces with C bindings to libgit2']
		},
		{
			title: 'chrono-elapsed',
			urls: [
				'https://github.com/aidenlangley/chrono_elapsed',
				'https://crates.io/crates/chrono_elapsed'
			],
			key_words: ['']
		},
		{
			title: 'wowhub.co.nz',
			urls: [
				'https://github.com/aidenlangley/wowhub.co.nz',
				'https://www.wowhub.co.nz'
			],
			key_words: ['svelte', 'hand drawn art']
		},
		{
			title: 'nedia.dev',
			urls: [
				'https://github.com/aidenlangley/nedia.dev',
				'https://www.nedia.dev'
			],
			key_words: ['more svelte']
		},
		{
			title: 'misc. projects',
			key_words: ['fish/bash installers', 'vue/nuxtjs playgrounds']
		}
	];
</script>

<section class="blurb">
	<h1>Aiden Langley</h1>
	<h2>Software Engineer</h2>
	<p>
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est
		laborum."
	</p>
</section>

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

<section class="spotlight">
	<h1>
		<!-- <Link to="/projects" label="opens the projects page" internal> -->
		Projects
		<!-- </Link> -->
	</h1>
	{#each projects as { title, description, urls, key_words }}
		<div class="spotlighted-project">
			<h1>{title}</h1>
			<ul>
				{#each key_words as word}
					<li>{word}</li>
				{/each}
			</ul>
			{#if description}
				{#each description as paragraph}
					<p>{paragraph}</p>
				{/each}
			{/if}
			{#if urls && urls.length > 0}
				<h3>External Links</h3>
				<ul>
					{#each urls as url}
						<li><a href={url}>{url}</a></li>
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
</section>
