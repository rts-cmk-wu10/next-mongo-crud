import GetPeople from "@/actions/get-people"
import Link from "next/link"

export default async function Read() {
	const people = await GetPeople()

	return (
		<>
			<h1 className="text-2xl font-semibold">Read <span className="text-lg text-gray-600">(Læs)</span></h1>
			<ul>
				{people.map(person => (
					<li key={person._id}>
						<Link href={`/read/${person._id}`} className="hover:underline">{person.name}, {person.age}</Link>
					</li>
				))}
			</ul>
		</>
	)
}