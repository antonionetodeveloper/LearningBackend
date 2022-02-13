const database = require('./db')
const CRUD = require('./crud')


async function alterPassword(userID, newpassword){
	await database.sync()

	const user = await CRUD.findByPk(userID)
	user.password = newpassword
	
	await user.save()
}

module.exports = alterPassword
