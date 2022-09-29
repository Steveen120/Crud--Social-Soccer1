const pool = require("../config/database");
const teamstats =  require("../models/teamstats.model");

const Teamstats={}

Teamstats.getListTeamstats = (req, res) => {
    res.render("links/teamstat/teamstats");
};

Teamstats.postTeamstat = async(req,res)=>{
    const { teamvaluation , teamchemistry, teamwins } = req.body;
    const newLink = {
      teamvaluation ,
      teamchemistry,
      teamwins,
    };
    await pool.query('INSERT INTO teamstats set ?', [newLink]);
    res.redirect("/teamstats/list-teamstats");
};
 Teamstats.deleteTeamstat = async(req,res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM teamstats WHERE ID = ?", [id]);    
    
 }


module.exports=Teamstats