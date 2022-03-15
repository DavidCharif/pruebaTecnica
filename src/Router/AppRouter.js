import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Registro } from '../componentes/Register/Registro'
import AppContainer from '../containers/ContainerApp/AppContainer'
import LoginContainer from '../containers/LoginContainer/LoginContainer'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppContainer/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/login' element={<LoginContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter