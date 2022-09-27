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
  res.redirect("listajugador");
});
//mostrara las listas//
router.get('/listajugador', async (req, res) =>{
  const jugador = await pool.query('SELECT *FROM  jugador');  
  res.render('links/list-jugador', {jugador})
})
//eliminar jugador//
router.get('/delete-jugador/:id', async(req, res) =>{
const { id } = req.params;
await pool.query('DELETE FROM jugador WHERE ID = ?', [id]);
res.redirect('/links/listajugador');
});


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
  res.redirect("listaequipo");
});
//mostrara las listas//
router.get('/listaequipo', async (req, res) =>{
  const equipo = await pool.query('SELECT *FROM  equipo');  
  res.render('links/list-equipo', {equipo})
})
//eliminar equipo//
router.get('/delete-equipo/:id', async(req, res) =>{
  const { id } = req.params;
  await pool.query('DELETE FROM equipo WHERE ID = ?', [id]);
  res.redirect('/links/listaequipo');
  });
  

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
  res.redirect("listaestadisticas");
});
//mostrara las listas//
router.get('/listaestadisticas', async (req, res) =>{
  const estadisticas = await pool.query('SELECT *FROM  estadisticas');  
  res.render('links/list-estadisticas', {estadisticas})
})
//eliminar
router.get('/delete/:id', async(req, res) =>{
  const { id } = req.params;
  await pool.query('DELETE FROM estadisticas WHERE ID = ?', [id]);
  res.redirect('/links/listaestadisticas');
  });

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
  res.redirect("listaestadisticasequipo");
});
//mostrara las listas//
router.get('/listaestadisticasequipo', async (req, res) =>{
  const estadisticasequipo = await pool.query('SELECT *FROM  estadisticasequipo');  
  res.render('links/list-estadisticasequipo', {estadisticasequipo})
})

router.get('/delete/:id', async(req, res) =>{
  const { id } = req.params;
  await pool.query('DELETE FROM estadisticasequipo WHERE ID = ?', [id]);
  res.redirect('/links/listaestadisticasequipo');
  });

module.exports = router;
