<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;

	let productModels = ['V12', 'V18', 'V21'];
	let reasons = ['refund', 'repair', 'recycle'];
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	$: selectedModel = $formData.productmodel
		? {
				label: $formData.productmodel,
				value: $formData.productmodel
			}
		: undefined;
</script>

<form method="POST" use:enhance class="flex items-end gap-4">
	<Form.Field {form} name="productmodel">
		<Form.Control let:attrs>
			<Form.Label>Product Model</Form.Label>
			<Select.Root
				selected={selectedModel}
				onSelectedChange={(v) => {
					v && ($formData.productmodel = v.value);
				}}
			>
				<Select.Trigger {...attrs} class="w-[180px]">
					<Select.Value placeholder="Select product model..." />
				</Select.Trigger>
				<Select.Content>
					{#each productModels as model (model)}
						<Select.Item value={model}>{capitalizeFirstLetter(model)}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="cname">
		<Form.Control let:attrs>
			<Input {...attrs} bind:value={$formData.cname} placeholder="Customer Name" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button class="mb-2">Submit</Form.Button>
</form>
