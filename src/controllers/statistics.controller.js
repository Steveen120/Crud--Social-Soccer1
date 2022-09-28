const pool = require("../config/database");

const Statistics={}

Statistics.getListStatistics = (req, res) => {
    res.render("links/estadisticas");
};



module.exports=Statistics