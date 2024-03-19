"use client"

import DeletePerson from "@/actions/delete-person"
import { useRef } from "react"
import { Trash, X } from "react-feather"
import { toast } from "react-toastify"

export default function DialogDelete({ person, loader, setLoader }) {
	const dialogRef = useRef(null)

	async function deleteHandler(id) {
		if (!await DeletePerson(id)) {
			toast.error("Der skete en fejl. Prøv igen senere.")
			return
		} else {
			toast.success("Personen er blevet slettet.")
			setLoader(!loader)
			dialogRef.current.close()
		}

	}

	return (
		<>
			<button onClick={() => dialogRef.current.showModal()} className="text-center text-black">
				<Trash size={16} />
				<span className="sr-only">Delete</span>
			</button>
			<dialog
				ref={dialogRef}
				className="open:animate-modalf bg-white px-4 py-2 shadow-lg backdrop:bg-black/25 backdrop:backdrop-blur-sm w-[95%] md:w-1/2 lg:w-1/3 rounded-md"
			>
				<header className="flex border-b border-gray-200 pb-2 mb-4"><span className="text-xl font-semibold">Slet</span> <button className="ml-auto" onClick={() => dialogRef.current.close()}><X /></button></header>
				
				<p>Er du sikker på, du vil slette denne person?</p>
				<p><em>{person.name}</em></p>
				
				<div className="flex justify-between gap-4">
					<button type="button" onClick={() => deleteHandler(person._id)} className="grow bg-gradient-to-b from-red-700 to-red-500 shadow-md text-center uppercase font-semibold text-white px-2 py-1 my-4 rounded-md">Delete</button>
					<button type="button" onClick={() => dialogRef.current.close()} className="grow bg-gradient-to-b from-gray-200 to-gray-100 shadow-md text-center uppercase font-semibold text-black px-2 py-1 my-4 rounded-md">Annuller</button>
				</div>
			</dialog>
		</>
	)
}