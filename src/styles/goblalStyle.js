import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    border: 0;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    background-color: #e8cbcf;
    
    #root{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    justify-content: center;
    }
  }
`;
