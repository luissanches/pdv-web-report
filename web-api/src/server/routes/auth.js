exports.onAuth = async (ctx, next) => {

    if (ctx.req.headers['access-control-request-headers'] === "authorization") {
        await next();
    } else {
        let isAuthenticated = ctx.req.headers.authorization;

        if (isAuthenticated) {
            await next();
        } else {
            ctx.throw(401, 'access_denied');
        }
    }
}