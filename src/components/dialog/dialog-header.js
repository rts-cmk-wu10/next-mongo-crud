"use client"

import { X } from "react-feather"

export default function DialogHeader({ title, dialogRef }) {
	return (
		<header className="flex border-b border-gray-200 pb-2 mb-4">
			<span className="text-xl font-semibold">{title}</span>
			<button className="ml-auto" onClick={() => dialogRef.current.close()}><X /></button>
		</header>
	)
}