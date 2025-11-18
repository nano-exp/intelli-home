import Router from '@koa/router'

export const createHelloRouter = () => {
  const router = new Router()

  router.get('/hello', (ctx) => {
    ctx.body = 'Hello World'
  })

  return router.routes()
}
