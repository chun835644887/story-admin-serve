const Session = require('koa-session2');
const { Store } = require("koa-session2");
const encrypt = require('../utils/crypto');
class store extends Store{
    constructor(){
        super();
    }
    async get (sid, ctx){
        return this[sid];
    }
    async set(session, { sid =  this.getID(24), maxAge = 1000000 } = {}, ctx){
        return this[session.account] = session;
    }
    async destroy(sid, ctx){
        this[sid] = null;
    }
}

module.exports = (app) => {
    return Session({
        key: 'chun:0926',
        maxAge: 1000*60*60*24,
        httpOnly: true,
        store: new store()
    })
}