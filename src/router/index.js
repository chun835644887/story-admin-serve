const Router = require('koa-router');
const UserController = require('../controller/user');
const LoginController = require('../controller/login');
exports.useRouter = (app) => {
    const router = new Router({
        prefix: '/api'
    });
    router.get('/',async (ctx, next) => {
        let promise = new Promise((resolve) => {
            setTimeout(async () => {
                ctx.body = 'Hello World!11111';
                resolve(1);
                console.log('success');
            },2000);
        });
        await promise.then();
        console.log('end');
    });
    router.post('/post',(ctx, next) => {
        ctx.body = 'post';
    });
    router.get('/get',(ctx, next) => {
        ctx.body = 'get';
    });
    LoginController.forEach((ctx) => {
        let method = ctx.type || 'get';
        router[method](ctx.url, ctx.handle);
    });
    UserController.forEach((ctx) => {
        let method = ctx.type || 'get';
        router[method](ctx.url, ctx.handle);
    });
    app.use(router.routes()).use(router.allowedMethods());
}