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

	const handleSubmit = () => {
		console.log($formData);
	};

	function capitalizeFirstLetter(string: String) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	let productModels = ['V12', 'V18', 'V21'];
	$: selectedModel = $formData.productmodel
		? {
				label: $formData.productmodel,
				value: $formData.productmodel
			}
		: undefined;

	let reasons = ['refund', 'repair', 'recycle'];
</script>

<form method="POST" use:enhance class="flex items-end gap-4" on:submit={handleSubmit}>
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

	<Form.Field {form} name="serialnumber">
		<Form.Control let:attrs>
			<Input {...attrs} bind:value={$formData.serialnumber} placeholder="Serial Number" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="datereturn">
		<Form.Control let:attrs>
			<Form.Label>Date of Return</Form.Label>
			<br />
			<input class="datepicker" type="date" bind:value={$formData.datereturn} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="dateprocessing">
		<Form.Control let:attrs>
			<Form.Label>Date of Processing</Form.Label>
			<br />
			<input class="datepicker" type="date" bind:value={$formData.dateprocessing} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button class="mb-2" on:submit={handleSubmit}>Submit</Form.Button>
</form>

<style>
	.datepicker {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #5a5a5a;
		height: 2rem;
		padding: 0.5rem 0.75rem;
		height: 2.5rem;
		border: 1px solid rgb(226, 232, 240);
		border-radius: 6px;
	}
</style>
