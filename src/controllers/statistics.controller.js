const pool = require("../config/database");
const statistics = require("../models/statistic.model");

const Statistics = {};

Statistics.getListStatistics = (req, res) => {
  res.render("links/statistic/statistics");
};

Statistics.postStatistic = async (req, res) => {
  const {    
    id_player,
    id_statistic,
    swing,
    threw,
    happens,
    agility,
    defending,
    physical,
  } = req.body;
  const newLink = {    
    id_player,
    id_statistic,
    swing,
    threw,
    happens,
    agility,
    defending,
    physical,
  };
  await pool.query("INSERT INTO statistics set ?", [newLink]);
  res.redirect("/statistics/list-statistics");
};

Statistics.deleteStatistic = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM statistics WHERE ID = ?", [id]);
  res.redirect("/statistics/list-statistics");
};

Statistics.getStatistic = async (req, res) => {
  const { id } = req.params;
  const statistic = await pool.query("SELECT * FROM statistics WHERE id = ?", [id]);
  res.render('links/statistic/edit-statistics', { statistic: statistic[0] });
};
Statistics.updateStatistic = async (req, res) => {
  const { id } = req.params;
  const {    
    id_player,
    id_statistic,
    swing,
    threw,
    happens,
    agility,
    defending,
    physical,
  } = req.body;
  const newLink = {    
    id_player,
    id_statistic,
    swing,
    threw,
    happens,
    agility,
    defending,
    physical,
  };
  await pool.query("UPDATE statistics set ? WHERE id = ?", [newLink, id]);
  res.redirect("/statistics/list-statistics");
};

module.exports = Statistics;
