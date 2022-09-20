const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add' , (req, res) => {
    res.send('links/add');
});

router.post('/add' , (req, res)=> {
    res.send('received');
});

module.exports = router;
