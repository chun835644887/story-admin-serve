const Path = require('path');
const User = require('./user');
const sequelize = require('../sequelize');

exports.User = sequelize.import(Path.join(__dirname, './user'));

exports.syncModel = (force) => {
    if(force){
        sequelize.sync({force}).then(() => {
            console.log('mysql sync successful!');
        }).catch((error) => {
            console.error('mysql sync error', error);
        })
    }else{
        sequelize.sync().then(() => {
            console.log('mysql sync successful!');
        }).catch((error) => {
            console.error('mysql sync error', error);
        })
    }
}