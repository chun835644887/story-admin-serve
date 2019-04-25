const SvgCaptcha = require('svg-captcha');
const sequelize = require('../../dao/sequelize');
const crypto = require('../../utils/crypto');

const getCaptcha = async (ctx, next) => {
    var captcha = await SvgCaptcha.create();
    ctx.body = captcha;
}

const login = async (ctx, next) => {
    /**
     * 登陆先查询客户表，作者表，管理员表，账号不能重复
     */
    ctx.session['account'] = ctx.request.body;
    let params = ctx.request.body;
    if(params.account && params.pwd){
        let session = Object.assign(ctx.request.body);
        let token = (Date.now() + 24 * 60 * 60 * 1000) + '';
        session['token'] = token;
        ctx.session[params.account] = session;
        let sql = `select * from users where account='${params.account}' and pwd='${params.pwd}'`;
        await sequelize.query(sql).then((result) => {
            if(result.length){
                ctx.body = {
                    type: 1,
                    user: result[0]
                };
            }
        }).catch((error) => {
            console.log('error!')
        });
    }else{
        ctx.body = {
            type: 0,
            user: null
        };
    }
}
const register = async (ctx, next) => {
    let params = ctx.request.body;
    console.log(params);
    if(params.account && params.pwd){
        let sql = `select count('account') as num from custom where account='${params.account}'`;
        await sequelize.query(sql).then((result) => {
            console.log(result);
            if(result.length){
                if(result[0][0]['num'] === 0){
                    // let id id = 
                    let inserSql = `insert into custom('id','account','pwd') valuse()`
                }
            }
            ctx.body = result;
        });
    }
}
module.exports = [{
    type: 'get',
    url: '/story/login/captcha',
    handle: getCaptcha
}, {
    type: 'post',
    url: '/story/custom/login',
    handle: login
}, {
    type: 'post',
    url: '/story/custom/register',
    handle: register
}]