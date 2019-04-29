const SvgCaptcha = require('svg-captcha');
const sequelize = require('../../dao/sequelize');
const Model = require('../../dao');
const crypto = require('../../utils/crypto');
const uuidV1 = require('uuid/v1');
const Joi = require('joi');
const logger = require('../../utils/log4js').getLogger('http');

const getCaptcha = async (ctx, next) => {
    var captcha = await SvgCaptcha.create();
    ctx.body = captcha;
}

const login = async (ctx, next) => {
    /**
     * 登陆先查询客户表，作者表，管理员表，账号不能重复
     */
    // ctx.session[ctx.request.body.account] = uuidV1() + '_sessionId';
    let params = ctx.request.body;
    if(params.account && params.pwd){
        let session = Object.assign(ctx.request.body);
        let promise = new Promise((resolve, reject) => {
            Model.Custom.findOne({
                where: {
                    account: params.account,
                    pwd: params.pwd
                }
            }).then((result) => {
                ctx.session.user = result;
                // logger.info('-----------------')
                // logger.info(ctx.session);
                resolve({
                    success: true,
                    user: result,
                    session: ctx.session
                });
            }).catch((error) => {
                resolve({
                    success: false,
                    tip: '未知错误，请重新登录或者联系管理员！'
                });
            });
        });
        await promise.then((result) => {
            ctx.body = result;
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
    let promise = new Promise((resolve, reject) => {
        Model.Custom.findOne({
            where: {
                account: params.account
            }
        }).then(async (res) => {
            if(res){
                ctx.body = {
                    tip: '注册账号已存在，请重新填写账号！',
                    exist: true,
                    success: false
                }
                resolve({
                    tip: '注册账号已存在，请重新填写账号！',
                    exist: true,
                    success: false
                });
            }else{
                Model.Custom.create({
                    cusId: uuidV1(),
                    name: params.name,
                    account: params.account,
                    pwd: params.pwd
                }).then((createResult) => {
                    resolve({
                        tip: '注册成功！',
                        success: true
                    });
                })
            }
        }).catch(error => {
            console.log(error);
        });
    });
    await promise.then((data) => {
        ctx.body = data;
    });
}
module.exports = {
    routers: [{
        type: 'get',
        url: '/story/login/captcha',
        handle: getCaptcha
    }, {
        type: 'post',
        url: '/story/custom/login',
        schema: Joi.object().keys({
            account: Joi.string().min(5).max(16),
            pwd: Joi.string().min(5)
        }),
        handle: login
    }, {
        type: 'post',
        url: '/story/custom/register',
        schema: Joi.object().keys({
            account: Joi.string().min(5).max(5),
            pwd: Joi.string().min(5),
            name: Joi.string().min(1)
        }),
        handle: register
    }],
    middleware: []
};