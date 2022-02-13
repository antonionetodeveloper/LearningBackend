const express = require('express')
const cors = require("cors")
const app = express()
const bodyParser = require('body-parser')

loginsystemlib

const getUserByUserName = require('../settings/CRUD/getUserByUsername');
const createUser  = require('../settings/CRUD/createUser');

app.use(cors()); 
app.use((req, res, next) => {next()})
app.use(bodyParser.json())


app.get('/', async (req, res) => {
	res.send("Rodando servidor")
})

app.post("/register", async (req, res) => {
	const {login}    = await req.body
	const {password} = await req.body

	await createUser(login, password)
})

app.post("/login", async (req, res) => {
	const {recivedLogin, recivedPassword} = req.body
	let isValid = false
	
	const data = await getUserByUserName(recivedLogin)

	if(!data){
		res.send(200)
		return
	}
	if(recivedLogin != data.dataValues.login || recivedPassword != data.dataValues.password){
		res.send(200)

		
		return isValid
	}else{
		res.send(201)

		isValid = true
		return isValid
	}
})


app.use(express.json())

const port = 3001
app.listen(port, () => {console.log(`Rodando na porta ${port}`)})
