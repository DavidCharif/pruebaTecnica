import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {FormStyled, LoginContainerStyled, SocialButtonsStyled} from '../../styles/loginContainer'
import { useDispatch } from "react-redux";
import {
  loginEmailPassword,
  loginFacebook,
  loginGoogle,
  searchAsync,
} from "../../Redux/actions/actionLogin.js";
import * as Yup from 'yup'
import { useFormik } from 'formik'


export const Login = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password:''
    }, 
    validationSchema: Yup.object({
      email: Yup.string().required(),
      password: Yup.string().required('Error')
    }),
    onSubmit:({email, password}) => {
      dispatch(loginEmailPassword(email, password))
      navigate('/home')
    }
    
  })

  const handleGoogle = () => {
    dispatch(loginGoogle());
    navigate('/home')
  };
  const handleFacebook = () => {
    dispatch(loginFacebook());
    navigate('/home')
  };

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <div className="input">
        <label>Correo</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>

      <div className="input">
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Password"
          autoComplete="true"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      <button type="submit">
        Enviar
      </button>

      <SocialButtonsStyled className="auth__social-networks">
        <div className="btn" onClick={() => handleGoogle()}>
          <div className="icon-wrapper gg">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </div>
        </div>
        <div className="btn" onClick={() => handleFacebook()}>
          <div className="icon-wrapper fb">
            <img
              className="facebook-icon"
              src="https://res.cloudinary.com/davidcharif/image/upload/v1647260118/sprint3-proyecto/2021_Facebook_icon.svg_mrabec.png"
              alt="facebook button"
            />
          </div>
        </div>
      </SocialButtonsStyled>
      <Link to="/registro">Registrarse</Link>
    </FormStyled>
  );
};

export default Login;
