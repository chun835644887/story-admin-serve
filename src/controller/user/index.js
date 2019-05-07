const Model = require('../../dao');
const sequelize = require('../../dao/sequelize');
/**
 * 查询用户id
 */
const getUser = async (ctx, next) => {
    let sql = `select * from custom`;
    let connection = null;
    await sequelize.query(sql).then((result) => {
        ctx.body = result;
    }).catch((error) => {
        console.log('error!')
    });
}
/**
 * 根据账号查询用户信息
 */
const getUserByAccount = async (account) => {
    Model.Custom.findOne({
        where: {accout: 'admin'}
    }).then((result) => {
        // console.log(result);
    });
}

/**
 * 新建账号
 */
const createUser = async ({}) => {
    Model.Custom.create({

    });
}
/**
 * 获取所有得账号
 */
const getAllUser = async (ctx, next) => {
    // console.log(ctx.session);
    await Model.Custom.findAll().then((result) => {
        ctx.body = result;
    });
}
module.exports = {
    routers: [{
        type: 'post',
        url: '/story/custom/new',
        handle: createUser
    },{
        type: 'get',
        url: '/story/custom/get/:account/custom/byAccount',
        handle: getUserByAccount
    },{
        type: 'get',
        url: '/story/custom/get/:id',
        handle: getUser
    },{
        type: 'get',
        url: '/story/custom/all',
        handle: getAllUser
    }]
};