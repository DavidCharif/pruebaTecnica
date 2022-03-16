import styled from "styled-components";

export const HeaderStyled = styled.div`
min-width:350px ;
max-width: 550px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-bottom: 0px;
  h5 {
    margin: 0px;
    padding-top: 25px;
  }
  h1 {
    margin-top: 2px;
    margin-bottom: 0px;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    margin-bottom: 0px;
    gap: 5px;
    p {
      margin-top: 10px;
      margin-bottom: 0px;
      font-size: 14px;
    }
  }
`;

export const HomeContainerStyled = styled.div`
  background-color: white;

  border-radius: 15px;
`;
export const Separation = styled.div`
  margin-top: 0px;
  width: 100%;
  border-top: 1px solid blue;
`;

export const BoxStyled = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  font-size: 35px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    margin: 0px;
  }
`
export const IngredientContainer = styled.div`
   display: flex;
  flex-direction: row;
  justify-content: space-between;

`
export const IngredientContainerLeft = styled.div`
margin-top: 10px;
gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;`
export const IngredientContainerRight = styled.div`
margin-top: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 20px;
  h1{
    margin-right: 10px;
  }
  `
export const TittleBrandSize = styled.div`
  display: flex;
  flex-direction: column;  
  
  .title{
    font-weight:bolder;
    font-size:20px;
  }
  .brand{
    font-weight:100;
    font-size:14px;
  }
  p{
    margin: 0px;
    font-size: 14px;
  }
  
`

export const FlexPrice = styled.div`

display: flex;
  flex-direction: row;
  justify-content: space-between;
  p{
    margin: 0px;
  }`


export const FlexItems = styled.div`

display: flex;
  flex-direction: row;
  justify-content: flex-start;
  p{
    margin: 0px;
  }
`

export const PriceContainer = styled.div`
padding: 20px;
`