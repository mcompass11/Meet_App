const proxy = require("http-proxy-middleware")

module.exports = app => {
    app.use(
      proxy('https://qrr9ffhmc4.execute-api.us-east-1.amazonaws.com/dev/api/token',
          {
            target: 'https://mcompass11.github.io/Meet_App',
            changeOrigin: true
          })
    )

}