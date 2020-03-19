const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const characterRouter = require('../characters/characters-router')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
  res.send(`<h1>Stranger Things API</h1>`)
})

server.use('/api/characters', characterRouter)

module.exports = server