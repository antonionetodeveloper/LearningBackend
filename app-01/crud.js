const Sequelize = require('sequelize')
const database =  require('./db')

const crud = database.define('crud', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},

	login: {
		type: Sequelize.STRING,
	},

	password: {
		type: Sequelize.STRING
	}
	})

module.exports = crud
