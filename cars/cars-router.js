const express = require('express');
const db = require('../data/db-config'); //<<<<<<< Will be used to require data once migration and seed data is created.

const router = express.Router();


router.get('/', (req,res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            console.log('GET', err)
            res.status(500).json({ error: 'Failed to retrieve cars data' })
        });

})

router.get('/:id', (req, res) => {
    const  { id } = req.params;
    console.log({id})
    db('cars')
      .where( {id} )
      .first()
      .then(car => {
          res.status(200).json(car)
      })
      .catch(err => {
          console.log("GET ID", err)
          res.status(500).json( { error: `Failed to retrieve car with that specified id`} )
      })
})

module.exports = router;