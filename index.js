const express = require('express');

const app = express()
const port = 3001

app.get('/api/products', (req, res) => {
  fetch('https://mockend.up.railway.app/api/products')
  .then(response => response.json())
  .then(data => {res.send(data)})
})

app.listen(port, () => {
  console.log(`API app listening on port ${port}`)
})
