export default function Button({ children, onClick, type="button", color="default" }) {
	let colorClasses = ""

	if (color === "default") {
		colorClasses = "from-blue-700 to-blue-500 text-white"
	} else if (color === "danger") {
		colorClasses = "from-red-700 to-red-500 text-white"
	} else if (color === "success") {
		colorClasses = "from-green-700 to-green-500 text-white"
	} else if (color === "secondary") {
		colorClasses = "from-gray-200 to-gray-100 text-black"
	}
	
	return (
		<button
			type={type}
			onClick={onClick}
			className={`flex justify-center items-center gap-2 w-full grow bg-gradient-to-b ${colorClasses} shadow-md text-center uppercase font-semibold px-2 py-1 my-4 rounded-md`}>
			{children}
		</button>
	)
}
