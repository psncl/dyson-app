import { redirect } from '@sveltejs/kit';
import { apiURL } from '$lib/api.js';
import { jwt } from './routes/app/userStore';

export const handle = async ({ event, resolve }) => {
	const requestedPath = event.url.pathname;
	const cookies = event.cookies;
	const isTokenValid = await validateTokenFunction(cookies);

	// if (currentPath.includes('/app')) {
	// 	if (!isTokenValid) {
	// 		throw redirect(303, '/');
	// 	}
	// }

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
