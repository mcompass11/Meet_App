const proxy = require("http-proxy-middleware")

module.exports = app => {
    app.use(
      proxy('/dev/api/token',
          {
            target: 'https://mcompass11.github.io/Meet_App',
            changeOrigin: true
          })
    )

}