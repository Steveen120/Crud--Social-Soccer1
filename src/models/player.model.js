const players =(sequelize, type) =>{
    return sequelize.define('players', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        posicionjugador: type.STRING, 
        nombrejugador: type.STRING,
        apellidojugador: type.STRING,
        alturajugador: type.STRING,
        edadjugador: type.STRING,

        createPlayers:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatePlayers:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = players