"use client"

import DeletePerson from "@/actions/delete-person"
import GetPeople from "@/actions/get-people"
import { useEffect, useState } from "react"
import { Trash } from "react-feather"

export default function Delete() {
	const [people, setPeople] = useState([])
	const [loader, setLoader] = useState(false)

	useEffect(function() {
		(async function() {
			setPeople(await GetPeople())
		})()
	}, [loader])

	async function deleteHandler(id) {
		if (confirm("Er du sikker på, du vil slette denne person?")) {
			await DeletePerson(id)
			setLoader(!loader)
		}
	}

	return (
		<>
			<h1 className="text-2xl font-semibold">Delete <span className="text-lg text-gray-600">(Slet)</span></h1>
			<ul>
				{people?.map(person => (
					<li key={person._id}>
						<button onClick={() => deleteHandler(person._id)} className="bg-gradient-to-b from-red-700 to-red-500 shadow-md text-center uppercase font-semibold text-white px-2 py-1 my-4 rounded-md">
							<Trash />
							<span className="sr-only">Delete</span>
						</button>
						{person.name}, {person.age}
					</li>
				))}
			</ul>
		</>
	)
}