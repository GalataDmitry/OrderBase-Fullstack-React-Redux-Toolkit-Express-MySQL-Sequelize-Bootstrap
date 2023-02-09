const {Sequelize} = require('sequelize')

module.exports = sequelize = new Sequelize({
    // host: '127.0.0.1',
    host: '172.16.0.3',
    port: 3306,
    database: 'OrderBase',
    username: 'uncleniko',
    password: 'galatapodsalatom',
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
})
