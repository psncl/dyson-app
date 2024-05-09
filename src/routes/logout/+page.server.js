/* 
Get the Authorization cookie from the browser,
and send it along with the userid to the logout API endpoint.
Delete cookies if logout is successful.

@author: Pushkar Sinha
@date: 09 May 2024
*/

import { fail, redirect } from '@sveltejs/kit';
import { apiURL } from '$lib/api.js';

export async function load({ cookies, request, url }) {
	const jwtToken = cookies.get('Authorization');
	const userid = new URLSearchParams(url.searchParams).get('u');

	const logoutRequest = new Request(apiURL + '/user/logOut', {
		method: 'POST',
		body: JSON.stringify({ uid: userid }),
		headers: {
			'Content-Type': 'application/json',
			Authorization: jwtToken
		}
	});

	const res = await fetch(logoutRequest);
	const data = await res.json();

	if (data.code === 200) {
		cookies.delete('Authorization', { path: '/' });
		cookies.delete('isloggedin', { path: '/' });
		redirect(302, '/login');
	} else if (data.code === 500) {
		return { error: 'Could not log out' };
	}

	return {
		msg: 'Logout successful'
	};
}
