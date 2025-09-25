import express from 'express';
 
const router = express.Router();

export default router;

router.get('/', (req, res) => {
  res.status(200).send('Hello World!asdas')
})
router.post('/', (req, res) => {
  res.send('Hello World!asdas')
})
router.put(':id', (req, res) => {
  const { id } = req.params
  res.send(`Hello World! ${id}`)
})
router.delete('/:id', (req, res) => {
  res.send('Hello World!asdas')
})

