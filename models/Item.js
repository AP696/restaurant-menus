const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const Item = sequelize.define({
    name: Sequelize.STRING,
    image: Sequelize.STRING,
    price: Sequelize.NUMBER,
    vegitarian: Sequelize.BOOLEAN
})

module.exports = {Item};