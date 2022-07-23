const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = app =>{
    app.use(
        createProxyMiddleware('/books/:bookId',
        {
            target: 'https://books.google.com',
            changeOrigin: true,
        })

    )
}