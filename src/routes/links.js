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
router.get("/statistic/statistics", statisticsController.getListStatistics);
router.post("/statistic/statistics", statisticsController.postStatistic );
//mostrara las listas//
router.get('/statistic/list-statistics', async (req, res) =>{
  const statistics = await pool.query('SELECT * FROM  statistics');  
  res.render('links/statistic/list-statistics', {statistics})
})
//eliminar//
router.get('/delete-statistcs/:id', statisticsController.deleteStatistic);
//editar//




//estadisticasequipo//
router.get("/teamstat/teamstats", teamstatsController.getListTeamstats); 
router.post("/teamstat/teamstats", teamstatsController.postTeamstat );
//mostrara las listas//
router.get('/teamstat/list-teamstats', async (req, res) =>{
  const teamstats = await pool.query('SELECT *FROM  teamstats');  
  res.render('links/teamstat/list-teamstats', {teamstats})
})
//eliminar estadisticasequipo//
router.get('/delete-teamstats/:id', teamstatsController.deleteTeamstat);


module.exports = router;