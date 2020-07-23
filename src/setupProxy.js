const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://data.covidactnow.org",
      changeOrigin: true,
    })
  );
};
