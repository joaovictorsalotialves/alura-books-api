const fs = require('fs')
const { getAllBooks } = require('./book')

function getAllFavorites() {
  return JSON.parse(fs.readFileSync('favorites.json'))
}

function addFavorite(id) {
  const books = getAllBooks()
  const favorites = getAllFavorites()

  const newBook = books.find((book) => book.id == id)

  const newFavoriteBooksList = [...favorites, newBook]
  fs.writeFileSync('favorites.json', JSON.stringify(newFavoriteBooksList))
}

function deleteFavoriteById(id) {
  let favorites = getAllFavorites()
  const result = favorites.filter((book) => {
    return book.id != id
  })

  fs.writeFileSync('favorites.json', JSON.stringify(result))
}

module.exports = {
  getAllFavorites,
  deleteFavoriteById,
  addFavorite
}
