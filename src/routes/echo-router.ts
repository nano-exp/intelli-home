import Router from '@koa/router'

export const createEchoRouter = () => {
  const router = new Router()

  router.post('/echo', async (ctx) => {
    const body = ctx.request.body ?? {}
    ctx.body = {
      ...body,
      echo: true,
    }
  })

  return router.routes()
}
