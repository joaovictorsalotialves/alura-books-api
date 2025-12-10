function getBooks(req, res) {
    try {
        res.send('Olá mundo!')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getBooks
}
