import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../componentes/Home/Home'
import { Registro } from '../componentes/Register/Registro'
import AppContainer from '../containers/ContainerApp/AppContainer'
import LoginContainer from '../containers/LoginContainer/LoginContainer'
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppContainer/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/login' element={<LoginContainer/>}/>
        <Route element={<ProtectedRoutes/>}>
        <Route path='/home' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter