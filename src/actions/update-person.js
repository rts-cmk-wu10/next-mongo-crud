"use server"

import { z } from "zod"
import { connect, disconnect } from "@/lib/db"
import Person from "@/models/person"

const PersonValidation = z.object({
	name: z.string().min(1, { message: "You must provide a name" }),
	age: z.number().gte(12, { message: "You must be 12 years or older" })
})

export default async function UpdatePerson(prevState, formData) {
	const { name, age, id } = Object.fromEntries(formData.entries())

	const validate = PersonValidation.safeParse({ name, age: Number(age) })
	
	if(!validate.success) return { success: false, errors: validate.error.flatten().fieldErrors }

	try {
		await connect()
	} catch (error) {
		console.error(error)
		return { success: false, error: "Could not connect to database" }
	}

	try {
		await Person.findByIdAndUpdate(id, {name, age})
		await disconnect()
		return { success: true }
	} catch (error) {
		await disconnect()
		console.error(error)
		return { success: false, error: "Could not create person" }
	}
}
