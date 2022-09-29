const express = require("express");
const router = express.Router();
const playersController = require('../controllers/players.controller');
const teamsController = require('../controllers/teams.controller');
const statisticsController = require('../controllers/statistics.controller');
const teamstatsController = require('../controllers/teamstats.controller')
const pool = require("../config/database");







//equipo//
router.get("/team/teams", teamsController.getListTeams);
router.post("/team/teams", teamsController.postTeams);
//lista//
router.get('/team/list-teams', async (req, res) =>{
  const teams = await pool.query('SELECT * FROM  teams');  
  res.render('links/team/list-teams', {teams})
})
//eliminar//
router.get('/delete-teams/:id', teamsController.deleteTeam);
//editar//




//estadisticas//
//jugador//
router.get("/statistic/statistics", statisticsController.getListStatistics);
router.post("/statistic/statistics", statisticsController.postStatistic );
//mostrara las listas//
router.get('/statistic/list-statistics', async (req, res) =>{
  const statistics = await pool.query('SELECT * FROM  statistics');  
  res.render('links/statistic/list-statistics', {statistics})
})
//eliminar jugador//
router.get('/delete-estatistics/:id', statisticsController.deleteStatistic);
//editar//












//estadisticasequipo//
router.get("/teamstats", teamstatsController.getListTeamstats); 
router.post("/estadisticasequipo", async (req, res) => {
  const { teamvaluation , teamchemistry, teamwins } = req.body;
  const newLink = {
    teamvaluation ,
    teamchemistry,
    teamwins,
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
    const { teamvaluation , teamchemistry, teamwins } = req.body;
    const newLink = {
      teamvaluation ,
      teamchemistry,
      teamwins,
    };
    console.log(newLink);
    await pool.query('UPDATE estadisticasequipo set ? WHERE id = ?', [newLink, id]);
    res.redirect('/links/listaestadisticasequipo');
  });
module.exports = router;