const log4js = require('log4js');
log4js.configure('logconfig.json');
const logger = log4js.getLogger('logger');

module.exports = log = {
    console:function(msg){
        console.log(msg);
    },
    info: function(msg){
        logger.info(msg);
    },
    debug: function(msg){
        logger.debug(msg);
    },
    error: function(err){
        logger.error(err.message);
    }
}

//exports.console = (msg) => {console.log(msg)}