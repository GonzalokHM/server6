const{
    findAllCitiesDB,
    findCityByIdDB,
    createCityDB,
    updateCityDB,
    deleteCityDB,
    getCityWithMonumentsDB,
    modifyCityMonumentsDB,
  } = require('../repositories/city')

const getAllCities = async (req, res) => {
  try {
    const query = req.query;  
    const cities = await findAllCitiesDB(query);
    res.json(cities);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCityById = async (req, res) => {
  try {
    const city = await findCityByIdDB(req.params.id);
    if (!city) {
      return res.status(404).send('City not found');
    }
    res.json(city);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createCity = async (req, res) => {
  try {
    const newCity =  await createCityDB(req.body);
    res.status(201).json(newCity);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateCity = async (req, res) => {
  try {
    const updatedCity = await updateCityDB(req.params.id, req.body);
    if (!updatedCity) {
      return res.status(404).send('City not found');
    }
    res.json(updatedCity);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteCity = async (req, res) => {
  try {
    const deletedCity = await deleteCityDB(req.params.id);
    if (!deletedCity) {
      return res.status(404).send('City not found');
    }
    res.send('City deleted');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCityWithMonuments = async (req, res) => {
  try {
    const city = await getCityWithMonumentsDB(req.params.id);
    if (!city) {
      return res.status(404).send('City not found');
    }
    res.json(city);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const modifyCityMonuments = async (req, res) => {
  try {
    const { cityId, monumentId } = req.params;
    const city = await modifyCityMonumentsDB(cityId, monumentId);
    if (!city) {
      return res.status(404).send('City not found');
    }
    res.json(city);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllCities,
  getCityById,
  createCity,
  updateCity,
  deleteCity,
  getCityWithMonuments,
  modifyCityMonuments,
};
