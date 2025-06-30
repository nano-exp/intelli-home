import Router from '@koa/router'

const helloRouter = new Router()

helloRouter.get('/hello', (ctx) => {
  ctx.body = 'Hello World'
})

export default helloRouter
