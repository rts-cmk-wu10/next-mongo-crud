"use client"
import { useFormState } from "react-dom"
import CreatePerson from "@/actions/create-person"
import { useEffect, useRef } from "react"
import { Send } from "react-feather"

export default function Create() {
	const [formState, formAction] = useFormState(CreatePerson)
	const formRef = useRef(null)

	useEffect(function() {
		console.log(formState);
		if (formState?.success) {
			formRef.current.reset()
		}
	}, [formState])

	return (
		<>
			<h1 className="text-2xl font-semibold">Create <span className="text-lg text-gray-600">(Opret)</span></h1>
			<form action={formAction} className="w-1/4" ref={formRef}>
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
				<button type="submit" className="flex justify-center gap-2 bg-gradient-to-b from-green-700 to-green-500 shadow-md text-center uppercase font-semibold text-white px-2 py-1 w-full my-4 rounded-md">
					Create <Send />
				</button>
				<span className={`${formState?.success ? "text-green-500" : "text-red-500"}`}>{formState?.success ? "Person was created" : formState?.errors?.message}</span>
			</form>
		</>
	)
}
