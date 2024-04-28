const {Monument} = require('../models/index');
const {
    findAllDB,
    findByIdDB,
    createInDB,
    updatedByIdInDB,
    deleteFromDB,
  } = require('./index');
  
  const findAllMonumentsDB = findAllDB(Monument);
  const findMonumentByIdDB = findByIdDB(Monument);
  const createMonumentDB = createInDB(Monument);
  const updateMonumentDB = updatedByIdInDB(Monument);
  const deleteMonumentDB = deleteFromDB(Monument);

const findMonumentWithCityDB = async (monumentId) => {
    const monument = await Monument.findById(monumentId).populate('city');
    return monument;
  };

const changeCityOfMonumentDB = async (monumentId, newCityId) => {
  const updatedMonument = await Monument.findByIdAndUpdate(monumentId, { city: newCityId }, { new: true });
  return updatedMonument;
};

module.exports = {
  findAllMonumentsDB,findMonumentByIdDB,createMonumentDB,updateMonumentDB,deleteMonumentDB,
  findMonumentWithCityDB, changeCityOfMonumentDB
};