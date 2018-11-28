let express = require('express')
let bodyParser = require('body-parser')
require('./server-assets/db/mlab-config')

let server = express()
const PORT = process.env.PORT || 3000

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public'))


let auth = require('./server-assets/auth/routes')
server.use(auth.session)
server.use('/account', auth.router)

server.use((req, res, next) => {
  if (!req.session.uid) {
    return res.status(401).send({
      error: 'please login to continue'
    })
  }
  next()
})




let logRoutes = require('./server-assets/routes/logs')
server.use('/api', logRoutes)

let shipRoutes = require('./server-assets/routes/ships')
server.use('/api', shipRoutes)




server.use('*', (error, req, res, next) => {
  res.status(error.status || 400).send({ message: error.message })
})

server.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})