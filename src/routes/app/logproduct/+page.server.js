import { superValidate } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions = {
	default: async ({ event, cookies }) => {
		const form = await superValidate(event, zod(formSchema));

		// console.log(form.data);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		return {
			form
		};
	}
};
