const express = require('express')
const cors = require('cors')
const routerBook = require('./routers/book')
const routerFavorite = require('./routers/favorite')

const app = express()
app.use(express.json())
app.use(cors({
  origin: '*',
}))

app.use('/book', routerBook)
app.use('/favorite', routerFavorite)

const port = 8000

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})
