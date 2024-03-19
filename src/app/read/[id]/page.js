import GetPerson from "@/actions/get-person"
import MainHeading from "@/components/main-heading"
import Link from "next/link"
import { ArrowLeft } from "react-feather"

export default async function ReadOne({ params }) {
	const { id } = params

	const person = await GetPerson(id)

	return (
		<>
			<MainHeading>Read <span className="text-lg text-gray-600">(Læs)</span></MainHeading>
			<p>{person.name}, {person.age}</p>
			<hr className="my-2" />
			<Link href="/read" className="flex items-center gap-2"><ArrowLeft size={16} /> Tilbage</Link>
		</>
	)
}
