<script>
	import { Pie } from 'svelte-chartjs';
	import 'chart.js/auto';
	export let data;
</script>

<Pie {data} options={{ responsive: true }} />
