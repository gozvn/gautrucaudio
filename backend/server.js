import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import novelRouter from './src/modules/novel/routes/novelRouter.js';
import userRouter from './src/modules/user/userRouter.js';

const prefixPath = process.env.PREFIX_PATH || '/';

const app = express()
const port = 3000

app.use(express.json()); // bắt buộc để đọc req.body dạng JSON
app.use(express.urlencoded({ extended: true })); // hỗ trợ form-data


app.use(prefixPath+'/novels', novelRouter)
app.use(prefixPath+'/users', userRouter)
console.log('✅ PREFIX_PATH:', prefixPath); // <-- Kiểm tra log này




app.listen(port, () => {
  console.log(`Serv chạy trên port: ${port}`)
})
