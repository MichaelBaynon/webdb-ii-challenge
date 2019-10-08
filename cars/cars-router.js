const express = require('express')
const knex = require('knex')

const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

const router = express.Router()

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.json({message: '/get for cars'})
    })
    .catch(err => {
        res.status(500).json({message: 'failed to retrieve cars'})
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params

    db('cars')
    .then(cars => {
        res.json({message: '/get specific id for a car'})
    })
    .catch(err => {
        res.status(500).json({message: 'failed to retrieve car'})
    })
})

router.post('/', (req, res) => {
    const carData = req.body;
    db('cars').insert(carData)
    .then(ids => {
      db('cars').where({ id: ids[0] })
      .then(newCarEntry => {
        res.status(201).json(newCarEntry);
      });
    })
    .catch (err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data" });
    });
  });


module.exports = router