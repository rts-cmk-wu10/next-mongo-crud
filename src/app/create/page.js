"use client"
import { useFormState } from "react-dom"
import CreatePerson from "@/actions/create-person"
import { useEffect, useRef } from "react"
import { Send } from "react-feather"
import MainHeading from "@/components/main-heading"
import { toast } from "react-toastify"

export default function Create() {
	const [formState, formAction] = useFormState(CreatePerson)
	const formRef = useRef(null)

	useEffect(function() {
		if (formState && !formState?.success) {
			toast.error("Der skete en fejl. Prøv igen senere.")
			return
		} else if (formState?.success) {
			toast.success("Personen er blevet oprettet.")
			formRef.current.reset()
		}

	}, [formState])

	return (
		<>
			<MainHeading>Create <span className="text-lg text-gray-600">(Opret)</span></MainHeading>
			<form action={formAction} className="w-full md:w-1/2" ref={formRef}>
				<label className="flex flex-col">
					<span>Navn</span>
					<input type="text" name="name" className="border border-gray-300 rounded-md px-2 py-1" />
					<span className="text-red-500 text-sm">{formState?.errors?.name[0]}</span>
				</label>
				<label className="flex flex-col">
					<span>Alder</span>
					<input type="number" name="age" className="border border-gray-300 rounded-md px-2 py-1" />
					<span className="text-red-500 text-sm">{formState?.errors?.age[0]}</span>
				</label>
				<button type="submit" className="flex justify-center items-center gap-2 bg-gradient-to-b from-green-700 to-green-500 shadow-md text-center uppercase font-semibold text-white px-2 py-1 w-full my-4 rounded-md">
					Create <Send size={16} />
				</button>
			</form>
		</>
	)
}
