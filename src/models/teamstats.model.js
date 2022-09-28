const teamstats =(sequelize, type) =>{
    return sequelize.define('teamstats', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        teamvaluation: type.STRING, 
        teamchemistry: type.STRING,
        teamwins: type.STRING,

        createTeamstats:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateTeamstats:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = teamstats