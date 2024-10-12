const { getGenre } = require('../controllers/genreController');
const express = require('express');
const router = express.Router();

router.get('/', getGenre);  

module.exports = router;
