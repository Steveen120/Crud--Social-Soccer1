const statistics =(sequelize, type) =>{
    return sequelize.define('statistics', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        id_jugador: type.STRING, 
        id_estadisticas: type.STRING,
        ritmo: type.STRING,
        tiro: type.STRING,
        pase: type.STRING,
        agilidad: type.STRING,
        defensa: type.STRING,
        fisico: type.STRING,

        createStatistics:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateStatistics:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = statistics