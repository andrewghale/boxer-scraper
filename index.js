const express = require('express')

const scraper = require('./scraper')

const app = express()

app.get('/', (req, res) => {
  res.json({
    message: 'scraping is fun!'
  })
})

app.get('/search', (req, res) => {
  scraper
    .searchBoxer()
    .then(movies => {
      res.json(movies)
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})