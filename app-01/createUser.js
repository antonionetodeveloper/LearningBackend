const database = require('./db')
const CRUD = require('./crud')


async function createNewUser(login, password){
	await database.sync()

	const newUser = await CRUD.create({
		login: `${login}`,
		password: `${password}`
	})
}

module.exports = createNewUser
