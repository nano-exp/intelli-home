import Router from '@koa/router'

export const helloRouter = new Router()

helloRouter.get('/hello', (ctx) => {
  ctx.body = 'Hello World'
})
