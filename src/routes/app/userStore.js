/* 
Svelte stores are a tool for global state management.
It gives access to certain variables to all components in the app.

@author: Pushkar Sinha
@date: 09 May 2024
*/

import { writable } from 'svelte/store';

export const name = writable('');
export const username = writable('');
export const role = writable('');
export const userid = writable(0);

/* 
Storing the JWT token in a store is highly insecure.
This was added just to aid development and debugging.
It would be removed in the final program.
*/
export const jwt = writable('');
