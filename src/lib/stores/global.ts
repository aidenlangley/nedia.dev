import { writable } from 'svelte/store';

// Controls whether or not the site will use a primary black background
// with a light foreground.
export const dark = writable(false);
