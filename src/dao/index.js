const Path = require('path');
const sequelize = require('./sequelize');
const ModuleUtil = require('../utils/moduleUtil');
console.log(ModuleUtil);
// exports.User = sequelize.import(Path.join(__dirname, './user'));
let mod = ModuleUtil.getDirectoryModule(Path.join(__dirname, './model'));
console.log(mod);

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