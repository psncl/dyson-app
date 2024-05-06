import { json } from '@sveltejs/kit';
import { apiURL } from '$lib/api.js';

export async function POST({ request, cookies }) {
	const jwtToken = cookies.get('Authorization');
	const { fdata } = await request.json();
	fdata.model = 'nodata';

	const addRequest = new Request(apiURL + '/product/add', {
		method: 'PUT',
		body: JSON.stringify(fdata),
		headers: {
			'Content-Type': 'application/json',
			Authorization: jwtToken
		}
	});

	const res = await fetch(addRequest);
	const data = await res.json();

	if (data.code === 200) {
		return json(data, { status: 201 });
	}
}
