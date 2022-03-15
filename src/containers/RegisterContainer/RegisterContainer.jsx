import React from 'react'
import { Registro } from '../../componentes/Register/Registro'
import { LoginContainerStyled } from '../../styles/loginContainer'

const RegisterContainer = () => {
  return (
    <LoginContainerStyled>
      <Registro/>
    </LoginContainerStyled>
  )
}

export default RegisterContainer