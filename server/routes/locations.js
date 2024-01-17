const express = require('express');
const router = express.Router();
const LocationsController = require('../controllers/locationsController');

router.get('/locations', LocationsController.getLocations)

module.exports = router;