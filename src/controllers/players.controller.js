const pool = require("../config/database");

const Players={}

Players.getListPlayers = (req, res) => {
    res.render("links/jugador");
};



module.exports=Players