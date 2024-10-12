const { getCountry } = require('../controllers/countriesController');
const express = require('express');
const router = express.Router();

router.get('/', getCountry);

module.exports = router;
