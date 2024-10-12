const { getReview, addReview } = require('../controllers/reviewController');
const express = require('express');
const router = express.Router();

router.get('/', getReview);  
router.get('/add',addReview );  

module.exports = router;
