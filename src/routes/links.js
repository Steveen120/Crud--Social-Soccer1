const express = require('express');
const router  = express.Router();

const pool = require('../database');

//jugador//
router.get('/jugador', (req, res)  => {
    res.render('links/jugador');
});

router.post('/jugador', async (req, res ) => {
     console.log(req.body);
     const newLink = {
        nombre_jugador,
        apellido_jugador,
        altura_jugador,
        edad_jugador
     };
     pool.query('INSERT INTO links set ?' , [newLink]);
    res.send('received');
});
//equipo//
router.get('/equipo', (req, res)  => {
    res.render('links/equipo');
});

router.post('/equipo', async (req, res ) => {
    console.log(req.body);
    const newLink = {
        equipo,
        dueño,
        entrenador,
        fecha
     };

    pool.query('INSERT INTO links set ?' , [newLink]);
    res.send('received');
});

//estadisticas//
router.get('/estadisticas', (req, res)  => {
    res.render('links/estadisticas');
});

router.post('/estadisticas', async (req, res ) => {
    console.log(req.body);
    const newLink = {
        Estadísticas,
        Ritmo,
        Tiro,
        Pase, 
        Agilidad,
        Defensa,
        Fisico
     };

    pool.query('INSERT INTO links set ?' , [newLink]);
    res.send('received');
});

//estadisticasequipo//
router.get('/estadisticasequipo', (req, res)  => {
    res.render('links/estadisticasequipo');
});

router.post('/estadisticasequipo', async (req, res ) => {
    console.log(req.body);
    const newLink = {
        valoracion,
        quimica,
        triunfo,
     };

    pool.query('INSERT INTO links set ?' , [newLink]);        
    res.send('received');
});
module.exports = router; 