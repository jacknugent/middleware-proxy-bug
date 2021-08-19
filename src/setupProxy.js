var proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy("/api", {
            target: 'https://postman-echo.com',
            changeOrigin: true,
            logLevel: 'debug'
        })
    );
};