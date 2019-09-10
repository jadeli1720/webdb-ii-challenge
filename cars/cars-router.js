const express = require('express');
const db = require('../data/db-config'); //<<<<<<< Will be used to require data once migration and seed data is created.

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello. Do you see me?')
})

module.exports = router;