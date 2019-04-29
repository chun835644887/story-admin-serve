const Path = require('path');
const Router = require('koa-router');
const UserController = require('../controller/user');
const LoginController = require('../controller/login');
// 权限中间件
const permission = require('../middleware/permission');
// 路由参数验证
const paramValidate = require('../middleware/paramValidate');
const logger = require('../utils/log4js').getLogger('http');
const moduleUtils = require('../utils/moduleUtil');
exports.useRouter = (app) => {
    const router = new Router({
        prefix: '/api'
    });
    LoginController.routers.forEach((ctx) => {
        let method = ctx.type || 'get';
        router[method](ctx.url,
            paramValidate(ctx.schema),
            permission(),
            ...(ctx.middleware||[]), 
            ctx.handle);
    });
    UserController.routers.forEach((ctx) => {
        let method = ctx.type || 'get';
        router[method](ctx.url, 
            paramValidate(ctx.schema), 
            permission(ctx), 
            ...(ctx.middleware||[]), 
            ctx.handle);
    });
    app.use(router.routes()).use(router.allowedMethods());
    logger.info('路由挂载成功！');
}