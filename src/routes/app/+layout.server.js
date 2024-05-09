/* 
Get the user details from the API endpoint.
Any data loaded by +layout.server.js is available to all components in the same or inner paths.
So, this serves as a global state management tool.

@author: Pushkar Sinha
@date: 09 May 2024
*/

/* 
Don't delete this file.
Even if it's empty, leave it,
because it's needed  to trigger hooks on every page inside /app.
*/

import { apiURL } from '$lib/api.js';

export async function load({ cookies }) {
	const token = cookies.get('Authorization');
	let uid, role, name, username;

	const userInfo = async (jwt) => {
		const request = new Request(apiURL + '/user/userInfo', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: jwt
			}
		});

		const res = await fetch(request);
		const data = await res.json();
		if (data.code === 200) {
			uid = data.data.uid;
			role = data.data.role;
			name = data.data.loginName;
			username = data.data.userName;
		}
	};

	await userInfo(token);

	return {
		userData: {
			uid,
			role,
			name,
			username,
			jwt: token
		}
	};
}
