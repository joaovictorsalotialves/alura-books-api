const { Router } = require('express')
const { getFavorites, addBookInFavorites, removeBookInFavorites } = require('../controller/favorite')

const router = Router()

router.get('/', getFavorites)

router.post('/:id', addBookInFavorites)

router.delete('/:id', removeBookInFavorites)

module.exports = router
