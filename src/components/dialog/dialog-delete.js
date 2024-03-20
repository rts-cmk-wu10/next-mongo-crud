"use client"

import DeletePerson from "@/actions/delete-person"
import { useRef } from "react"
import { Trash } from "react-feather"
import { toast } from "react-toastify"
import Button from "../form-components/button"
import Dialog from "./dialog"
import DialogHeader from "./dialog-header"

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
			<Dialog
				dialogRef={dialogRef}>
				<DialogHeader title="Slet person" dialogRef={dialogRef} />
				
				<p>Er du sikker på, du vil slette denne person?</p>
				<p><em>{person.name}</em></p>
				
				<div className="flex justify-between gap-4">
					<Button onClick={() => deleteHandler(person._id)} color="danger">Delete</Button>
					<Button onClick={() => dialogRef.current.close()} color="secondary">Annuller</Button>
				</div>
			</Dialog>
		</>
	)
}
