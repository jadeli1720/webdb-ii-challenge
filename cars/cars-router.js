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

module.exports = router;