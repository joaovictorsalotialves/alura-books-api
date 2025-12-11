const fs = require('fs')

function getAllBooks() {
  return JSON.parse(fs.readFileSync('books.json'))
}

function getBookById(id) {
  const books = getAllBooks()
  const result = books.filter((book) => {
    return book.id == id
  })
  return result
}

module.exports = {
  getAllBooks,
  getBookById
}
