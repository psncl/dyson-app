/*
Hooks in Svelte act as middleware.
Any page request from the browser first goes to hooks,
then to respective routes. For this project, hooks are being
used to perform auth checks. Since the entire app functionality needs login,
any routes in /app must only be accessed if the "Authorization" cookie is set in the browser,
and confirmed to be valid by the API endpoint.

@author: Pushkar Sinha
@date: 09 May 2024
*/

import { redirect } from '@sveltejs/kit';
import { apiURL } from '$lib/api.js';

export const handle = async ({ event, resolve }) => {
	const requestedPath = event.url.pathname;
	const cookies = event.cookies;
	const isTokenValid = await validateTokenFunction(cookies);
	const response = await resolve(event);
	return response;
};

// Assume user is logged in if successful API call to /user/userInfo
const validateTokenFunction = async (cookies) => {
	const jwtToken = cookies.get('Authorization');
	const res = await fetch(`${apiURL}/user/userInfo`, {
		method: 'POST',
		headers: {
			Authorization: jwtToken
		}
	});

	// Backend gives 500 response if JWT token isn't valid. Due to lack of a proper 4xx response, using JSON.parse on the 500 response breaks the app, says "Unexpected end of JSON output".
	return res.status === 200;
};
