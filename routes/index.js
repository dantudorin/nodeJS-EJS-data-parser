const express = require('express');
const pagesController = require('../controllers/pagesController');

const router = express.Router();

router.get('/', pagesController.getIndex);

module.exports = router;