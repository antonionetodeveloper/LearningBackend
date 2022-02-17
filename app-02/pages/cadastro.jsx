import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Main } from '../styles/signUp'

import  Axios  from 'axios'
import { useState } from 'react'
import { Button } from '../styles/components/button'
import  Loading  from '../styles/components/loading'


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

  const [isLoading, setIsLoading] = useState("notLoading")

  async function sendFormToDB(){
		try{
			setIsLoading("Loading")
			const response = await Axios.post("https://loginsystemlib.herokuapp.com/register", {
				name: UserName,
				login: UserLogin,
				password: pass
    	}) 

			document.querySelector('.nameInput').value  = ''
			document.querySelector('.loginInput').value = ''
			document.querySelector('.pass1Input').value = ''
			document.querySelector('.pass2Input').value = ''
			

			if(response.status == 201){
				setIsLoading('notLoading')
				alert("Conta criada com sucesso!")
				window.location.replace("https://login-system-omega.vercel.app/dashboard");
			}else{
				setIsLoading("notLoading")
				alert("Uma conta com esse login provavelmente já existe... Por favor, use outra.")
			}
		}
			catch(error){
				console.log(error)
		}
		
  }

	return(
		<>
			<Head>
        <title>Cadastro</title>
      </Head>
			<Loading isVisible={isLoading}/>
			<Main>
				<div>
					<form onSubmit={ () => {} }>
						<h1>Cadastro</h1>
						<div>
							<input placeholder='Seu nome' type="text" name="name"    onChange={e => setNameHandle(e.target.value)} className='nameInput'/>
							<input placeholder='Login' type="text" name="login"    onChange={e => setLoginHandle(e.target.value)} className='loginInput'/>
							<input placeholder='Senha'type="password" name="password" onChange={e => setPassHandle (e.target.value)} className='pass1Input'/>
							<input placeholder='Senha novamente'type="password" name="password" onChange={e => setConfirmPassHandle (e.target.value)} className='pass2Input'/>
						</div>
						<Button type='button' onClick={() => {chekPassword(pass, confirmPass)}}>
							<span>Criar Conta</span>
							<img src="/button.svg" alt="" />
						</Button>
					</form>
					<Link href="/">Já tenho uma conta</Link>
				</div>
			</Main>
		</>
	)
}