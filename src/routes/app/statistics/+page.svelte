<script>
	import Pie from './Pie.svelte';
	import { data } from './data.js';
</script>

<div class="mycontainer">
	<header>
		<h2>Inventory Statistics</h2>
	</header>

	<div class="graphs">
		<div class="return-graph">
			<h2>Reason of Return</h2>
			<Pie data={data.reasonReturnData} />
		</div>
		<div class="return-graph">
			<h2>Product Condition</h2>
			<Pie data={data.productConditionData} />
		</div>
	</div>
</div>

<style>
	@import '$lib/app.css';

	.mycontainer {
		width: 60%;
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

	.graphs {
		display: flex;
		justify-content: space-around;
		margin-top: 2rem;
	}

	.return-graph {
		width: 20rem;
	}

	.return-graph h2 {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 1rem;
	}
</style>
