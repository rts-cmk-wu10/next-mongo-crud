"use client"

import GetPeople from "@/actions/get-people"
import GetPerson from "@/actions/get-person"
import DialogEdit from "@/components/dialog-edit"
import MainHeading from "@/components/main-heading"
import { useEffect, useState } from "react"

export default function Update() {
	const [people, setPeople] = useState([])
	const [loader, setLoader] = useState(false)

	useEffect(function () {
		(async function () {
			setPeople(await GetPeople())
		})()
	}, [loader])

	return (
		<>
			<MainHeading>Update <span className="text-lg text-gray-600">(Rediger)</span></MainHeading>
			<ul>
				{people.map(person => (
					<li key={person._id} className="flex items-center gap-2">
						<DialogEdit person={person} loader={loader} setLoader={setLoader} />
						{person.name}, {person.age}
					</li>
				))}
			</ul>
		</>
	)
}
