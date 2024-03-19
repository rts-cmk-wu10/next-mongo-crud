"use client"

import { Edit, X } from "react-feather"
import { useFormState } from "react-dom"
import { useEffect, useRef } from "react"
import UpdatePerson from "@/actions/update-person"
import { toast } from "react-toastify"

export default function DialogEdit({ person, loader, setLoader }) {
	const [formState, formAction] = useFormState(UpdatePerson)
	const dialogRef = useRef(null)

	useEffect(function () {
		if (formState && !formState?.success) {
			toast.error("Der skete en fejl. Prøv igen senere.")
			return
		} else if (formState?.success) {
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
			<dialog
				ref={dialogRef}
				className="open:animate-modalf transition-opacity bg-white px-4 py-2 shadow-lg backdrop:bg-black/25 backdrop:backdrop-blur-sm w-[95%] md:w-1/2 lg:w-1/3 rounded-md"
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