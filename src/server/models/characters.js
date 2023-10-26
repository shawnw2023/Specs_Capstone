const db = require('../util/database')
const {DataTypes} = require('sequelize')

const Characters = db.define('character', {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement:true,
        type: DataTypes.INTEGER
    },
    superhero_id:DataTypes.INTEGER,
})

module.exports = Characters