const proxy = require("http-proxy-middleware")

module.exports = app => {
    app.use(
      proxy('/token',
          {
            target: 'https://qrr9ffhmc4.execute-api.us-east-1.amazonaws.com/dev/api',
            changeOrigin: true
          })
    )

}