const express = require('express')
const path = require("path");

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('static'))

app.get('/movie', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})

app.get('/book', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'book.html'))
})

app.listen(PORT, () => {
  console.log('Server has been started...')
})
