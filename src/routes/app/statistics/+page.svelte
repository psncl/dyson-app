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
	<div class="return-table">
		<div class="rt-header">
			<div>Product</div>
			<div>Quantity</div>
			<div>Reason of Return</div>
			<div>Condition</div>
		</div>
		<div class="rt-cell">
			<div>Dyson V12</div>
			<div>104</div>
			<div>54% Refund<br />17% Recycle<br />29% Repair</div>
			<div>10% New<br />50% Used<br />40% Poor</div>
		</div>
		<div class="rt-cell">
			<div>Dyson Ball Animal</div>
			<div>54</div>
			<div>15% Refund<br />25% Recycle<br />60% Repair</div>
			<div>10% New<br />50% Used<br />40% Poor</div>
		</div>
		<div class="rt-cell">
			<div>Dyson V15s</div>
			<div>25</div>
			<div>20% Refund<br />22% Recycle<br />58% Repair</div>
			<div>5% New<br />60% Used<br />35% Poor</div>
		</div>
	</div>
</div>

<style>
	@import '$lib/app.css';

	.mycontainer {
		width: 60%;
		margin: 2rem auto 0 auto;
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
		/* margin-top: 2rem; */
	}

	.return-graph {
		width: 20rem;
	}

	.return-graph h2 {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	.return-table {
		display: grid;
		grid-template-rows: 1fr 2fr 2fr 2fr;
		padding: 2rem 10rem 2rem 10rem;
	}

	.rt-header,
	.rt-cell {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		border-bottom: 1px solid black;
		border-radius: 0.5rem;
	}

	.rt-header div {
		font-size: 1.5rem;
	}

	.rt-cell div {
		font-size: 1.2rem;
	}

	:is(.rt-header, .rt-cell) div {
		padding: 0.5rem 0;
		text-align: center;
		align-self: center;
	}

	.rt-header {
		background-color: var(--bg-accent-color);
		color: #fff;
	}
</style>
