const pool = require("../config/database");
const players = require("../models/player.model");

const Players={}

Players.getListPlayers = (req, res) => {
    res.render("links/player/players");
};

Players.postPlayer = async(req, res) =>{    
    const {
      nombrejugador,
      posicionjugador,
      apellidojugador,
      alturajugador,
      edadjugador
    } = req.body;
    const newLink = {
      nombrejugador,
      posicionjugador,    
      apellidojugador,
      alturajugador,
      edadjugador
    };
    await pool.query('INSERT INTO players set ?', [newLink]);
    res.redirect("/players/list-players");
  };


  Players.deletePlayer = async(req, res) =>{
    const { id } = req.params;
    await pool.query("DELETE FROM players WHERE ID = ?", [id]);    
    res.redirect("/players/list-players");
    };






module.exports=Players