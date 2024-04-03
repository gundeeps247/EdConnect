
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    'https://kanie.stepzen.net/api/modest-salamander/__graphqlhttps://kanie.stepzen.net/api/modest-salamander/__graphql', // Adjust the path accordingly
    createProxyMiddleware({
      target: 'https://dashboard.stepzen.com',
      changeOrigin: true,
    })
  )
}