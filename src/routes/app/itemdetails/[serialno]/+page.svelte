<script>
	export let data;
</script>

<div class="container">
	<header>
		<a href="/">← Back</a>
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
		border-radius: 0.5rem;
	}

	header h2 {
		font-size: 3rem;
		font-weight: 500;
	}

	header a {
		text-decoration: none;
		color: var(--dyson-color);
		font-size: 2rem;
		position: absolute;
		left: 2rem;
		top: 0;
		transform: translateY(50%);
	}

	.subcontainer {
		height: 70vh;
		border: solid 1px #000;
		border-radius: 0.5rem;
		padding: 10rem;
	}

	.table {
		display: grid;
		row-gap: 4rem;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: repeat(7, 1fr);
	}

	.heading,
	.value {
		font-size: 3rem;
	}

	.heading {
		font-weight: 700;
	}

	.value::before {
		content: '↪';
		font-size: 3rem;
		margin-right: 2rem;
		color: var(--dyson-color);
	}
</style>
