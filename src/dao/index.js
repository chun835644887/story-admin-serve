const Path = require('path');
const sequelize = require('./sequelize');
const ModuleUtil = require('../utils/moduleUtil');

// exports.User = sequelize.import(Path.join(__dirname, './user'));
let modelModule = ModuleUtil.getDirectoryModule(Path.join(__dirname, './model'));
modelModule.forEach((childModule) => {
    let moduleName = '';
    childModule.properties.forEach((pro) => {
        if(pro && pro.indexOf('.') == -1){
            moduleName += pro;
        }
    });
    exports[moduleName] = sequelize.import(childModule.path);
});
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