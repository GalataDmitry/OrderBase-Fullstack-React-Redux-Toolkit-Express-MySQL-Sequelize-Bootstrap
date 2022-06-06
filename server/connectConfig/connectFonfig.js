const {Sequelize} = require('sequelize')

module.exports = sequelize = new Sequelize({
    host: '127.0.0.1',
    port: 3306,
    database: 'OrderBase',
    username: 'uncleniko',
    password: '',
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
})
