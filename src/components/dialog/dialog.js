"use client"

export default function Dialog({ children, dialogRef }) {
	return (
		<dialog
			onClick={e => dialogRef.current.close()}
			ref={dialogRef}
			className="open:animate-modalzoom transition-opacity bg-white shadow-outline backdrop:bg-black/25 backdrop:backdrop-blur-sm w-[95%] md:w-1/2 lg:w-1/3 rounded-md">
			<div className="w-full h-full px-4 py-2" onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</dialog>
	)
}
