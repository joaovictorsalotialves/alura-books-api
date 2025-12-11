const { Router } = require('express')
const { getBooks, getBook, registerBook, editBook } = require('../controller/book')

const router = Router()

router.get('/', getBooks)

router.get('/:id', getBook)

router.post('/', registerBook)

router.patch('/:id', editBook)

router.delete('/', (req, res) => {
  res.send('Você fez uma requisição DELETE')
})

module.exports = router
