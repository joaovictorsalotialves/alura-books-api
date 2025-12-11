const { Router } = require('express')
const { getBooks, getBook, registerBook, editBook, removeBook } = require('../controller/book')

const router = Router()

router.get('/', getBooks)

router.get('/:id', getBook)

router.post('/', registerBook)

router.patch('/:id', editBook)

router.delete('/:id', removeBook)

module.exports = router
