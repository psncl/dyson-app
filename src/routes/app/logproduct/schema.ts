import { z } from 'zod';

const productModelSchema = z.enum(["V12", "V18"]);
const returnReasonSchema = z.enum(["Refund", "Repair", "Recycle"]);
const productConditionSchema = z.enum(["Poor", "Good", "Very Good", "Like New"]);
const sNoLength = 10;

export const formSchema = z.object({
	productmodel: productModelSchema,
	cname: z.string().min(2).max(50).trim().includes(' ', { message: "Must include both a First and Last name"}),
	serialnumber: z.string().length(sNoLength, { message: `Must be exactly ${sNoLength} characters long`}),
	datereturn: z.string().date(),
	dateprocessing: z.string().date(),
	reasonreturn: returnReasonSchema,
	productcondition: productConditionSchema
})

export type FormSchema = typeof formSchema;