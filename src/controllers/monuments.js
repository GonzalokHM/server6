const {
  findAllMonumentsDB,
  findMonumentByIdDB,
  createMonumentDB,
  updateMonumentDB,
  deleteMonumentDB,
  findMonumentWithCityDB,
  changeCityOfMonumentDB,
} = require('../repositories/monument');

const getAllMonuments = async (req, res) => {
  try {
    const query = req.query;
    const monuments = await findAllMonumentsDB(query);
    res.json(monuments);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getMonumentById = async (req, res) => {
  try {
    const monument = await findMonumentByIdDB(req.params.id);
    if (!monument) {
      return res.status(404).send('Monument not found');
    }
    res.json(monument);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createMonument = async (req, res) => {
  try {
    const newMonument = await createMonumentDB(req.body);
    res.status(201).json(newMonument);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateMonument = async (req, res) => {
  try {
    const updatedMonument = await updateMonumentDB(req.params.id, req.body);
    if (!updatedMonument) {
      return res.status(404).send('Monument not found');
    }
    res.json(updatedMonument);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteMonument = async (req, res) => {
  try {
    const monument = await deleteMonumentDB(req.params.id);
    if (!monument) {
      return res.status(404).send('Monument not found');
    }
    res.send('Monument deleted');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getMonumentWithCity = async (req, res) => {
  try {
    const monument = await findMonumentWithCityDB(req.params.id);
    if (!monument) {
      return res.status(404).send('Monument not found');
    }
    res.json(monument);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const changeMonumentCity = async (req, res) => {
  try {
    const { monumentId, cityId } = req.params;
    const updatedMonument = await changeCityOfMonumentDB(
      monumentId,
      cityId
    );
    if (!updatedMonument) {
      return res.status(404).send('Monument not found');
    }
    res.json(updatedMonument);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllMonuments,
  getMonumentById,
  createMonument,
  updateMonument,
  deleteMonument,
  getMonumentWithCity,
  changeMonumentCity,
};
