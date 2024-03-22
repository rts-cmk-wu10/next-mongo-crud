"use client"

export default function Dialog({ children, dialogRef }) {
	return (
		<dialog
			ref={dialogRef}
			className="open:animate-modalzoom transition-opacity bg-white px-4 py-2 shadow-outline backdrop:bg-black/25 backdrop:backdrop-blur-sm w-[95%] md:w-1/2 lg:w-1/3 rounded-md">
			{children}
		</dialog>
	)
}
