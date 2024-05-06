<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import { formSchema, type FormSchema } from './schema';
	import SuperDebug, { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	export let data: SuperValidated<Infer<FormSchema>>;
	let itemAddedStatus = false;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});
	const { form: formData, enhance } = form;

	const handleSubmit = async () => {
		const fdata = $formData;
		const response = await fetch('/app/logproduct', {
			method: 'POST',
			body: JSON.stringify({ fdata }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const res = await response.json();
		if (res.code === 200) {
			itemAddedStatus = true;

			setTimeout(function () {
				itemAddedStatus = false;
			}, 1000);
		}
	};

	let productModels = [
		'Dyson Gen5detect',
		'Dyson V15s Detect Submarine',
		'Dyson V15 Detect Absolute',
		'Dyson V12 Detect Slim Absolute',
		'Dyson V11',
		'Dyson Cyclone V10 Absolute',
		'Dyson V8',
		'Dyson Ball Animal Origin',
		'Dyson Ball Animal',
		'Dyson Ball Animal Multi-floor',
		'Dyson Ball Animal Complete'
	];
	$: selectedModel = $formData.productName
		? {
				label: $formData.productName,
				value: $formData.productName
			}
		: undefined;

	let reasons = ['Refund', 'Repair', 'Recycle'];
	$: selectedReason = $formData.returnReason
		? {
				label: $formData.returnReason,
				value: $formData.returnReason
			}
		: undefined;

	let productConditions = ['New', 'Used', 'Poor'];
	$: selectedCondition = $formData.productCondition
		? {
				label: $formData.productCondition,
				value: $formData.productCondition
			}
		: undefined;
</script>

<!-- <SuperDebug data={formData} /> -->

<form method="POST" use:enhance class="flex flex-col gap-4" on:submit={handleSubmit}>
	<Form.Field {form} name="productmodel">
		<Form.Control let:attrs>
			<Form.Label>Product Model</Form.Label>
			<Select.Root
				selected={selectedModel}
				onSelectedChange={(v) => {
					v && ($formData.productName = v.value);
				}}
			>
				<Select.Trigger {...attrs} class="w-[180px]">
					<Select.Value placeholder="Select product model..." />
				</Select.Trigger>
				<Select.Content>
					{#each productModels as model (model)}
						<Select.Item value={model}>{model}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="cname">
		<Form.Control let:attrs>
			<Input {...attrs} bind:value={$formData.customerName} placeholder="Customer Name" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="serialnumber">
		<Form.Control let:attrs>
			<Input
				{...attrs}
				bind:value={$formData.serialNumber}
				maxlength="10"
				placeholder="Serial Number"
			/>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="datereturn">
		<Form.Control let:attrs>
			<Form.Label>Date of Return</Form.Label>
			<br />
			<input class="datepicker" type="date" bind:value={$formData.returnDate} required />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="dateprocessing">
		<Form.Control let:attrs>
			<Form.Label>Date of Processing</Form.Label>
			<br />
			<input class="datepicker" type="date" bind:value={$formData.processingDate} required />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="reasonreturn">
		<Form.Control let:attrs>
			<Form.Label>Reason for Return</Form.Label>
			<Select.Root
				selected={selectedReason}
				onSelectedChange={(v) => {
					v && ($formData.returnReason = v.value);
				}}
			>
				<Select.Trigger {...attrs} class="w-[180px]">
					<Select.Value placeholder="Select reason for return..." />
				</Select.Trigger>
				<Select.Content>
					{#each reasons as reason (reason)}
						<Select.Item value={reason}>{reason}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="productcondition">
		<Form.Control let:attrs>
			<Form.Label>Product Condition</Form.Label>
			<Select.Root
				selected={selectedCondition}
				onSelectedChange={(v) => {
					v && ($formData.productCondition = v.value);
				}}
			>
				<Select.Trigger {...attrs} class="w-[180px]">
					<Select.Value placeholder="Select product condition..." />
				</Select.Trigger>
				<Select.Content>
					{#each productConditions as productCondition (productCondition)}
						<Select.Item value={productCondition}>{productCondition}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button class="mb-2">Submit</Form.Button>
	{#if itemAddedStatus}
		<span class="item-added">Item added successfully</span>
	{/if}
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

	.item-added {
		color: green;
		font-size: 1.5rem;
	}
</style>
