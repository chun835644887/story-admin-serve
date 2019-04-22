const log4js = require('log4js');
log4js.configure({
    appenders: {
        console: {
            type: 'console'
        },
        stdout: {
            type: 'stdout'
        },
        error: {
            type: 'dataFile',
            filename: 'logs/error/',
            pattern: 'error-yyyy-MM-dd.log',
            maxLogSize: 10458760,
            alwaysIncludePattern: true
        }
    }
})