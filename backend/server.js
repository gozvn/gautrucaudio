const express = require('express')
const novelRouter = require('./src/modules/novel/novelRouter').default
const userRouter = require('./src/modules/user/userRouter').default

const app = express()
const port = 3000

app.use(express.json()); // bắt buộc để đọc req.body dạng JSON
app.use(express.urlencoded({ extended: true })); // hỗ trợ form-data

const apipath = "/api/v1"
app.use(apipath+'/novels', novelRouter)
app.use(apipath+'/users', userRouter)

app.listen(port, () => {
  console.log(`Serv chạy trên port: ${port}`)
})
