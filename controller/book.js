const { getAllBooks, getBookById, createBook } = require('../services/book')

function getBooks(req, res) {
  try {
    const books = getAllBooks()
    res.send(books)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id
    const book = getBookById(id)
    res.send(book)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function registerBook(req, res) {
  try {
    const newBook = req.body
    createBook(newBook)
    res.status(201).send('Livro inserido com sucesso!')
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getBooks,
  getBook,
  registerBook
}
