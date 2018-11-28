let router = require('express').Router()
let Ships = require('../models/ship')

//GET ALL
router.get('/ships', (req, res, next) => {
  Ships.find({})
    .then(ships => res.send(ships))
    .catch(next)
})

//GET SHIPS BY ID
router.get('/ships/:id', (req, res, next) => {
  Ships.findById(req.params.id)
    .then(ship => res.send(ship))
    .catch(next)
})

// ADD A SHIP
router.post('/ships', (req, res, next) => {
  Ships.create(req.body)
    .then(ship => res.send(ship))
    .catch(next)
})

//DESTROY A SHIP
router.delete('/ships/:id', (req, res, next) => {
  Ships.findByIdAndDelete(req.params.id)
    .then(ship => res.send({ message: "DELORTED", data: ship }))
    .catch(next)
})

module.exports = router