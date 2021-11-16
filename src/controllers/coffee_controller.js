const coffeeService = require('../services/coffee_service');

const getCoffee = async (req, res) => {
    const coffeeName = req.query.coffeeName;
    const coffee = coffeeService.getCoffee(coffeeName);
    res.json(coffee).status(200);
};

module.exports = { getCoffee };