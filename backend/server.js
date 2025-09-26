const express = require('express')
const novelRouter = require('./src/modules/novel/novelRouter').default

const apipath = "/api/v1"
const app = express()
const port = 3000

app.use(apipath+'/novels', novelRouter)

app.listen(port, () => {
  console.log(`Serv chạy trên port: ${port}`)
})
