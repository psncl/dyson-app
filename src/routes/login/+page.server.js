/* 
Make a POST request to the login endpoint
using the form data from the login page.
Set cookies if logged in, and clear cookies from a previous session if login failed.

@author: Pushkar Sinha
@date: 09 May 2024
*/

import { fail, redirect } from '@sveltejs/kit';
import { apiURL } from '$lib/api.js';

export const actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const userName = formData.get('username');
		const password = formData.get('password');

		const loginRequest = new Request(apiURL + '/user/login', {
			method: 'POST',
			body: JSON.stringify({ userName, password }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const res = await fetch(loginRequest);
		const data = await res.json();

		if (data.code === 200) {
			const jwtToken = data.data;
			cookies.set('Authorization', jwtToken, { path: '/' });
			cookies.set('isloggedin', 'yes', { path: '/' });
			redirect(302, '/app/viewproducts');
			// return data;
		} else {
			cookies.delete('Authorization', { path: '/' });
			return fail(400, { error: 'Invalid username or password' });
		}
	}
};
