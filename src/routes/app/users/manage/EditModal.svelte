<script>
	import { onMount } from 'svelte';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	export let userData;
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="outline"
			class={'border-indigo-500 hover:bg-red-700 hover:text-white'}>Edit</Button
		>
	</Sheet.Trigger>
	<Sheet.Content side="right">
		<Sheet.Header>
			<Sheet.Title>Edit User</Sheet.Title>
			<Sheet.Description
				>You may change the Name, Email or Password.<br /><br />User ID cannot be changed.</Sheet.Description
			>
		</Sheet.Header>
		<div class="grid gap-4 py-4">
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="userid" class="text-right">User ID</Label>
				<Input id="userid" value={userData.userid} class="col-span-3" disabled />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="name" class="text-right">Name</Label>
				<Input id="name" value={userData.name} class="col-span-3" />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="email" class="text-right">Email</Label>
				<Input id="email" value={userData.email} class="col-span-3" />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="pwd1" class="text-right">Password</Label>
				<Input id="pwd1" type="password" placeholder="Enter new password" class="col-span-3" />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="pwd2" class="text-right"></Label>
				<Input id="pwd2" type="password" placeholder="Confirm new password" class="col-span-3" />
			</div>
		</div>
		<Sheet.Footer>
			<Sheet.Close asChild let:builder>
				<Button builders={[builder]} type="submit">Save changes</Button>
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
