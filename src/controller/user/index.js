const Model = require('../../dao/model');
const sequelize = require('../../dao/sequelize');
/**
 * 查询用户id
 */
const getUser = async (ctx, next) => {
    let sql = `select * from users where accout`;
    let connection = null;
    await sequelize.query(sql).then((result) => {
        console.log(result);
        ctx.body = result;
    }).catch((error) => {
        console.log('error!')
    });
}
/**
 * 根据账号查询用户信息
 */
const getUserByAccount = async (account) => {
    Model.User.findOne({
        where: {accout: 'admin'}
    }).then((result) => {
        console.log(result);
    });
}

/**
 * 新建账号
 */
const createUser = async ({}) => {
    Model.User.create({

    });
}
/**
 * 获取所有得账号
 */
const getAllUser = async (ctx, next) => {
    // let sql = `select * from users`;
    // let connection = null;
    // await sequelize.query(sql).then((result) => {
    //     console.log(result);
    //     console.log(result);
    //     ctx.body = result;
    // }).catch((error) => {
    //     console.log('error!')
    // });
    await Model.User.findAll().then((result) => {
        console.log(result);
        ctx.body = result;
    });
}
module.exports = [{
    type: 'post',
    url: '/hair/user/new',
    handle: createUser
},{
    type: 'get',
    url: '/hair/get/:account/user/byAccount',
    handle: getUserByAccount
},{
    type: 'get',
    url: '/hair/get/:id/user',
    handle: getUser
},{
    type: 'get',
    url: '/hair/get/user/all',
    handle: getAllUser
}];