const express = require('express');
const coffeeController = require('../controllers/coffee_controller');
const router = new express.Router();

router.get('/coffee', coffeeController.getCoffee);

module.exports = router;
