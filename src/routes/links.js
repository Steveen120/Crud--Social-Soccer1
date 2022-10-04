const express = require("express");
const router = express.Router();
const playersController = require('../controllers/players.controller');
const teamsController = require('../controllers/teams.controller');
const statisticsController = require('../controllers/statistics.controller');
const teamstatsController = require('../controllers/teamstats.controller')
const pool = require("../config/database");

module.exports = router;