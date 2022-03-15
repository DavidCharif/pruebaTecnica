import React from 'react'
import { useSelector } from 'react-redux'
import { HeaderStyled, Separation } from '../../../styles/HomeStyle'

const Header = () => {
  const {name} = useSelector(store => store.ingredients)
  return (
    <>
    <HeaderStyled>
      <h5>INGREDIENTES</h5>
      <h1>{name}</h1>
      <div className='buttons'>
        <p>Seleccionar todo</p><p>|</p><p>Deseleccionar todo</p>
      </div>
      <div className='border'></div>
    </HeaderStyled>
    <Separation/>
    </>
  )
}

export default Header