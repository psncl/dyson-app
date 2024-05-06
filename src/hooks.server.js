import { redirect } from '@sveltejs/kit';
import { apiURL } from '$lib/api.js';

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

const validateTokenFunction = async (cookies) => {
	const jwtToken = cookies.get('Authorization');
	const res = await fetch(`${apiURL}/user/userInfo`, {
		method: 'POST',
		headers: {
			Authorization: jwtToken
		}
	});

	// Backend gives 500 response if JWT token isn't valid. So won't give a proper JSON.parse response in case of error.
	return res.status === 200;
};
