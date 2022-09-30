const express = require("express");
const router = express.Router();
const playersController = require('../controllers/players.controller');
const teamsController = require('../controllers/teams.controller');
const statisticsController = require('../controllers/statistics.controller');
const teamstatsController = require('../controllers/teamstats.controller')
const pool = require("../config/database");

//jugador//
router.get("/", teamsController.getListTeams);
router.post("/team", teamsController.postTeams);
//mostrara las listas//
router.get('/list-teams', async (req, res) =>{
  const teams = await pool.query('SELECT * FROM  teams');  
  res.render('links/team/list-teams', {teams})
})
//eliminar jugador//
router.get('/delete-teams/:id', teamsController.deleteTeam);

//editar//
router.get('/edit-team/:id', teamsController.getteam);
router.post('/edit-team/:id', teamsController.updateTeam);




module.exports = router;




module.exports = router;



