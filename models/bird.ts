import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const birdSchema = new Schema({
  species: {
    type: String,
    required: true
  },
  latinSpeciesName: {
    type: String,
    required: false
  },
  weight: {
    type: String,
    required: false
  },
  wingspan: {
    type: String,
    required: false
  },
  images: {
    type: [String],
    required: false
  },
});

let birdModel:any

try {
  birdModel = mongoose.model('Bird')
} catch (error) {
  birdModel = mongoose.model('Bird', birdSchema)
}

export default birdModel;
