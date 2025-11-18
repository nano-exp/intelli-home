import Koa from 'koa'
import bodyParser from '@koa/bodyparser'
import serve from 'koa-static'
import { helloRouter } from '#src/routes/hello.js'
import { echoRouter } from '#src/routes/echo.js'

const app = new Koa()

app.use(serve('public'))
app.use(bodyParser())
app.use(helloRouter.routes())
app.use(helloRouter.allowedMethods())
app.use(echoRouter.routes())
app.use(echoRouter.allowedMethods())

app.use((ctx) => {
  ctx.status = 404
  ctx.body = 'Not Found'
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
