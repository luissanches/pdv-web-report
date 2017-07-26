const reports_svc = require('../../service/reports.svc');
const router = new require('koa-router')({
    prefix: '/reports'
});

router.get('/totalbypayments/:dtstart/:dtend', async function (ctx, next) {
    try {
        let returnMsg = await reports_svc.getTotalSaleByPayment(ctx.params)
        ctx.body = returnMsg;
    } catch (error) {
        ctx.throw(400, error.message);
    }
});

router.get('/totalreceivebypayments/:dtstart/:dtend', async function (ctx, next) {
    try {
        let returnMsg = await reports_svc.getTotalReceiveAmmount(ctx.params)
        ctx.body = returnMsg;
    } catch (error) {
        ctx.throw(400, error.message);
    }
});

router.get('/getreceiveammount/:dtstart/:dtend', async function (ctx, next) {
    try {
        let returnMsg = await reports_svc.getReceiveAmmount(ctx.params)
        ctx.body = returnMsg;
    } catch (error) {
        ctx.throw(400, error.message);
    }
});

router.get('/getproductssales/:dtstart/:dtend', async function (ctx, next) {
    try {
        let returnMsg = await reports_svc.getProductsSales(ctx.params)
        ctx.body = returnMsg;
    } catch (error) {
        ctx.throw(400, error.message);
    }
});

router.get('/getcategoriessales/:dtstart/:dtend', async function (ctx, next) {
    try {
        let returnMsg = await reports_svc.getCategoriesSales(ctx.params)
        ctx.body = returnMsg;
    } catch (error) {
        ctx.throw(400, error.message);
    }
});

module.exports = router;