const express = require('express')

const server = express()
server.use(express.json());

server.get('/', (req,res) => {
    res.json('Welcome')
})

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})