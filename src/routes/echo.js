import Router from '@koa/router'

const echoRouter = new Router()

echoRouter.post('/echo', async (ctx) => {
  const body = ctx.request.body ?? {}
  ctx.body = { ...body, echo: true }
})

export default echoRouter
