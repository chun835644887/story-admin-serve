const Fs = require('fs');
const Path = require('path');
const logger = require('./log4js').getLogger('default');
const resolveModel = (path) => {
    let _moduleExprot = null;
    try{
        _moduleExprot = require(require.resolve(path));
    }catch{
        logger.error('resolveModule ', path, 'error ', error);
    }
    return _moduleExprot;
}
exports.resolveModel = resolveModel;
const getDirectoryModule = (path) => {
    const filePaths = [];
    const result = [];
    function loadDirectory(dir){
        try{
            let files = Fs.readdirSync(dir);
            files.forEach((file) => {
                const filePath = Path.join(dir, file);
                const stats = Fs.statSync(filePath);
                if (stats.isDirectory()){
                    loadDirectory(filePath)
                };
                if (stats.isFile()){
                    filePaths.push(filePath);
                };
            });
        }catch{
            console.log('error');
        }
    }
    loadDirectory(path);
    filePaths.forEach(filePath => {
        let _fileModule = resolveModel(filePath);
        let properties = filePath.replace(path, '').split(/\\|\//g);
        result.push({
            export: _fileModule,
            path: filePath,
            properties: properties
        })
    });
}
exports.getDirectoryModule = getDirectoryModule;