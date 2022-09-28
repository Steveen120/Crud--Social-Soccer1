const pool = require("../config/database");

const Teams={}

Teams.getListTeams = (req, res) => {
    res.render("links/equipo")
};



module.exports=Teams