/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
	interface Models {
		project: Project;
	}
}

interface Project {
	readonly title: string;
	// An array of relevant URLs.
	readonly urls?: string[];
	// An array of paragraphs.
	readonly description?: string[];
	readonly key_words: string[];
	// Nice covert photo where applicable.
	readonly img?: string;
}
