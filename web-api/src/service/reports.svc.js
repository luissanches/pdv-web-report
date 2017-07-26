const reports_db = require('../persistence/reports.db');
const utils = require('../common/utils');

let svc = {
    async getTotalSaleByPayment(body) {
        
        validateTotalSaleByPayment(body);

        let msg = {
            dtstart: `${utils.fn.convertTodaDateToDatabase(body.dtstart)} 00:00:00`,
            dtend: `${utils.fn.convertTodaDateToDatabase(body.dtend)} 23:59:59`
        };

        return await reports_db.getTotalSaleByPayment(msg);
    },
    async getTotalReceiveAmmount(body) {
        
        validateTotalSaleByPayment(body);

        let msg = {
            dtstart: `${utils.fn.convertTodaDateToDatabase(body.dtstart)} 00:00:00`,
            dtend: `${utils.fn.convertTodaDateToDatabase(body.dtend)} 23:59:59`
        };

        return await reports_db.getTotalReceiveAmmount(msg);
    },
    async getReceiveAmmount(body) {
        
        validateTotalSaleByPayment(body);

        let msg = {
            dtstart: `${utils.fn.convertTodaDateToDatabase(body.dtstart)} 00:00:00`,
            dtend: `${utils.fn.convertTodaDateToDatabase(body.dtend)} 23:59:59`
        };

        return await reports_db.getReceiveAmmount(msg);
    },
    async getProductsSales(body) {
        
        validateTotalSaleByPayment(body);

        let msg = {
            dtstart: `${utils.fn.convertTodaDateToDatabase(body.dtstart)} 00:00:00`,
            dtend: `${utils.fn.convertTodaDateToDatabase(body.dtend)} 23:59:59`
        };

        return await reports_db.getProductsSales(msg);
    },
    async getCategoriesSales(body) {
        
        validateTotalSaleByPayment(body);

        let msg = {
            dtstart: `${utils.fn.convertTodaDateToDatabase(body.dtstart)} 00:00:00`,
            dtend: `${utils.fn.convertTodaDateToDatabase(body.dtend)} 23:59:59`
        };

        return await reports_db.getCategoriesSales(msg);
    }
}

function validateTotalSaleByPayment(body) {

}

module.exports = svc;