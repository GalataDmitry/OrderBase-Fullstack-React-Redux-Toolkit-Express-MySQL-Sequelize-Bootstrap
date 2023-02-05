'use strict'
const {Model} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Clients extends Model {
         static associate({Orders}) {
            this.hasMany(Orders, {foreignKey: 'clientId'})
        }
    }
    Clients.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        client_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Clients'
    })
    return Clients
}