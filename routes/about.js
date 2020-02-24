const express = require('express');
const pagesController = require('../controllers/pagesController');

const router = express.Router();

router.get('/about', pagesController.getAbout);

module.exports = router;