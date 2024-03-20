"use client"
import { useFormState } from "react-dom"
import CreatePerson from "@/actions/create-person"
import { useEffect, useRef } from "react"
import { Send } from "react-feather"
import MainHeading from "@/components/text-components/main-heading"
import { toast } from "react-toastify"
import Input from "@/components/form-components/input"
import Button from "@/components/form-components/button"

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
				<Input label="Navn" name="name" statusMessage={formState?.errors?.name[0]} />
				<Input label="Alder" name="age" type="number" statusMessage={formState?.errors?.age[0]} />
				<Button type="submit" color="success">Create <Send size={16} /></Button>
			</form>
		</>
	)
}
