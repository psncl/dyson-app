<script>
	let products = [
		{
			sNo: 1
		}
	];

	function addProduct() {
		let curNumItems = products.length;
		products.push({
			sNo: curNumItems + 1
		});
		products = products;
	}
</script>

<div class="container">
	<header>
		<h2>Log New Products</h2>
		<p>Log all details of returned products</p>
	</header>

	<div class="product-list">
		<ul>
			{#each products as product, i (product.sNo)}
				<li>Product {i + 1}</li>
			{/each}
			<button on:click={addProduct} class="add-button">Add Product ⨁</button>
		</ul>
	</div>

	<div class="product-form"></div>
</div>

<style>
	@import '$lib/app.css';

	.container {
		width: 70%;
		margin: 5rem auto 0 auto;
		display: grid;
		grid-template-columns: 3fr 10fr;
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
	}

	header,
	.product-list,
	.product-form {
		border-radius: 0.5rem;
	}

	header h2 {
		font-size: 3rem;
		font-weight: 500;
	}

	header p {
		font-size: 2rem;
	}

	.product-list {
		border: solid 1px #000;
	}

	.product-list li {
		font-size: 2rem;
		list-style: none;
		border-bottom: solid 1px #000;
		padding: 1rem 0 1rem 2rem;
	}

	.add-button {
		border: none;
		font-size: 2.5rem;
		padding: 1rem;
		width: 100%;
		background-color: var(--dyson-color);
	}

	.add-button:hover {
		background-color: #99e445;
	}

	.add-button:active {
		transform: translate(2px, 2px);
	}
</style>
