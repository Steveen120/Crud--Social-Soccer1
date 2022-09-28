const express = require("express");
const router = express.Router();
const playersController = require('../controllers/players.controller');
const teamsController = require('../controllers/teams.controller');
const statisticsController = require('../controllers/statistics.controller');
const teamstatsController = require('../controllers/teamstats.controller')
const pool = require("../config/database");

//jugador//
router.get("/player/players", playersController.getListPlayers);
router.post("/player/players", playersController.postPlayer);
//mostrara las listas//
router.get('/player/list-players', async (req, res) =>{
  const players = await pool.query('SELECT * FROM  players');  
  res.render('links/player/list-players', {players})
})
//eliminar jugador//
router.get('/delete-players/:id', playersController.deletePlayer);
//editar//



//equipo//
router.get("/team/teams", teamsController.getListTeams);
router.post("/team/teams", teamsController.postTeams);
//lista//
router.get('/team/list-players', async (req, res) =>{
  const players = await pool.query('SELECT * FROM  players');  
  res.render('links/player/list-players', {players})
})







//estadisticas//
router.get("/statistics", statisticsController.getListStatistics);
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
router.get("/teamstats", teamstatsController.getListTeamstats); 
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