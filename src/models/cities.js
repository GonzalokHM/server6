const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: { type: String, required: true },
    country: { type: String },
    population: { type: Number},
    monuments: [{ type: mongoose.Types.ObjectId, ref: 'monument' }]
  },
  { strict: false, 
  collection: 'cities',
  timestamps: true},
);

module.exports = citySchema