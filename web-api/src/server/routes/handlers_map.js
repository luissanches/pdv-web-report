const reportsRouter = require('./reports');

exports.configureHandlers = (app) => {
    app.use(reportsRouter.routes()).use(reportsRouter.allowedMethods());
}