const {City} = require('../models/index');
const {
  findAllDB,
  findByIdDB,
  createInDB,
  updatedByIdInDB,
  deleteFromDB,
} = require('./index');

const findAllCitiesDB = findAllDB(City);
const findCityByIdDB = findByIdDB(City);
const createCityDB = createInDB(City);
const updateCityDB = updatedByIdInDB(City);
const deleteCityDB = deleteFromDB(City);

const getCityWithMonumentsDB = async (cityId) => {
    const city = await City.findById(cityId).populate('monuments');
    return city;
  };

  const modifyCityMonumentsDB = async (cityId, monumentId) => {
    const city = await City.findById(cityId);
    if (!city) {
      return null;  // Retorna null si la ciudad no existe
    }
    const index = city.monuments.indexOf(monumentId);
    if (index === -1) {
      city.monuments.push(monumentId);  // Añade si no está
    } else {
      city.monuments.splice(index, 1);  // Quita si ya está
    }
    await city.save();
    return city;
  };

module.exports = {
  findAllCitiesDB,
  findCityByIdDB,
  createCityDB,
  updateCityDB,
  deleteCityDB,
  getCityWithMonumentsDB,
  modifyCityMonumentsDB,
};
