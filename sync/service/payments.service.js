const payments_db = require('../persistence/payments.db');
const log = require('../utils/log');

exports.SyncSalesPayments = async (limit) => {
    let rows = await payments_db.getToSync(limit);
    let count = 1;
    for (let payment of rows) {
        try {
            await payments_db.sync(payment);
            await payments_db.updateSyncronized(payment.CodigoVendaPagamento);
            console.log(`payment: ${count}/${rows.length}`);
            count++;
        } catch (error) {
            console.error(error);
            log.error(error);
            payments_db.rollbackSync(payment.CodigoVendaPagamento);
        }
    }
}