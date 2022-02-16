import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Main } from '../styles/home'
import { Button } from '../styles/components/button'
import  Loading  from '../styles/components/loading.js'

import  Axios  from 'axios'
import { useState } from 'react'


export default function Home() {
  const [isLoading, setIsLoading] = useState("notLoading")
  
  async function checkIfUserExists(){
    if(login != ''){
      try{
        setIsLoading("Loading")
        const response = await Axios.post("https://loginsystemlib.herokuapp.com/login", {
          recivedLogin: login,
          recivedPassword: pass
        })
        document.querySelector('.userInput').value = ''
        document.querySelector('.passInput').value = ''
        
        
        if(response.status == 201){
          setIsLoading("notLoading")
          window.location.href = "https://login-system-omega.vercel.app/dashboard";
        }else{
          setIsLoading("notLoading")
          alert("Usuário ou senha incorreta.")
        }
        
      }
      catch(error){
        console.log(error)
      }
    }
    else{
      alert("Preencha os dados")
    }
  }

  const [login, setLogin] = useState('')
  function setLoginHandle(state){
    setLogin(state)
  }

  const [pass, setPass]   = useState('')
  function setPassHandle(state){
    setPass(state)
  }

  return (
    <>
      <Loading isVisible={isLoading}/>
      <Main>
        <div>
          <form onSubmit={() => {}}>
            <h1>LOGIN</h1>
            <div>
              <input placeholder='login' type="text" name="login"         onChange={e => setLoginHandle(e.target.value)} className='userInput' />
              <input placeholder='senha' type="password" name="password"  onChange={e => setPassHandle (e.target.value)} className='passInput'/>
            </div>
            <Button type='button' onClick={() => {checkIfUserExists()}}>
              <span>Entrar</span>
              <img src="/button.svg" alt="" />
            </Button>
          </form>
          <Link href="/cadastro">Ainda não tenho uma conta</Link>
        </div>
      </Main>
      
    </>
  )
}
