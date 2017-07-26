const moment = require('moment')

const utils = {
    fn: {
        getCurrentDateToDatabase(){
            return moment().format('YYYY-MM-DD');
        },
        convertTodaDateToDatabase(value){
            return moment(value, 'YYYYMMDD').format('YYYY-MM-DD');
        }
    },
    cfg:{

    }
}

module.exports = utils;