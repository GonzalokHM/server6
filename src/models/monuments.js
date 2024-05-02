const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monumentoSchema = new Schema(
  {
    name: { type: String, required: true },
    city: { type: mongoose.Types.ObjectId, ref: 'city' },
    ubication: { type: String },
    description: { type: String },
  },
  { strict: false, collection: 'monuments', timestamps: true }
);

module.exports = monumentoSchema;
