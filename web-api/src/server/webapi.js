const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const handlers = require('./routes/handlers_map');
const auth = require('./routes/auth');
const app = new Koa();

exports.start = () => {
    app.use(bodyParser());
    app.use(auth.onAuth);
    app.use(cors())
    handlers.configureHandlers(app);
    let port = 3000;
    app.listen(port);
    console.log(`server started and listening at: ${port}`);
}