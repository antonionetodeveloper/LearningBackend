import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Main } from '../styles/home'
import { Button } from '../styles/components/button'

import  Axios  from 'axios'
import { useState } from 'react'


export default function Home() {

  async function checkIfUserExists(){

    try{
      const response = await Axios.post("http://localhost:3001/login", {
        recivedLogin: login,
        recivedPassword: pass
      })
      setLoginHandle('')
      setPassHandle('')
      
      if(response.status == 201){
        window.location.href = "http://localhost:3000/dashboard";
      }else{
        alert("Usuário ou senha incorreta.")
      }
      
    }
    catch(error){
      console.log(error)
    }

  }

  const [login, setLogin] = useState()
  function setLoginHandle(state){
    setLogin(state)
  }

  const [pass, setPass]   = useState()
  function setPassHandle(state){
    setPass(state)
  }


  return (
    <Main>
      <div>
        <form onSubmit={() => {}}>
          <h1>LOGIN</h1>
          <div>
            <input placeholder='login' type="text" name="login"         onChange={e => setLoginHandle(e.target.value)}/>
            <input placeholder='senha' type="password" name="password"  onChange={e => setPassHandle (e.target.value)}/>
          </div>
          <Button type='submit' onClick={() => {checkIfUserExists()}}>
            <span>Entrar</span>
            <img src="/button.svg" alt="" />
          </Button>
        </form>
        <Link href="/cadastro">Ainda não tenho uma conta</Link>
      </div>
    </Main>
  )
}
