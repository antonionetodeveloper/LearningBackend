const database = require('./db')
const CRUD = require('./crud')


async function deleteUser(userID){
	await database.sync()

	const user = await CRUD.findByPk(userID)
	await user.destroy()
}

module.exports = deleteUser
