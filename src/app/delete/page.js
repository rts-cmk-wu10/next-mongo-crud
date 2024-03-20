"use client"

import GetPeople from "@/actions/get-people"
import DialogDelete from "@/components/dialog/dialog-delete"
import MainHeading from "@/components/text-components/main-heading"
import { useEffect, useState } from "react"

export default function Delete() {
	const [people, setPeople] = useState([])
	const [loader, setLoader] = useState(false)

	useEffect(function() {
		(async function() {
			setPeople(await GetPeople())
		})()
	}, [loader])

	return (
		<>
			<MainHeading>Delete <span className="text-lg text-gray-600">(Slet)</span></MainHeading>
			<ul>
				{people?.map(person => (
					<li key={person._id} className="flex items-center gap-2">
						<DialogDelete person={person} loader={loader} setLoader={setLoader} />
						{person.name}, {person.age}
					</li>
				))}
			</ul>
		</>
	)
}
