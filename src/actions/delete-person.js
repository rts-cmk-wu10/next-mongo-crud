"use server"

import Person from "@/models/person"
import { connect, disconnect } from "@/lib/db"

export default async function DeletePerson(id) {
	try {
		await connect()
	} catch (error) {
		console.error(error)
		return false
	}

	try {
		await Person.findByIdAndDelete(id)
		await disconnect()
		return true
	} catch (error) {
		console.error(error)
		await disconnect()
		return false
	}
}
