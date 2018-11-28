const mongoose = require('mongoose')
const connectionString = 'mongodb://student:student1@ds159747.mlab.com:59747/star-lab'
const connection = mongoose.connection

mongoose.connect(connectionString, { useNewUrlParser: true })

connection.on('error', err => {
  console.log('Error from databse: ', err)
})

connection.once('open', () => {
  console.log('Connected to Database')
})