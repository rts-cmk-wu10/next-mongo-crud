import mongoose from "mongoose"

export async function connect() {
	try {
		await mongoose.connect(process.env.MONGO_URI)
		console.log("MongoDB connected")
	} catch (error) {
		console.error("MongoDB Connection Error", error)
	}
}

export async function disconnect() {
	try {
		await mongoose.disconnect()
		console.log("MongoDB disconnected")
	} catch (error) {
		console.error("MongoDB disconnect error", error);
	}
}
