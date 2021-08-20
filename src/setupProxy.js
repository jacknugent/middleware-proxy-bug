const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/post", {
            target: 'https://postman-echo.com',
            changeOrigin: true,
            logLevel: 'debug'
        })
    );
};