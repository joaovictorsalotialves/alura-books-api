const { Router } = require('express')
const { getBooks, getBook, registerBook } = require('../controller/book')

const router = Router()

router.get('/', getBooks)

router.get('/:id', getBook)

router.post('/', registerBook)

router.patch('/', (req, res) => {
  res.send('Você fez uma requisição PATCH')
})

router.delete('/', (req, res) => {
  res.send('Você fez uma requisição DELETE')
})

module.exports = router
