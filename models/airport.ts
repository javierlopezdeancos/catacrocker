import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const airportSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  iata: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: false,
    default: 'Spain'
  },
  region: {
    type: String,
    required: false
  },
  images: {
    type: [String],
    required: false
  },
});

let airportModel:any

try {
  airportModel = mongoose.model('Airport')
} catch (error) {
  airportModel = mongoose.model('Airport', airportSchema)
}

export default airportModel;
