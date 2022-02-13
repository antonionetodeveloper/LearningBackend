const database = require('../db')
const USER = require('../create')


async function createNewUser(login, password){
	await database.sync()

	const newUser = await USER.create({
		login: `${login}`,
		password: `${password}`
	})
}

module.exports = createNewUser