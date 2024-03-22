import mongoose from "mongoose"

export async function connect() {
	try {
		await mongoose.connect(process.env.MONGO_URI)
	} catch (error) {
		console.error("MongoDB Connection Error", error)
	}
}

export async function disconnect() {
	try {
		await mongoose.disconnect()
	} catch (error) {
		console.error("MongoDB disconnect error", error)
	}
}
