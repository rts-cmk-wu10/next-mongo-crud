"use server"

import Person from "@/models/person"
import { connect, disconnect } from "@/lib/db"

export default async function DeletePerson(id) {
	try {
		await connect()
	} catch (error) {
		console.error(error)
		return { success: false, error: "Could not connect to database" }
	}

	await Person.findByIdAndDelete(id)

	await disconnect()
}