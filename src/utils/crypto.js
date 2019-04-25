const crypto = require('crypto');
const Config = require('../config');
const _decipher = crypto.createCipher(Config.crypto.encryptAlg, Config.crypto.encrtptPwd);
const _cipher = crypto.createDecipher(Config.crypto.encryptAlg, Config.crypto.encrtptPwd);
/**
 * 加密
 */
module.exports.decipher = (str) => {
    let cipherStr = '';
    _decipher.update(str, Config.crypto.encode, Config.crypto.hex);
    cipherStr += _decipher.final(Config.crypto.hex);
    return cipherStr;
}
/**
 * 解密
 */
module.exports.cipher = (hexStr) => {
    if(typeof str !== 'string'){
        return null;
    }
    let decStr = '';
    _cipher.update(hexStr, Config.crypto.hex, Config.crypto.encode);
    decStr += _cipher.final(Config.crypto.encode);
    return decStr;
}