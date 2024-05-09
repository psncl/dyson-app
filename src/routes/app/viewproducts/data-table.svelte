<!-- 
	Use the Table component from shadcn-svelte to create a filterable table.
	Populate the table with data passed from +page.svelte

	@author: Pushkar Sinha
	@date: 09 May 2024
 -->

<script>
	import { createTable, Render, Subscribe, createRender } from 'svelte-headless-table';
	import { readable } from 'svelte/store';
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import { addPagination, addSortBy, addTableFilter } from 'svelte-headless-table/plugins';
	import ArrowUpDown from 'lucide-svelte/icons/arrow-up-down';
	import { Input } from '$lib/components/ui/input';
	import { onMount } from 'svelte';

	// import { data } from './data.js';
	export let data;

	const table = createTable(readable(data), {
		page: addPagination(),
		sort: addSortBy(),
		filter: addTableFilter({
			fn: ({ filterValue, value }) => value.toLowerCase().includes(filterValue.toLowerCase())
		})
	});

	const columns = table.createColumns([
		table.column({
			accessor: 'serialNumber',
			header: 'Serial Number'
		}),

		table.column({
			accessor: 'productName',
			header: 'Product Name'
		}),
		table.column({
			accessor: 'customerName',
			header: 'Customer Name'
		}),
		table.column({
			accessor: 'returnDate',
			header: 'Returned On',
			filter: {
				exclude: true
			}
		}),
		table.column({
			accessor: 'processingDate',
			header: 'Processed On',
			filter: {
				exclude: true
			}
		}),
		table.column({
			accessor: 'returnReason',
			header: 'Reason'
		}),
		table.column({
			accessor: 'pid',
			header: 'Edit'
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } =
		table.createViewModel(columns);

	const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
	const { filterValue } = pluginStates.filter;
</script>

<div>
	<div class="flex items-center py-4">
		<Input class="max-w-sm" placeholder="Filter..." type="text" bind:value={$filterValue} />
	</div>
	<div class="rounded-md border">
		<Table.Root {...$tableAttrs}>
			<Table.Header class={'bg-green-600'}>
				{#each $headerRows as headerRow}
					<Subscribe rowAttrs={headerRow.attrs()}>
						<Table.Row>
							{#each headerRow.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
									<Table.Head {...attrs} class={'text-gray-50'}>
										<Render of={cell.render()} />
										<Button variant="ghost" on:click={props.sort.toggle}>
											<ArrowUpDown class={'ml-2 h-4 w-4'} />
										</Button>
									</Table.Head>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Header>
			<Table.Body {...$tableBodyAttrs}>
				{#each $pageRows as row (row.id)}
					<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
						<Table.Row {...rowAttrs}>
							{#each row.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs>
									<Table.Cell {...attrs}>
										{#if cell.id === 'pid'}
											<a href="/app/itemdetails/{cell.render()}" class={'text-blue-700'}>
												<!-- <Render of={cell.render()} /> -->
												Edit</a
											>
										{:else}
											<Render of={cell.render()} />
										{/if}
									</Table.Cell>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<div class="flex items-center justify-center space-x-4 py-4">
		<Button
			variant="outline"
			size="sm"
			on:click={() => ($pageIndex = $pageIndex - 1)}
			disabled={!$hasPreviousPage}>Previous</Button
		>
		<Button
			variant="outline"
			size="sm"
			disabled={!$hasNextPage}
			on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
		>
	</div>
</div>
