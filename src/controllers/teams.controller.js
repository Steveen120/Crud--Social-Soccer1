const pool = require("../config/database");
const teams = require("../models/team.model");

const Teams = {};

Teams.getListTeams = (req, res) => {
  res.render("links/team/teams");
};

Teams.postTeams = async (req, res) => {
  const { squad, boss, coach, foundation } = req.body;
  const newLink = {
    squad,
    boss,
    coach,
    foundation,
  };
  await pool.query("INSERT INTO teams set ?", [newLink]);
  //Flash
  req.flash('success','Agregado Correctamenta');
  res.redirect("/teams/list-teams");
};

Teams.deleteTeam = async(req, res) =>{
  const { id } = req.params;
  await pool.query("DELETE FROM teams WHERE ID = ?", [id]);
  req.flash('success','Eliminado correctamente');    
  res.redirect("/teams/list-teams");
  };


  
module.exports = Teams;