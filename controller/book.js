const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../services/book')

function getBooks(req, res) {
  try {
    const books = getAllBooks()
    res.status(200).send(books)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id

    const book = getBookById(id)
    res.status(200).send(book)
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

function editBook(req, res) {
  try {
    const id = req.params.id
    const changes = req.body

    updateBook(changes, id)
    res.status(200).send('Livro atualizado com sucesso!')
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function removeBook(req, res) {
  try {
    const id = req.params.id

    deleteBook(id)
    res.status(200).send('Livro excluido com sucesso!')
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getBooks,
  getBook,
  registerBook,
  editBook,
  removeBook
}
