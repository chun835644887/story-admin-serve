const SvgCaptcha = require('svg-captcha');
const sequelize = require('../../dao/sequelize');

const getCaptcha = async (ctx, next) => {
    var captcha = await SvgCaptcha.create();
    ctx.body = captcha;
}

const login = async (ctx, next) => {
    // console.log(ctx.request);
    ctx.session['account'] = ctx.request.body;
    let params = ctx.request.body;
    if(params.account && params.pwd){
        let session = Object.assign(ctx.request.body);
        let token = (Date.now() + 24 * 60 * 60 * 1000) + '';
        session['token'] = token;
        ctx.session[params.account] = session;
        let sql = `select * from users where account='${params.account}' and pwd='${params.pwd}'`;
        await sequelize.query(sql).then((result) => {
            console.log(result);
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
module.exports = [{
    type: 'get',
    url: '/hair/login/captcha',
    handle: getCaptcha
}, {
    type: 'post',
    url: '/hair/user/login',
    handle: login
}]