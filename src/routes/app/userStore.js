import { writable } from 'svelte/store';

export const name = writable('');
export const username = writable('');
export const role = writable('');
export const userid = writable(0);
export const jwt = writable('');
