const statistics =(sequelize, type) =>{
    return sequelize.define('statistics', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        id_player: type.STRING, 
        id_statistic: type.STRING,
        swing: type.STRING,
        threw: type.STRING,
        happens: type.STRING,
        agility: type.STRING,
        defending: type.STRING,
        physical: type.STRING,

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