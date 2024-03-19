"use server"

import Person from "@/models/person"
import { connect, disconnect } from "@/lib/db"

export default async function GetPeople() {
	try {
		await connect()
	} catch (error) {
		console.error(error)
		return { success: false, error: "Could not connect to database" }
	}

	const people = await Person.find()

	await disconnect()

	return JSON.parse(JSON.stringify(people))
}
