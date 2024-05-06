import { z } from 'zod';

const productModelSchema = z.enum(["Dyson Gen5detect", "Dyson V15s Detect Submarine", "Dyson V15 Detect Absolute", "Dyson V12 Detect Slim Absolute",
"Dyson V11", "Dyson Cyclone V10 Absolute", "Dyson V8", "Dyson Ball Animal Origin", "Dyson Ball Animal", "Dyson Ball Animal Multi-floor", "Dyson Ball Animal Complete"]);
const returnReasonSchema = z.enum(["Refund", "Repair", "Recycle"]);
const productConditionSchema = z.enum(["New", "Used", "Poor"]);
const sNoLength = 10;

export const formSchema = z.object({
	productmodel: productModelSchema,
	cname: z.string().min(2).max(50).trim().includes(' ', { message: "Must include both a First and Last name"}),
	serialnumber: z.string().trim().length(sNoLength, { message: `Must be exactly ${sNoLength} characters long`}),
	datereturn: z.string(),
	dateprocessing: z.string(),
	reasonreturn: returnReasonSchema,
	productcondition: productConditionSchema
})

export type FormSchema = typeof formSchema;