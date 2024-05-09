<!-- 
	Use the Table component from shadcn-svelte to create a filterable table.
	Populate the table with data from +page.server.js

	@author: Pushkar Sinha
	@date: 09 May 2024
 -->

<script>
	import * as Table from '$lib/components/ui/table';
	import { FilePenLine } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import EditModal from './EditModal.svelte';

	export let data;
</script>

<div class="mycontainer">
	<header>
		<h2>User Management</h2>
	</header>

	<div class={'subcontainer flex flex-col gap-3'}>
		<a href="/app/users/createnew" class={'add-button self-end'}>
			<Button class={'text-black-700 bg-green-600 text-lg hover:bg-black hover:text-white'}
				>&#8853; Add New User</Button
			>
		</a>

		<Table.Root>
			<Table.Header>
				<Table.Row class={'bg-green-600 hover:bg-green-600'}>
					<Table.Head class={'w-[200px] text-gray-50'}>Name</Table.Head>
					<Table.Head class={'text-gray-50'}>UID</Table.Head>
					<Table.Head class={'text-gray-50'}>Username</Table.Head>
					<Table.Head class={'text-gray-50'}>Email</Table.Head>
					<Table.Head class={'text-gray-50'}>Role</Table.Head>
					<Table.Head class={'text-center text-gray-50'}>Edit</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each data.allusers as user, i (i)}
					<Table.Row>
						<Table.Cell class="font-medium">{user.loginName}</Table.Cell>
						<Table.Cell>{user.uid}</Table.Cell>
						<Table.Cell>{user.userName}</Table.Cell>
						<Table.Cell>{user.email}</Table.Cell>
						<Table.Cell>{user.role}</Table.Cell>
						<Table.Cell class="text-center">
							<EditModal userData={user} />
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
