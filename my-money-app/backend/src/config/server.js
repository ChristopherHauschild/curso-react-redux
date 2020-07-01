const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const queryParser = require('express-query-int')

const server = express()
const allowCors = require('./cors')

// toda requisição no formato urlenconded será interpretada pelo bodyParser
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

// parseia query params para int (ex: limit, skip)
server.use(queryParser())

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}...`)
})

module.exports = server