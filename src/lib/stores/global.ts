import { writable } from 'svelte/store';

// Controls whether or not the site will use a primary black background
// with a light foreground.
export const dark = writable(true);

// Drawer is closed when false, and opens when true. Drawer is always open
// when the screen is wide enough.
export const drawer = writable(false);
