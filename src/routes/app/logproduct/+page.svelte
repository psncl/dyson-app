<script>
	import LogForm from './logproduct-form.svelte';
	export let data;
</script>

<div class="mycontainer">
	<header>
		<h2>Log New Products</h2>
		<p>Log all details of returned products</p>
	</header>

	<div class="grid-container">
		<LogForm data={data.form}></LogForm>
	</div>
</div>

<style>
	@import '$lib/app.css';

	.mycontainer {
		margin: 1.5rem auto 0 auto;
		width: 70vh;
		display: flex;
		flex-direction: column;
	}

	.grid-container {
		height: 60vh;
		width: 70vh;
		border: solid 1px #000;
		border-radius: 0.3rem;
		padding: 2rem;
		align-self: center;
	}

	header {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background-color: var(--bg-accent-color);
		color: white;
		text-align: center;
		padding: 0.5rem 0;
		grid-column: 1 / -1;
	}

	header {
		border-radius: 0.3rem;
	}

	header h2 {
		font-size: 1.8rem;
		font-weight: 500;
	}

	header p {
		font-size: 1.2rem;
	}
</style>
