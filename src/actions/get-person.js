"use server"

import Person from "@/models/person"
import { connect, disconnect } from "@/lib/db"

export default async function GetPerson(id) {
	try {
		await connect()
	} catch (error) {
		console.error(error)
		return false
	}

	try {
		const person = await Person.findById(id)
		await disconnect()
		return JSON.parse(JSON.stringify(person))
	} catch (error) {
		await disconnect()
		console.error(error)
		return false
	}
}
