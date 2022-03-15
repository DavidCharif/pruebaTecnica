import React from 'react'
import { useSelector } from 'react-redux'
import { BoxStyled, IngredientContainer, IngredientContainerLeft, IngredientContainerRight, TittleBrandSize } from '../../../styles/HomeStyle'

const ListaProductos = () => {
  const {ingredients} = useSelector(store => store.ingredients)
  console.log('ingredients', ingredients)
  return (
    <>
    {ingredients.map((ingredient, index) => {
      return (
        <IngredientContainer key={index}>
        <IngredientContainerLeft>
          <input type='checkbox'/>
          <BoxStyled>
            <p>{ingredient.items}</p>
          </BoxStyled>
          <TittleBrandSize>
            <p className='title'>{ingredient.product}</p>
            <p className='brand'>{ingredient.brand}</p>
            <p className='size'>{ingredient.quantity}</p>
          </TittleBrandSize>
        </IngredientContainerLeft>
        <IngredientContainerRight>
          <h1>{ingredient.price}</h1>
        </IngredientContainerRight>
        </IngredientContainer>
      )
    })}
    </>
  )
}

export default ListaProductos