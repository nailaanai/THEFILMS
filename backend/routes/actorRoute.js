const { getActor } = require('../controllers/actorController');
const express = require('express');
const router = express.Router();

router.get('/', getActor);  

module.exports = router;
