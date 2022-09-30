const pool = require("../config/database");
const players = require("../models/player.model");

const Players={}

Players.getListPlayers = (req, res) => {
    res.render("links/player/players");
};

Players.postPlayer = async(req, res) =>{    
    const {
      playername,
      playerposition,
      surnameplayer,
      playerheight,
      playerage
    } = req.body;
    const newLink = {
      playername,
      playerposition,    
      surnameplayer,
      playerheight,
      playerage
    };
    await pool.query('INSERT INTO players set ?', [newLink]);
     //Flash
    req.flash('success','Agregado Correctamenta');
    res.redirect("/players/list-players");
  };

  Players.deletePlayer = async(req, res) =>{
    const { id } = req.params;
    await pool.query("DELETE FROM players WHERE ID = ?", [id]);
    req.flash('success','Eliminado correctamente');
    res.redirect("/players/list-players");
    };

Players.getPlayer = async (req, res) => {
  const { id } = req.params;
  const player = await pool.query('SELECT * FROM players WHERE id = ?', [id]);
  res.render('links/player/edit-players', {player: player[0]});
  
};
Players.updatePlayer = async (req, res) => {
  const { id } = req.params;
  const { playerposition, playername , surnameplayer, playerheight, playerage } = req.body;
  const newLink = {playerposition, playername , surnameplayer, playerheight, playerage      
  };
  await pool.query('UPDATE players set ? WHERE id = ?', [newLink, id]);
  req.flash('success','Editado Correctamenta');  
  res.redirect('/players/list-players');
};
module.exports=Players