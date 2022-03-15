import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../../componentes/Login/Login";
import { LoginContainerStyled } from "../../styles/loginContainer";

const LoginContainer = () => {
  const {isLogged} = useSelector(store => store.login)
  const navigate = useNavigate()
 
 
  useEffect(() => {
    
    // console.log('isLogeged', isLogged)
    if(isLogged){
      navigate('/home')
     }
  
  }, [isLogged, navigate])
  return (
    <>
      <LoginContainerStyled>
        <Login />
      </LoginContainerStyled>
    </>
  );
};

export default LoginContainer;
