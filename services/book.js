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

function createBook(newBook) {
  const books = getAllBooks()

  const newListBooks = [...books, newBook]
  fs.writeFileSync('books.json', JSON.stringify(newListBooks))
}

function updateBook(changes, id) {
  let books = getAllBooks()
  const index = books.findIndex((book) => book.id == id )

  const updatedBook = { ...books[index], ...changes }
  books[index] = updatedBook

  fs.writeFileSync('books.json', JSON.stringify(books))
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook
}
