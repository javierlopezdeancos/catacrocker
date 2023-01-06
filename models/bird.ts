import mongoose from "mongoose"

const { Schema } = mongoose

const BirdSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  latinSpeciesName: {
    type: String,
    required: false,
  },
  weight: {
    type: String,
    required: false,
  },
  wingspan: {
    type: String,
    required: false,
  },
  images: {
    type: [String],
    required: false,
  },
})

let BirdModel: any

try {
  BirdModel = mongoose.model("Bird")
} catch (error) {
  BirdModel = mongoose.model("Bird", BirdSchema)
}

export default BirdModel
