const Koa = require('koa');
const Model = require('./dao');
const router = require('./router');
const koa2Cors = require('koa2-cors');
const koaBodyparser = require('koa-bodyparser');
const Helmet = require('koa-helmet');
const Session = require('./middleware/session');
const httpLogger = require('./middleware/httpLogger');

Model.syncModel({force: true});
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
router.useRouter(app);
app.listen(3000);
