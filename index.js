/**********************************************************/

require ('dotenv').config ()

const server = require ('./server')
const port = process.env.PORT || 10130

server.listen (port, () => {
  console.log (`it's alive!`)
  console.log (`\n>>> listening on port ${port} <<<\n`)
})

/**************************************/
