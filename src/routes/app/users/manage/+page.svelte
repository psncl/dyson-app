<script>
	import * as Table from '$lib/components/ui/table';
	import { FilePenLine } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	export let data;
</script>

<div class="mycontainer">
	<header>
		<h2>User Management</h2>
	</header>

	<div class="subcontainer">
		<Table.Root>
			<Table.Header>
				<Table.Row class={'bg-green-600 hover:bg-green-600'}>
					<Table.Head class={'w-[200px] text-gray-50'}>Name</Table.Head>
					<Table.Head class={'text-gray-50'}>User ID</Table.Head>
					<Table.Head class={'text-gray-50'}>Email</Table.Head>
					<Table.Head class={'text-gray-50'}>Role</Table.Head>
					<Table.Head class={'text-center text-gray-50'}>Edit</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each data.users as user, i (i)}
					<Table.Row>
						<Table.Cell class="font-medium">{user.name}</Table.Cell>
						<Table.Cell>{user.userid}</Table.Cell>
						<Table.Cell>{user.email}</Table.Cell>
						<Table.Cell>{user.role}</Table.Cell>
						<!-- <Table.Cell class="text-center">Edit</Table.Cell> -->
						<Table.Cell class="text-center">
							<Button
								variant="outline"
								class={'border-indigo-500 hover:bg-red-700 hover:text-white'}
								><FilePenLine class={'mr-2'} />
								<a href="/app/users/edit/{user.userid}">Edit</a></Button
							>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
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

	.subcontainer {
		margin: 2rem;
	}
</style>
