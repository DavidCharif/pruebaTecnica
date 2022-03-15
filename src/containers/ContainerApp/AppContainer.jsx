import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LoginContainer from '../LoginContainer/LoginContainer'

const AppContainer = () => {
  const login = useSelector(store => store.login)
  const navigate = useNavigate()
  console.log('login', login)
  if(login.isLogged){
    console.log('false')
   navigate('/home')
  }
  return (

    <LoginContainer/>
    
  )
}

export default AppContainer