import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { shoppingAddAction, shoppingRemoveAction } from "../../../Redux/actions/shoppingAddAction";
import {
  BoxStyled,
  IngredientContainer,
  IngredientContainerLeft,
  IngredientContainerRight,
  TittleBrandSize,
} from "../../../styles/HomeStyle";

const ListaProductos = () => {
  const dispatch = useDispatch()
  const { ingredients } = useSelector((store) => store.ingredients);
  console.log("ingredients", ingredients);

  const handleAdd = ({target}, ingredient) => {
    console.log('e', target.checked)
    if(!target.checked){
      dispatch(shoppingRemoveAction(ingredient)) 
    } else {

      dispatch(shoppingAddAction(ingredient))
    }
  }
  return (
    <>
      {ingredients ? ingredients.map((ingredient, index) => {
        return (
          <IngredientContainer key={index}>
            <IngredientContainerLeft>
              <input type="checkbox"  onChange={               
                (e) => handleAdd(e,ingredient)
                } />
              <BoxStyled>
                <p>{ingredient.items}</p>
              </BoxStyled>
              <TittleBrandSize>
                <p className="title">{ingredient.product}</p>
                <p className="brand">{ingredient.brand}</p>
                <p className="size">{ingredient.quantity}</p>
              </TittleBrandSize>
            </IngredientContainerLeft>
            <IngredientContainerRight>
              <h1>{ingredient.price}</h1>
            </IngredientContainerRight>
          </IngredientContainer>
        );
      }): <h1>Cargando</h1>}
    </>
  );
};

export default ListaProductos;
