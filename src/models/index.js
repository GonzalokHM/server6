const mongoose = require('mongoose');
const citySchema = require('./cities');
const monumentSchema = require('./monuments');

const City = mongoose.model('city', citySchema);
const Monument = mongoose.model('monument', monumentSchema);

module.exports = {
  City,
  Monument,
};
