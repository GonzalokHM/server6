const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monumentoSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    ubication: { type: String, required: true },
    City: { type: Schema.Types.ObjectId, ref: 'City' },
  },
  { strict: false },
  { timestamps: true }
);

module.exports = monumentoSchema;
