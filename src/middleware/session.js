const session = require('koa-session');
const encrypt = require('../utils/crypto');
const store = {};

module.exports = (app) => {
    return session({
        key: 'chun:0926',
        maxAge: 1000*60*60*24,
        httpOnly: true,
        signed: true,
        store: {
            get: async (key, maxAge, { rolling }) => {
              return store[key];
            },
            set: async (key, sess, maxAge, { rolling, changed }) => {
                console.log(key);
                console.log('-----------------');
                return store[key] = sess;
            },
            destroy: async (key) => {
              return store[key] = null;
            }
          },
    }, app)
}