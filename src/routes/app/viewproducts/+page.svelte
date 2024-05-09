<!-- 
	Create table with data from +page.Server.js
 -->

<script>
	import DataTable from './data-table.svelte';
	export let data;
	const { allproducts } = data;
</script>

<div class="mycontainer">
	<header>
		<h2>All Logged Products</h2>
	</header>
	<div class={'mys-table mx-auto'}>
		<DataTable data={allproducts} />
	</div>
</div>

<style>
	@import '$lib/app.css';

	.mycontainer {
		width: 70%;
		margin: 5rem auto 0 auto;
		border: 1px solid #000;
		border-radius: 0.5rem;
	}

	header {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: var(--bg-accent-color);
		color: white;
		text-align: center;
		padding: 1rem 0;
		grid-column: 1 / -1;
		border-radius: 0.5rem;
	}

	header h2 {
		font-size: 2rem;
		font-weight: 500;
	}

	.mys-table {
		padding: 2rem;
	}
</style>
