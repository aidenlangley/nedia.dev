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
		experience: Experience;
		education: Education;
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

interface Experience {
	readonly company: string;
	readonly industry: string;
	readonly location: string;
	readonly duration: string;
	readonly titles: string[];
	readonly responsibilities: string[];
	readonly technologies: string[];
	readonly notables: string[];
}

interface Education {
	readonly institute: string;
	readonly grade: string;
}
