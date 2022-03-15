import styled from "styled-components";

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  img {
    width: 50px;
  }
`;
export const SocialButtonsStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  .btn{
    min-width: 100px;
    text-align: center;
    
    .icon-wrapper{
      border-radius: 15px;
      padding: 5px;
      img{
        width: 35px;
      }

      }
    .fb{
      background-color: #3b5998;
    }
    .gg{
      background-color: #de5246;
    }  
  }
`;
export const FormStyled = styled.form`
  background: url("https://res.cloudinary.com/davidcharif/image/upload/v1647349486/retoTecnico/recipes_ejwujc.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 500px;
  min-width: 500px;
  align-items: center;
  width: fit-content;
  justify-content: center;

  .input {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 5px;
    label{
      font-size: larger;
      font-weight: 700;
    }
    input{
      padding: 10px;
      min-width: 250px;
    }
  }
`;
