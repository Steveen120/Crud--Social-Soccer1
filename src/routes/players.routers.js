const express = require("express");
const router = express.Router();
const playersController = require('../controllers/players.controller');
const teamsController = require('../controllers/teams.controller');
const statisticsController = require('../controllers/statistics.controller');
const teamstatsController = require('../controllers/teamstats.controller')
const pool = require("../config/database");

//jugador//
router.get("/", playersController.getListPlayers);
router.post("/player", playersController.postPlayer);
//mostrara las listas//
router.get('/list-players', async (req, res) =>{
  const players = await pool.query('SELECT * FROM  players');  
  res.render('links/player/list-players', {players})
})
//eliminar jugador//
router.get('/delete-players/:id', playersController.deletePlayer);

//editar//
router.get('/edit-player/:id', playersController.getPlayer);
router.post('/edit-player/:id', playersController.updatePlayer);




module.exports = router;