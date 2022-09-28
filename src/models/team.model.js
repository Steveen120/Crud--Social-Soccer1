const teams =(sequelize, type) =>{
    return sequelize.define('teams', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        equipo: type.STRING, 
        dueño: type.STRING,
        entrenador: type.STRING,
        alturajugador: type.STRING,
        fundacion: type.STRING,

        createTeams:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateTeams:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = teams