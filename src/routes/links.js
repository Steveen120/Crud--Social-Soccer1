const express = require("express");
const router = express.Router();

const pool = require("../database");

//jugador//
router.get("/jugador", (req, res) => {
  res.render("links/jugador");
});

router.post("/jugador", async (req, res) => {
  const {
    nombrejugador,
    posicionjugador,
    apellidojugador,
    alturajugador,
    edadjugador
  } = req.body;
  const newLink = {
    nombrejugador,
    posicionjugador,    
    apellidojugador,
    alturajugador,
    edadjugador
  };
  await pool.query('INSERT INTO jugador set ?', [newLink]);
  res.send("received");
});

router.get('/listajugador', async (req, res) =>{
  const jugador = await pool.query('SELECT *FROM  jugador');  
  res.render('links/list', {jugador})
})


//equipo//
router.get("/equipo", (req, res) => {
  res.render("links/equipo");
});

router.post("/equipo", async (req, res) => {
  const { equipo, dueño, entrenador, fecha } = req.body;
  const newLink = {
    equipo,
    dueño,
    entrenador,
    fecha,
  };
  await pool.query('INSERT INTO equipo set ?' , [newLink]);
  res.send("received");
});

router.get('/listaequipo', async (req, res) =>{
  const equipo = await pool.query('SELECT *FROM  equipo');  
  res.render('links/list1', {equipo})
})


//estadisticas//
router.get("/estadisticas", (req, res) => {
  res.render("links/estadisticas");
});

router.post("/estadisticas", async (req, res) => {
  const {
    id_jugador,
    id_estadisticas,
    ritmo,
    tiro,
    pase,
    agilidad,
    defensa,
    fisico,
  } = req.body;
  const newLink = {
    id_jugador,
    id_estadisticas,
    ritmo,
    tiro,
    pase,
    agilidad,
    defensa,
    fisico,
  };
  await pool.query('INSERT INTO estadisticas set ?', [newLink]);
  res.send("received");
});

router.get('/listaestadisticas', async (req, res) =>{
  const estadisticas = await pool.query('SELECT *FROM  estadisticas');  
  res.render('links/list2', {estadisticas})
})

//estadisticasequipo//
router.get("/estadisticasequipo", (req, res) => {
  res.render("links/estadisticasequipo");
});

router.post("/estadisticasequipo", async (req, res) => {
  const { valoracionequipo, quimicaequipo, triunfosequipo } = req.body;
  const newLink = {
    valoracionequipo,
    quimicaequipo,
    triunfosequipo,
  };
  await pool.query('INSERT INTO estadisticasequipo set ?', [newLink]);
  res.send("received");
});
router.get('/listaestadisticasequipo', async (req, res) =>{
  const estadisticasequipo = await pool.query('SELECT *FROM  estadisticasequipo');  
  res.render('links/list3', {estadisticasequipo})
})


module.exports = router;
