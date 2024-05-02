const {City} = require('../models/index');
const {
  findAllDB,
  findByIdDB,
  createInDB,
  updatedByIdInDB,
  deleteFromDB,
} = require('./index');

const populatePath ={ path: 'monuments', select: 'name' }

const findAllCitiesDB = findAllDB(City, populatePath);
const findCityByIdDB = findByIdDB(City, populatePath);
const createCityDB = createInDB(City);
const updateCityDB = updatedByIdInDB(City);
const deleteCityDB = deleteFromDB(City);

const addMonumentToCity = async (cityId, monumentId) => {
  await City.updateOne(
    { _id: cityId },
    { $push: { monuments: monumentId } }
  );
};

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
  addMonumentToCity
};
