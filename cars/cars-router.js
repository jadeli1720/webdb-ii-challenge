const express = require('express');
// const db = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello. Do you see me?')
})

module.exports = router;