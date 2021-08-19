const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: 'https://postman-echo.com',
            changeOrigin: true,
            logLevel: 'debug'
        })
    );
};