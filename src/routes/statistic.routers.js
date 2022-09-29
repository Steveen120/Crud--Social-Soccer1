const express = require("express");
const router = express.Router();
const playersController = require('../controllers/players.controller');
const teamsController = require('../controllers/teams.controller');
const statisticsController = require('../controllers/statistics.controller');
const teamstatsController = require('../controllers/teamstats.controller')
const pool = require("../config/database");

//jugador//
router.get("/", statisticsController.getListStatistics );
router.post("/statistic", statisticsController.postStatistic );
//mostrara las listas//
router.get('/list-statistics', async (req, res) =>{
  const statistics = await pool.query('SELECT * FROM  statistics');  
  res.render('links/statistic/list-statistics', {statistics})
})
//eliminar jugador//
router.get('/delete-statistics/:id', statisticsController.deleteStatistic);

//editar//





module.exports = router;