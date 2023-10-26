const db = require('../util/database')
const {DataTypes} = require('sequelize')

const Team = db.define('team', {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement:true,
        type: DataTypes.INTEGER
    },
    teamname:DataTypes.STRING,
})

module.exports = Team