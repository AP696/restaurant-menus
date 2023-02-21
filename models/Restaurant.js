const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

let Restaurant = sequelize.define({
    name: Sequelize.STRING,
    location: Sequelize.STRING,
    cuisine: Sequelize.STRING
})

module.exports = {Restaurant};