import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Main } from '../styles/signUp'

import  Axios  from 'axios'
import { useState } from 'react'
import { Button } from '../styles/components/button'


export default function SignUp(){
	const [UserName, setName] = useState('')
  function setNameHandle(state){
    setName(state)
  }

	const [UserLogin, setLogin] = useState('')
  function setLoginHandle(state){
    setLogin(state)
  }

  
	const [pass, setPass] = useState('')
  function setPassHandle(state){
    setPass(state)
  }

	const [confirmPass, setConfirmPass] = useState('')
	function setConfirmPassHandle(state){
    setConfirmPass(state)
  }


	function chekPassword(password1, password2){
		if(password1 === password2){
			sendFormToDB()
		}
		else{
			alert("The passwords don't match")
		}
	}



  function sendFormToDB(){
    Axios.post("https://loginsystemlib.herokuapp.com/register", {
			name: UserName,
      login: UserLogin,
      password: pass
    }) 
		if(response.status == 201){
			window.location.replace("https://login-system-omega.vercel.app/");
			alert("Conta criada com sucesso!")
		}
		
  }

	return(
		<Main>
			<div>
				<form onSubmit={ () => {} }>
					<h1>Cadastro</h1>
					<div>
						<input placeholder='Seu nome' type="text" name="name"    onChange={e => setNameHandle(e.target.value)}/>
						<input placeholder='Login' type="text" name="login"    onChange={e => setLoginHandle(e.target.value)}/>
						<input placeholder='Senha'type="password" name="password" onChange={e => setPassHandle (e.target.value)}/>
						<input placeholder='Senha novamente'type="password" name="password" onChange={e => setConfirmPassHandle (e.target.value)}/>
					</div>
					<Button type='button' onClick={() => {chekPassword(pass, confirmPass)}}>
            <span>Criar Conta</span>
            <img src="/button.svg" alt="" />
          </Button>
				</form>
				<Link href="/">Já tenho uma conta</Link>
			</div>
		</Main>
	)
}