import express from 'express';
 
const router = express.Router();

export default router;

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    code : 200, 
    message: 'Hello World!asdas',
    data: [] })
})
router.post('/', (req, res) => {
  res.status(201).json({
    status: 'success',
    code : 201,
    message: 'Created ! Done' })
})
router.put(':id', (req, res) => {
  const { id } = req.params
  res.send(`Hello World! ${id}`)
})
router.delete('/:id', (req, res) => {
  res.send('Hello World!asdas')
})

