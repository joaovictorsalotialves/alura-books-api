const { Router } = require('express')
const { getBooks } = require('../controller/book')

const router = Router()

router.get('/', getBooks)

router.post('/', (req, res) => {
  res.send('Você fez uma requisição POST')
})

router.patch('/', (req, res) => {
  res.send('Você fez uma requisição PATCH')
})

router.delete('/', (req, res) => {
  res.send('Você fez uma requisição DELETE')
})

module.exports = router
