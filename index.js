const express = require('express');

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  fetch('https://mockend.up.railway.app/api/products')
  .then(response => response.json())
  .then(data => {res.send(data)})
})

app.listen(port, () => {
  console.log(`API app listening on port ${port}`)
})
