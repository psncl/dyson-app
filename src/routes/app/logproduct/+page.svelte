<script>
	let reasons = ['refund', 'repair', 'recycle'];
	let products = [
		{
			sNo: 1
		}
	];

	function addProduct() {
		let numCurrentItems = products.length;
		products.push({
			sNo: numCurrentItems + 1
		});
		products = products;
	}

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
</script>

<div class="container">
	<header>
		<h2>Log New Products</h2>
		<p>Log all details of returned products</p>
	</header>

	<div class="grid-container">
		<ul class="product-list">
			{#each products as product, i (product.sNo)}
				<li>Product {i + 1}</li>
			{/each}
			<button on:click={addProduct} class="add-button">Add Product ⨁</button>
		</ul>

		<form class="product-form">
			<label for="cname" class="form-heading">Customer Name:</label>
			<input name="cname" id="cname" type="text" placeholder="Customer Name" />
			<label for="productmodel" class="form-heading">Select Product:</label>
			<input name="productmodel" id="productmodel" type="text" placeholder="Select Model" />
			<label for="serialnumber" class="form-heading">Serial Number:</label>
			<input name="serialnumber" id="serialnumber" type="text" placeholder="Serial Number" />

			<fieldset>
				<legend>Reason of Return:</legend>
				{#each reasons as reason (reason)}
					<span>
						<input type="radio" id={reason} name="reasonreturn" value={reason} />
						<label for={reason}>{capitalizeFirstLetter(reason)}</label>
					</span>
				{/each}
			</fieldset>
		</form>
	</div>
</div>

<style>
	@import '$lib/app.css';

	.container {
		width: 70%;
		margin: 5rem auto 0 auto;
	}

	.grid-container {
		height: 70vh;
		display: grid;
		grid-template-columns: 3fr 10fr;
		border: solid 1px #000;
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
		height: 100%;
		border-right: solid 1px #000;
		display: flex;
		flex-direction: column;
	}

	.product-list li {
		font-size: 2rem;
		list-style: none;
		border-bottom: solid 1px #000;
		padding: 1rem 0 1rem 2rem;
	}

	.product-form {
		padding: 4rem;
		font-size: 2.5rem;
	}

	.add-button {
		border: none;
		font-size: 2.5rem;
		padding: 1rem;
		width: 100%;
		background-color: var(--dyson-color);
		margin-top: auto;
	}

	.add-button:hover {
		background-color: #99e445;
	}

	.add-button:active {
		transform: translate(2px, 2px);
	}

	.product-form > * {
		display: block;
		font-size: inherit;
		margin-bottom: 2rem;
	}

	.product-form > input {
		padding: 0.5rem 1rem;
		margin-bottom: 3rem;
	}

	.product-form > input:last-child {
		margin-bottom: 0;
	}

	.form-heading {
		font-size: 3rem;
	}
</style>
