const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware')

const devProxy = {
  '/v0': {
    target: 'https://api-dev.fives.cloud/v0/',
    pathRewrite: { '^/v0': '/' },
    changeOrigin: true,
    cookieDomainRewrite: "localhost:3000",
    secure: false,
    logLevel: 'debug'
  }
}
const env = process.env.NODE_ENV
const dev = env !== 'production'

const nextI18next = require('./components/core/i18n')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

(async () => {
  await app.prepare()
  const server = express()
  server.enable('trust proxy');

  if (dev && devProxy) {
    const proxyMiddleware = require('http-proxy-middleware')
    Object.keys(devProxy).forEach(function (context) {
      server.use(proxyMiddleware(context, devProxy[context]))
    })
  }

  nextI18NextMiddleware(nextI18next, app, server)

  server.get('*', (req, res) => handle(req, res))

  await server.listen(process.env.PORT || 3000)
  console.log('> Ready on http://localhost:3000')
})()