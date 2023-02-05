'use strict'
const {Model} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
     static associate({Clients}) {
      this.belongsTo(Clients, {foreignKey: 'clientId'})
    }
  }
  Orders.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    order: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Client',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Orders'
  })
  return Orders
}