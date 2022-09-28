const express = require("express");
const router = express.Router();
const playersController = require('../controllers/players.controller');
const teamsController = require('../controllers/teams.controller');

const pool = require("../config/database");

//jugador//
router.get("/players", playersController.getListPlayers);
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
//editar//
router.get('/edit-jugador/:id', async(req, res) =>{
const{ id } = req.params;
const jugador = await pool.query('SELECT * FROM jugador WHERE id = ?', [id]);
res.render('links/edit-jugador', {jugador: jugador[0]});
});
router.post('/edit-jugador/:id', async (req, res) =>{
const {id} = req.params;

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
console.log(newLink);
await pool.query('UPDATE jugador set ? WHERE id = ?',[newLink, id]);
res.redirect('/links/listajugador');
});



//equipo//
router.get("/teams", teamsController.getListTeams);
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

//editar equipo//
router.get('/edit-equipo/:id', async(req, res) =>{
  const{ id } = req.params;
  const equipo = await pool.query('SELECT * FROM equipo WHERE id = ?', [id]);
  res.render('links/edit-equipo', {equipo: equipo[0]});
  });
  
  router.post('/edit-equipo/:id', async (req, res) =>{
  const {id} = req.params;
  const { equipo, dueño, entrenador, fecha } = req.body;
  const newLink = {
    equipo,
    dueño,
    entrenador,
    fecha,
  };
console.log(newLink);
await pool.query('UPDATE equipo set ? WHERE id = ?',[newLink, id]);
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
    fisico
  } = req.body;
  const newLink = {
    id_jugador,
    id_estadisticas,
    ritmo,
    tiro,
    pase,
    agilidad,
    defensa,
    fisico
  };
  await pool.query('INSERT INTO estadisticas set ?', [newLink]);
  res.redirect("listaestadisticas");
});
//mostrara las listas//
router.get('/listaestadisticas', async (req, res) =>{
  const estadisticas = await pool.query('SELECT *FROM  estadisticas');  
  res.render('links/list-estadisticas', {estadisticas})
})
//eliminar//
router.get('/delete-estadisticas/:id', async(req, res) =>{
  const { id } = req.params;
  await pool.query('DELETE FROM estadisticas WHERE ID = ?', [id]);
  res.redirect('/links/listaestadisticas');
  });
//editar lista//
router.get('/edit-estadisticas/:id', async(req, res) =>{
  const{id} = req.query;
  const estadisticas = await pool.query('SELECT * FROM estadisticas WHERE id = ?', [id]);
  res.render('links/edit-estadisticas', {estadisticas: estadisticas[0]});
});
router.post('/edit-estadisticas/:id', async(req, res) =>{
  const{id} = req.query;
  const {
    id_jugador,
    id_estadisticas,
    ritmo,
    tiro,
    pase,
    agilidad,
    defensa,
    fisico
  } = req.body;
  const newLink = {
    id_jugador,
    id_estadisticas,
    ritmo,
    tiro,
    pase,
    agilidad,
    defensa,
    fisico
  };
  console.log(newLink);
  await pool.query('UPDATE estadisticas set ? WHERE id = ?',[newLink, id]);
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
//eliminar estadisticasequipo//
router.get('/delete-estadisticasequipo/:id', async(req, res) =>{
  const { id } = req.params;
  await pool.query('DELETE FROM estadisticasequipo WHERE ID = ?', [id]);
  res.redirect('/links/listaestadisticasequipo');
  });
//Editar estadisticasequipo
router.get('/edit-estadisticasequipo/:id', async(req, res) => {
  const{ id } = req.params;
  const estadisticasequipo = await pool.query('SELECT * FROM estadisticasequipo WHERE id = ?',)
  res.render('links/edit-estadisticasequipo', {estadisticasequipo: estadisticasequipo[0]});
});
  router.post('/edit-estadisticasequipo/:id', async (req, res) =>{
    const {id} = req.params;
    const { valoracionequipo, quimicaequipo, triunfosequipo } = req.body;
    const newLink = {
      valoracionequipo,
      quimicaequipo,
      triunfosequipo,
    };
    console.log(newLink);
    await pool.query('UPDATE estadisticasequipo set ? WHERE id = ?', [newLink, id]);
    res.redirect('/links/listaestadisticasequipo');
  });
module.exports = router;