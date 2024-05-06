<script lang="ts">
	import LogOut from 'lucide-svelte/icons/log-out';
	import { Bolt } from 'lucide-svelte';

	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { name, role, userid } from './userStore';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]}><img src="/user-circle-icon.svg" alt="user-icon" /></Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56 border-y-4 border-y-green-600">
		<!-- <DropdownMenu.Label>Welcome &#123; Username &#125;</DropdownMenu.Label> -->
		<DropdownMenu.Label>Welcome {$name}</DropdownMenu.Label>
		<DropdownMenu.Label>{$role}</DropdownMenu.Label>
		<DropdownMenu.Separator />
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				<Bolt class="mr-2 h-4 w-4" />
				<span>Change Password</span>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<DropdownMenu.Item>
			<LogOut class="mr-2 h-4 w-4" />
			<span>Log out</span>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
