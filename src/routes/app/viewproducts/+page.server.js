import { fail, redirect } from '@sveltejs/kit';
import { apiURL } from '$lib/api.js';

export async function load({ event, cookies }) {
	const jwtToken = cookies.get('Authorization');

	const itemsRequest = new Request(apiURL + '/product/productList', {
		method: 'POST',
		body: JSON.stringify({
			pageIndex: 1,
			pageSize: 100
		}),
		headers: {
			'Content-Type': 'application/json',
			Authorization: jwtToken
		}
	});

	const res = await fetch(itemsRequest);
	const data = await res.json();

	const allItems = data.data;

	if (data.code === 200) {
		const newObj = {
			allproducts: allItems
		};
		return newObj;
	}
}
