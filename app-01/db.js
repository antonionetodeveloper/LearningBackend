const Sequelize = require('sequelize')
const sequelize = new Sequelize('crud', 'root', '988766544', {
	dialect: 'mysql',
	host: 'localhost',
	port: 3306
})

module.exports = sequelize