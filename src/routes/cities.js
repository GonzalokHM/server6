const express = require('express');
const {
  getAllCities,
  getCityById,
  createCity,
  updateCity,
  deleteCity,
  getCityWithMonuments,
  modifyCityMonuments,
} = require('../controllers/cities');

const router = express.Router();

router.get('/', getAllCities);
router.get('/:id', getCityById);
router.post('/', createCity);
router.put('/:id', updateCity);
router.delete('/:id', deleteCity);

//Relationship
router.get('/:id/monuments', getCityWithMonuments);
router.put('/:cityId/monuments/:monumentId', modifyCityMonuments);

module.exports = router;
