const express = require('express');
const {
  getAllMonuments,
  getMonumentById,
  createMonument,
  updateMonument,
  deleteMonument,
  getMonumentWithCity,
  changeMonumentCity,
} = require('../controllers/monuments');

const router = express.Router();

router.get('/', getAllMonuments);
router.get('/:id', getMonumentById);
router.post('/', createMonument);
router.put('/:id', updateMonument);
router.delete('/:id', deleteMonument);

//Relationship
router.get('/:id/city', getMonumentWithCity);
router.put('/:monumentId/city/:cityId', changeMonumentCity);

module.exports = router;
