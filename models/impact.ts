import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const datesSchema = new Schema({
  local: {
    type: Date,
    required: true
  },
  utc: {
    type: Date,
    required: true
  },
});

const impactSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  airport: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  bird: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  flight: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  dates: {
    type: datesSchema,
    required: true
  },
  images: {
    type: [String],
    required: false
  },
});

let impactModel:any

try {
  impactModel = mongoose.model('Impact')
} catch (error) {
  impactModel = mongoose.model('Impact', impactSchema)
}

export default impactModel;
