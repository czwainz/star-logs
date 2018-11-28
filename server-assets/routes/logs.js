let router = require('express').Router()
let Logs = require('../models/log')
let Users = require('../models/user')

//GET ALL LOGS
// router.get('/', (req, res, next) => {
//   Logs.find({})
//     .then(logs => res.send(logs))
//     .catch(next)
// })

//5bff05e481af6482d0085d67

//GET USER LOGS
router.get('/userLogs', (req, res, next) => {
  Logs.find({ author: req.session.uid })
    .then(logs => {
      res.send(logs)
    })
    .catch(next)
})

//POST NEW LOG IF LOGGED IN
router.post('/logs', (req, res, next) => {
  req.body.author = req.session.uid
  Users.findById(req.session.uid)
    .then(user => {
      req.body.shipId = user.shipId
      Logs.create(req.body)
        .then(newLog => {
          res.send(newLog)
        })
        .catch(next)

    })
})

module.exports = router