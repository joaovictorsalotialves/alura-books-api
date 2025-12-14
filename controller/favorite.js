const { getAllFavorites, addFavorite, deleteFavoriteById } = require("../services/favorite")

function getFavorites(req, res) {
  try {
    const favorites = getAllFavorites()
    res.status(200).send(favorites)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function addBookInFavorites(req, res) {
  try {
    const id = req.params.id

    if (id && Number(id)) {
      addFavorite(id)
      return res.status(200).send('Livro adicionado aos favoritos com sucesso!')
    }

    res.status(404).send('ID Inválido!')
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function removeBookInFavorites(req, res) {
  try {
    const id = req.params.id

    if (id && Number(id)) {
      deleteFavoriteById(id)
      return res.status(200).send('Livro excluido dos favoritos com sucesso!')
    }

    res.status(404).send('ID Inválido!')
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getFavorites,
  addBookInFavorites,
  removeBookInFavorites
}