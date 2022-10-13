const testRouter = require('./test');
const authRouter = require('./auth');

function route(app) {
    app.use('/test',testRouter);
    app.use('/auth',authRouter);
}

module.exports = route;