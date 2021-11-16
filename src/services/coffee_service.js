const getCoffee = (name = 'Latte') => {
    return {
        drinkType: 'Coffee',
        name,
    };
};

module.exports = { getCoffee };
