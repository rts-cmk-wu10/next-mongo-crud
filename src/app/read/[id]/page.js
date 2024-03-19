import GetPerson from "@/actions/get-person"
import Link from "next/link"

export default async function ReadOne({ params }) {
	const { id } = params

	const person = await GetPerson(id)

	return (
		<>
			<h1 className="text-2xl font-semibold">Read <span className="text-lg text-gray-600">(Læs)</span></h1>
			<p>{person.name}, {person.age}</p>
			<hr />
			<Link href="/read">&larr; Tilbage</Link>
		</>
	)
}
