const fs = require("fs")

const data = JSON.parse(fs.readFileSync("books.json"))
const newData = { id:'3', nome: 'Livro mais que demais' }

fs.writeFileSync("books.json", JSON.stringify([...data, newData ]))

console.log(JSON.parse(fs.readFileSync("books.json")))
