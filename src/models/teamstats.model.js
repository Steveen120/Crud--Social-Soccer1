const teamstats =(sequelize, type) =>{
    return sequelize.define('teamstats', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        valoracionequipo: type.STRING, 
        quimicaequipo: type.STRING,
        triunfosequipo: type.STRING,

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