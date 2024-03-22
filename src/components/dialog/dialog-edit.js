"use client"

import { Edit } from "react-feather"
import { useFormState } from "react-dom"
import { useEffect, useRef } from "react"
import UpdatePerson from "@/actions/update-person"
import { toast } from "react-toastify"
import Input from "../form-components/input"
import Button from "../form-components/button"
import Dialog from "./dialog"
import DialogHeader from "./dialog-header"

export default function DialogEdit({ person, loader, setLoader }) {
	const [formState, formAction] = useFormState(UpdatePerson)
	const dialogRef = useRef(null)

	useEffect(function () {
		if (formState?.success) {
			toast.success("Personen er blevet opdateret.")
			setLoader(!loader)
			dialogRef.current.close()
		}
	}, [formState])

	return (
		<>
			<button onClick={() => dialogRef.current.showModal()} className="text-center text-black">
				<Edit size={16} />
				<span className="sr-only">Update</span>
			</button>
			<Dialog	dialogRef={dialogRef}>
				<DialogHeader title="Rediger person" dialogRef={dialogRef} />

				<form action={formAction} noValidate>
					<input type="hidden" name="id" value={person._id} />
					<Input label="Navn" name="name" value={person.name} statusMessage={formState?.errors?.name} />
					<Input label="Alder" name="age" type="number" value={person.age} statusMessage={formState?.errors?.age} />
					<div className="flex justify-between gap-4">
						<Button type="submit" color="default">Update</Button>
						<Button type="button" onClick={() => dialogRef.current.close()} color="secondary">Annuller</Button>
					</div>
					<span className="text-red-500">{formState?.error?.message}</span>
				</form>
			</Dialog>
		</>
	)
}
