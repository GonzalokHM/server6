const express = require('express');
const cityRouter = require('./cities');
const monumentRouter = require('./monuments');

const router = express.Router();

router.use('/cities',cityRouter)
router.use('/monuments',monumentRouter)

module.exports = router;