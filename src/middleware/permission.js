const roleUrl = {};
const logger = require('../utils/log4js').getLogger('http');
/**
 * 全局权限控制
 */
module.exports = (...args) => {
    return async (ctx, next) => {
        logger.info('这里做路由权限验证');
        await next();
    }
}