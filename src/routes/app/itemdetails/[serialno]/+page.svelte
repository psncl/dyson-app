<script>
	export let data;
</script>

<div class="container">
	<header>
		<a href="/app/viewproducts">← Back</a>
		<h2>Product Details</h2>
	</header>

	<div class="subcontainer">
		<div class="table">
			{#each Object.entries(data.item) as [key, value] (data.item.value)}
				<span class="heading">{key}</span>
				<span class="value">{value}</span>
			{/each}
		</div>
	</div>
</div>

<style>
	@import '$lib/app.css';

	.container {
		width: 70%;
		margin: 5rem auto 0 auto;
	}

	header {
		background-color: var(--bg-accent-color);
		color: white;
		text-align: center;
		padding: 1rem 0;
		grid-column: 1 / -1;
		position: relative;
		border-radius: 0.3rem;
	}

	header h2 {
		font-size: 2rem;
		font-weight: 500;
	}

	header a:link,
	header a:visited {
		text-decoration: none;
		color: var(--dyson-color);
		font-size: 1.25rem;
		position: absolute;
		left: 1.25rem;
		top: 0;
		transform: translateY(50%);
	}

	header a:hover {
		transform: scale(1.1) translateY(50%);
		transition: transform 0.1s ease;
	}

	.subcontainer {
		height: 70vh;
		border: solid 1px #000;
		border-radius: 0.3rem;
		padding: 6.25rem;
	}

	.table {
		display: grid;
		row-gap: 2.5rem;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: repeat(7, 1fr);
	}

	.heading,
	.value {
		font-size: 2rem;
	}

	.heading {
		font-weight: 700;
	}

	.value::before {
		content: '↪';
		font-size: 2rem;
		margin-right: 1.2rem;
		color: var(--dyson-color);
	}
</style>
