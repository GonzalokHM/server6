const {Monument} = require('../models/index');
const {
    findAllDB,
    findByIdDB,
    createInDB,
    updatedByIdInDB,
    deleteFromDB,
  } = require('./index');
  
  const populatePath = { path: 'city', select: 'name' }


  const findAllMonumentsDB = findAllDB(Monument, populatePath);
  const findMonumentByIdDB = findByIdDB(Monument, populatePath);
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