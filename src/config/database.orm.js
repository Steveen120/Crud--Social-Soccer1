const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "social_soccer_player";

mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user     : process.env.DB_USER || "root",
    password : process.env.DB_PASSWORD || "",
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Database created or verified successfully");
    })
})

const playersModel = require('../models/player.model');
const teamsModel = require('../models/team.model');
const statisticsModel = require('../models/statistic.model');
const teamstatsModel = require('../models/teamstats.model');

const sequelize = new Sequelize(
  'social_soccer_player',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Connect')
  })
  .catch(err => {
    console.log('No connect')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("synchronized tables")
  })

const players = playersModel(sequelize, Sequelize);
const teams = teamsModel(sequelize, Sequelize);
const statistics = statisticsModel(sequelize, Sequelize);
const teamstats = teamstatsModel(sequelize, Sequelize);


//Relaciones 


module.exports = {
  players,
  teams,
  statistics,
  teamstats
}