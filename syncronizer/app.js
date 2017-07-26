const log = require('./utils/log');
const payments_svc = require('./service/payments.service');
const products_svc = require('./service/products.service');

let app = {
      async run() {

        let limit = process.argv[2] || 50;
        
        console.time('time payments: ');
        await payments_svc.SyncSalesPayments(limit);
        console.timeEnd('time payments: ');

        console.time('time products: ');
        await products_svc.SyncSalesProducts(limit);
        console.timeEnd('time products: ');

        process.exit();
    }
}

app.run()