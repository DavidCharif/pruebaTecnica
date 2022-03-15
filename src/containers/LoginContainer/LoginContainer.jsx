import React from "react";
import Login from "../../componentes/Login/Login";
import { LoginContainerStyled } from "../../styles/loginContainer";

const LoginContainer = () => {
  return (
    <>
      <LoginContainerStyled>
        <Login />
      </LoginContainerStyled>
    </>
  );
};

export default LoginContainer;
