/**
 * 路由参数中间件
 */
const Joi = require('joi');
const logger = require('../utils/log4js').getLogger('http');

module.exports = (schema) => {
    return async (ctx, next) => {
        logger.info('这里做路由参数验证');
        const joiOptions = {
            allowUnknown: true, // 允许出现未声明的字段
            stripUnknown: true, // 移除未声明的字段
        };
        if(!schema){
            // 没有参数验证
            await next();
            return;
        }
        const data = ctx.request.method.toLowerCase() === 'get' 
                    ? ctx.request.query : ctx.request.body;
        const result = Joi.validate(data, schema, joiOptions);
        if(result.error === null){
            await next();
        }else{
            logger.warn('请求参数错误！', result.error);
            ctx.response.status = 404;
        }
    }
}