import { Schema, model, models } from "mongoose"

const PersonSchema = new Schema({
	name: {
		type: String,
		required: [true, "You must provide a name"]
	},
	age: {
		type: Number
	}
}, { timestamps: true })

export { PersonSchema }

export default models.Person || model("Person", PersonSchema)
