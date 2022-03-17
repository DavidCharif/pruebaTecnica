import styled from "styled-components";

export const HeaderStyled = styled.div`
  min-width: 350px;
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
      color: #4a90e2;
      margin-top: 10px;
      margin-bottom: 0px;
      font-size: 14px;      
    }
    .selectAll{
      cursor: pointer;
    }
    .discardAll{
      cursor: pointer;
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
  pointer-events: none;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  font-size: 35px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0px;
  }
`;
export const IngredientContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
`;
export const IngredientContainerLeft = styled.div`
  margin-top: 10px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
  input[type="number"]{
    width: 30px;
    height: 30px;
    font-size: 20px;
    text-align: center;
  }
  input[type="checkbox"] {
    appearance: none;
    background-color: #fff;

    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }
  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em white;
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
  input[type="checkbox"]:checked {
    background-color: #4a90e2;
  }
  input[type="checkbox"]:focus {
    outline: max(2px, 0.15em) solid currentColor;
    outline-offset: max(2px, 0.15em);
  }
`;
export const IngredientContainerRight = styled.div`
  pointer-events: none;
  margin-top: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 20px;
  color: #4e8f01;
  h1 {
    pointer-events: none;
    margin-right: 10px;
  }
`;
export const TittleBrandSize = styled.div`
  pointer-events: none;
  display: flex;
  flex-direction: column;

  .title {
    font-weight: bolder;
    font-size: 20px;
  }
  .brand {
    font-weight: 100;
    font-size: 14px;
  }
  p {
    margin: 0px;
    font-size: 14px;
  }
`;
export const FlexPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    margin: 0px;
  }
  .total {
    font-size: 25px;
  }
  .totalText {
    font-weight: 600;
  }
`;
export const FlexItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  p {
    margin: 0px;
  }
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px;
  .button {
    padding: 10px;
    margin: 0;
    font-size: 25px;
    background-color: #4e8f01;
    color: white;
  }
  .modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  text-align: center;
  font-size: larger;
  font-weight: 700;
  background-color: #e8cbcf;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 60%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
`;
