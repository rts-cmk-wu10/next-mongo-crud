import GetPeople from "@/actions/get-people"
import MainHeading from "@/components/main-heading"
import Link from "next/link"

export default async function Read() {
	const people = await GetPeople()

	return (
		<>
			<MainHeading>Read <span className="text-lg text-gray-600">(Læs)</span></MainHeading>
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