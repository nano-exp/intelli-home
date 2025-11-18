import Koa from 'koa'
import bodyParser from '@koa/bodyparser'
import serve from 'koa-static'
import { createHelloRouter } from '#src/routes/hello-router.js'
import { createEchoRouter } from '#src/routes/echo-router.js'

const app = new Koa()

app.use(serve('public'))
app.use(bodyParser())
app.use(createHelloRouter())
app.use(createEchoRouter())

app.use((ctx) => {
  ctx.status = 404
  ctx.body = 'Not Found'
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
