const pool = require("../config/database");

const Teamstats={}

Teamstats.getListTeamstats = (req, res) => {
    res.render("links/estadisticasequipo");
};



module.exports=Teamstats