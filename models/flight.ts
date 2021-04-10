import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  registration: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  airplane: {
    type: String,
    required: false,
  },
});

let flightModel:any

try {
  flightModel = mongoose.model('Flight')
} catch (error) {
  flightModel = mongoose.model('Flight', flightSchema)
}

export default flightModel;
