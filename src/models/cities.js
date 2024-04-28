const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    population: { type: Number, required: true },
    monuments: [{ type: Schema.Types.ObjectId, ref: 'Monument' }]
  },
  { strict: false },
  {timestamps: true},
);

module.exports = citySchema