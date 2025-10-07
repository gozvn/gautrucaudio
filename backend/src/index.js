const express = require('express')
import novelRouter from './modules/novel/novelRouter.js'

const app = express()
const port = 3000

// app.use('/api/novels', novelRouter)

app.listen(port, () => {
  console.log(`Serv chạy trên port: ${port}`)
})
