import { fail, redirect } from '@sveltejs/kit';
import { apiURL } from '$lib/api.js';
import { name, role, userid } from '../app/userStore';

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
			redirect(302, '/app/viewproducts');
			// return data;
		} else {
			cookies.delete('Authorization', { path: '/' });
			return fail(400, { error: 'Invalid username or password' });
		}
	}
};
