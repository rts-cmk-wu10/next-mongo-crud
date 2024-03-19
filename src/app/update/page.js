"use client"

import GetPeople from "@/actions/get-people"
import GetPerson from "@/actions/get-person"
import UpdatePerson from "@/actions/update-person"
import { useEffect, useRef, useState } from "react"
import { X, Edit } from "react-feather"
import { useFormState } from "react-dom"

export default function Update() {
	const [people, setPeople] = useState([])
	const [person, setPerson] = useState({})
	const [loader, setLoader] = useState(false)
	const [formState, formAction] = useFormState(UpdatePerson)
	const dialogRef = useRef(null)

	useEffect(function () {
		(async function () {
			setPeople(await GetPeople())
		})()
	}, [loader])

	useEffect(function() {
		if (formState?.success) {
			setLoader(!loader)
			setPerson({})
			dialogRef.current.close()
		}
	}, [formState])

	async function updateForm(id) {
		setPerson(await GetPerson(id))
		dialogRef.current.showModal()
	}

	return (
		<>
			<h1 className="text-2xl font-semibold">Update <span className="text-lg text-gray-600">(Rediger)</span></h1>
			<ul>
				{people.map(person => (
					<li key={person._id}>
						<button onClick={() => updateForm(person._id)} className="bg-gradient-to-b from-blue-700 to-blue-500 shadow-md text-center uppercase font-semibold text-white px-2 py-1 my-4 rounded-md">
							<Edit />
							<span className="sr-only">Update</span>
						</button>
						{person.name}, {person.age}
					</li>
				))}
			</ul>
			<dialog
				ref={dialogRef}
				className="bg-white px-4 py-2 shadow-lg backdrop:bg-black/25 backdrop:backdrop-blur-sm w-1/4 rounded-md"
			>
				<header className="flex border-b border-gray-200 pb-2 mb-4"><span className="text-xl font-semibold">Rediger</span> <button className="ml-auto" onClick={() => dialogRef.current.close()}><X /></button></header>

				<form action={formAction}>
					<input type="hidden" name="id" value={person._id} />
					<label className="flex flex-col">
						<span>Navn</span>
						<input type="text" defaultValue={person.name} name="name" className="border border-gray-300 rounded-md px-2 py-1" />
						<span className="text-red-500 text-sm">{formState?.errors?.name[0]}</span>
					</label>
					<label className="flex flex-col">
						<span>Alder</span>
						<input type="number" defaultValue={person.age} name="age" className="border border-gray-300 rounded-md px-2 py-1" />
						<span className="text-red-500 text-sm">{formState?.errors?.age[0]}</span>
					</label>
					<div className="flex justify-between gap-4">
						<button type="submit" className="grow bg-gradient-to-b from-blue-700 to-blue-500 shadow-md text-center uppercase font-semibold text-white px-2 py-1 my-4 rounded-md">Update</button>
						<button type="button" onClick={() => dialogRef.current.close()} className="grow bg-gradient-to-b from-gray-200 to-gray-100 shadow-md text-center uppercase font-semibold text-black px-2 py-1 my-4 rounded-md">Annuller</button>
					</div>
					<span className="text-red-500">{formState?.errors?.message}</span>
				</form>

			</dialog>
		</>
	)
}
