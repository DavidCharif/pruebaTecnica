import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup'

import {useDispatch} from 'react-redux'
import { registroEmailPasswordNombre } from "../../Redux/actions/actionRegister";
import { useFormik } from "formik";
import { FormStyled } from "../../styles/loginContainer";
import { fileUpload } from "../../helpers/FileUpload";

export const Registro = () => {
    const navigate = useNavigate()    
    const dispatch = useDispatch();
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log('file', file)
        fileUpload(file)
          .then((res) => {
           formik.values.img = res     
           console.log('res', res)       
          })
          .catch((error) => console.log(error.message));
      };

    const formik = useFormik({
        initialValues:{
            nombre:'',
            email:'',
            pass1:'',            
            img: ''
        },
        validationSchema:Yup.object({
            nombre: Yup.string().required(),
            email: Yup.string().email().required(),
            pass1: Yup.string('error').required(),
            img: Yup.string().url().notRequired()
        }),
        onSubmit:({nombre,email,pass1,img}) => {
            dispatch(registroEmailPasswordNombre(email,pass1,nombre,img))
            navigate('/')
            
        }
    })

    return (
        <div>
            <FormStyled onSubmit={formik.handleSubmit}>
                <div className="input" >
                    <label>Nombre</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        name="nombre"
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                    />
                </div>

                <div className="input">
                    <label>Correo</label>
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </div>

                <div className="input" >
                    <label>Contraseña</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="pass1"
                        value={formik.values.pass1}
                        onChange={formik.handleChange}
                    />
                </div>

                <div className="input" >
                    <label>Suba una imagen</label>
                    <input
                        type="file"
                        placeholder="Upload a picture"
                        name="img"
                        value=''
                        onChange={(e) => handleFileChange(e)}
                    />
                </div>


                <button variant="primary" type="submit">
                    Registrarse
                </button>

                <Link to="/login">Login</Link>

            </FormStyled>
            </div>

     
    )
}

