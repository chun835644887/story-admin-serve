const Sequelize = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.mysql.database,
    config.mysql.username, 
    config.mysql.password, {
    host: config.mysql.host,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;