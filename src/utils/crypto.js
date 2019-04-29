const crypto = require('crypto');
const Config = require('../config');
// const _decipher = crypto.createDecipher(Config.crypto.encryptAlg, Config.crypto.encrtptPwd);
// const _cipher = crypto.createCipher(Config.crypto.encryptAlg, Config.crypto.encrtptPwd);
/**
 * 解密
 */
module.exports.decipher = (str) => {
    const _decipher = crypto.createDecipher(Config.crypto.encryptAlg, Config.crypto.encrtptPwd);
    _decipher.update(str, Config.crypto.hex, Config.crypto.encode);
    return _decipher.final(Config.crypto.encode);
}
/**
 * 加密
 */
module.exports.cipher = (str) => {
    const _cipher = crypto.createCipher(Config.crypto.encryptAlg, Config.crypto.encrtptPwd);
    _cipher.update(str, Config.crypto.encode, Config.crypto.hex);
    return _cipher.final(Config.crypto.hex);
}