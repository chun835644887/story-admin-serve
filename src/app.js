const Koa = require('koa');
const Model = require('./dao');
const router = require('./router');
const koa2Cors = require('koa2-cors');
const koaBodyparser = require('koa-bodyparser');
const Helmet = require('koa-helmet');
const Session = require('./middleware/session');
const httpLogger = require('./middleware/httpLogger');

// Model.syncModel({force: true});
const app = new Koa();
app.keys = ['chun:0926'];
app.use(Helmet());
app.use(Session(app));
app.use(httpLogger());
app.use(koaBodyparser({
    textLimit: '1mb',
    jsonLimit: '1mb',
    enableTypes: ['json', 'form', 'text'],
    extendTypes: {
      text: ['text/xml', 'application/xml']
    }
  }));
app.use(koa2Cors({
    credentials: true,
}));
app.use(async (ctx, next) => {
  console.log('请求路径：'+ctx.url);
  if(ctx.url !== '/api/story/login/captcha' && ctx.url !== '/api/story/custom/login'){
    let sess = ctx.session;
    if(sess.user){
      await next();
    }else{
      console.log('重定向：')
      ctx.redirect('http://localhost:8080/#/login');
    }
  }else{
    // console.log(ctx.session.user);
    await next();
  }
});
router.useRouter(app);
app.listen(3000);
