"use server"

import Person from "@/models/person"
import { connect } from "@/lib/db"

export default async function GetPeople() {
	try {
		await connect()
	} catch (error) {
		console.error(error)
		return []
	}

	try {
		const people = await Person.find()
		return JSON.parse(JSON.stringify(people))
	} catch (error) {
		console.error(error)
		return []
	}
}
