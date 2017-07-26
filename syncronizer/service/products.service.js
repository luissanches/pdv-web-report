const products_db = require('../persistence/products.db');
const log = require('../utils/log');

exports.SyncSalesProducts = async (limit) => {
    let rows = await products_db.getToSync(limit);
    let count = 1;
    for (let products of rows) {
        try {
            await products_db.sync(products);
            await products_db.updateSyncronized(products.CodigoVendaProduto);
            console.log(`product: ${count}/${rows.length}`);
            count++;
        } catch (error) {
            console.error(error);
            log.error(error);
            products_db.rollbackSync(products.CodigoVendaProduto);
        }
    }
}