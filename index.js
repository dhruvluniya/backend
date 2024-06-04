require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/youtube', (req,res) => {
    res.send('Youtube loading')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})