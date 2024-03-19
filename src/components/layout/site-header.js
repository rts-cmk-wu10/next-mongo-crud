"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SiteHeader() {
	const pathname = usePathname()

	return (
		<header className="flex px-[16rem] py-4 bg-cyan-700 text-white shadow-lg">
			<Link href="/" className="text-xl font-semibold">CRUD med MongoDB & NextJS</Link>
			<nav className="ml-auto">
				<ul className="flex gap-4 font-semibold">
					<li><Link href="/create" className={pathname === "/create" ? "underline underline-offset-8 text-orange-300" : null}>Create</Link></li>
					<li><Link href="/read" className={pathname === "/read" ? "underline underline-offset-8 text-orange-300" : null}>Read</Link></li>
					<li><Link href="/update" className={pathname === "/update" ? "underline underline-offset-8 text-orange-300" : null}>Update</Link></li>
					<li><Link href="/delete" className={pathname === "/delete" ? "underline underline-offset-8 text-orange-300" : null}>Delete</Link></li>
				</ul>
			</nav>
		</header>
	)
}
