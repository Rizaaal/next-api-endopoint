const express = require('express');

const app = express()
const port = process.env.PORT || 3000

app.get('/api/products', (req, res) => {
  fetch('https://mockend.up.railway.app/api/products')
  .then(response => response.json())
  .then(data => {res.send(data)})
})

app.listen(port, '0.0.0.0', () => {
  console.log(`API app listening on port ${port}`)
})
