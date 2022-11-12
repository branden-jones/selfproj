require('dotenv').config();

const express = require('express')

const server = express()
server.use(express.json());

server.get('/hello', (req,res) => {
    res.json('Welcome')
})

const port = process.env.PORT

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})