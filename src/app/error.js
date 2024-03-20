"use client"

import Button from "@/components/form-components/button"
import { useEffect } from "react"

export default function Error({ error, reset }) {

	useEffect(function() {
		console.error(error)
	}, [error])

	return (
		<>
			<h1 className="text-3xl lg:text-[6rem] font-semibold text-center lg:mb-20 lg:leading-[6rem]">Ups! Noget gik galt</h1>
			<p className="text-center text-3xl">Der er sket en fejl. Prøv igen senere eller <Button onClick={() => reset()}>klik her</Button>.</p>
		</>
	)
}
