const express = require('express');
const router  = express.Router();

const pool = require('../database');

//jugador//
router.get('/jugador', (req, res)  => {
    res.render('links/jugador');
});

router.post('/jugador', (req, res ) => {
     console.log(req.body);
    res.send('received');
});
//equipo//
router.get('/equipo', (req, res)  => {
    res.render('links/equipo');
});

router.post('/equipo', (req, res ) => {
    console.log(req.body);
    res.send('received');
});

//estadisticas//
router.get('/estadisticas', (req, res)  => {
    res.render('links/estadisticas');
});

router.post('/estadisticas', (req, res ) => {
    console.log(req.body);
    res.send('received');
});

//estadisticasequipo//
router.get('/estadisticasequipo', (req, res)  => {
    res.render('links/estadisticasequipo');
});

router.post('/estadisticasequipo', (req, res ) => {
    console.log(req.body);        
    res.send('received');
});
module.exports = router; 