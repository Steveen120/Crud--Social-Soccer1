const express = require("express");
const router = express.Router();
const playersController = require('../controllers/players.controller');
const teamsController = require('../controllers/teams.controller');
const statisticsController = require('../controllers/statistics.controller');
const teamstatsController = require('../controllers/teamstats.controller')
const pool = require("../config/database");

//jugador//
router.get("/", teamstatsController.getListTeamstats);
router.post("/teamstat", teamstatsController.postTeamstat);
//mostrara las listas//
router.get('/list-teamstats', async (req, res) =>{
  const teamstats = await pool.query('SELECT * FROM  teamstats');  
  res.render('links/teamstat/list-teamstats', {teamstats})
})
//eliminar jugador//
router.get('/delete-players/:id', );

//editar//





module.exports = router;