import React from 'react'
import { HomeContainerStyled } from '../../styles/HomeStyle'
import Header from './Header/Header'
import ListaProductos from './ListaProductos/ListaProductos'
import SelectedAndPayment from './SelectedAndPayment/SelectedAndPayment'
import axios from 'axios'
import { urlApi } from '../../helpers/urlApi'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ingredientsAddAction } from '../../Redux/actions/ingredientsAddActions'
const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get(urlApi)
      .then(res => {
        // console.log('res', res.data)
        
        dispatch(ingredientsAddAction(res.data))
      })
      .catch(e => {
        // console.log('e', e)
      })
  
 
  }, [])
  
  return (
    <HomeContainerStyled>
      <Header/>
      <ListaProductos/>
      <SelectedAndPayment/>
    </HomeContainerStyled>
  )
}

export default Home