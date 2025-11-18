import Router from '@koa/router'

export const echoRouter = new Router()

echoRouter.post('/echo', async (ctx) => {
  const body = ctx.request.body ?? {}
  ctx.body = { ...body, echo: true }
})
