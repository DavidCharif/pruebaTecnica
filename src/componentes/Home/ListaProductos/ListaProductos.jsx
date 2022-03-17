import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  shoppingAddAction,
  shoppingRemoveAction,
} from "../../../Redux/actions/shoppingAddAction";
import {
  actionUpdateItem
} from "../../../Redux/actions/ingredientsAddActions"
import {
  IngredientContainer,
  IngredientContainerLeft,
  IngredientContainerRight,
  TittleBrandSize,
} from "../../../styles/HomeStyle";
import { useEffect } from "react";

const ListaProductos = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((store) => store.ingredients);
  const { currency } = useSelector((store) => store.ingredients);
  const quantity = useSelector((store) => store.quantityItems);
  // console.log('quantity', quantity)
  // const shoppingItems = useSelector((store) => store.shoppingCart);
  // const [quantity, setQuantity] = useState({
  //   0: '1',
  //   1: '1',
  //   2: '1',
  //   3: '1',
  //   4: '1',
  //   5: '1',
  //   6: '1',
  // });

  const handleAdd = ({ target }, ingredient) => {
    if (!target.checked) {
      dispatch(shoppingRemoveAction(ingredient));
    } else {
      dispatch(shoppingAddAction(ingredient));
    }
  };

  const handleExternal = (e, index) => {
    let ingredient = ingredients[index]
    console.log("quantity", quantity);
    e.stopPropagation();
    const checked = document.getElementById(index);
    //  console.log('checked.checked', checked.checked)
    if (!checked.checked) {
      checked.checked = true;
      dispatch(shoppingAddAction(ingredient));
    } else {
      checked.checked = false;
      dispatch(shoppingRemoveAction(ingredient));
    }
  };
  // const handleQuantity = ({ target }) => {
  //   console.log("value", target.name, target.value);
  //   const name = target.name;
  //   const value = target.value;
  //   if (value !== "") {
  //     dispatch(actionChangeQuantity(name, value));
  //   }
  // };
  const handleQuantity = ({ target },index) => {
    let {brand, items, price, product, quantity} = ingredients[index]
    items = parseInt(target.value)
    if(items === 0){
      return 'error'
    }
    
    const newIngredient = {
      brand, items, price, product, quantity
    }
    dispatch(actionUpdateItem(index, newIngredient))
 
  };
  useEffect(() => {
       console.log('cambie', ingredients)
  }, [ingredients])
  

  return (
    <>
      {ingredients ? (
        ingredients.map((ingredient, index) => {
          return (
            <IngredientContainer
              key={index}
              onClick={(e) => handleExternal(e, index, ingredient)}
            >
              <IngredientContainerLeft>
                <input
                  className="input"
                  id={index}
                  type="checkbox"
                  onChange={(e) => handleAdd(e, ingredients[index])}
                />
                {/* <BoxStyled>
                <p>{ingredient.items}</p>
              </BoxStyled> */}
                <input
                  id={index}
                  name={ingredient.product}
                  className="numberInput"
                  type="number"
                  placeholder="1"
                  
                  onChange={(e) => handleQuantity(e,index)}
                ></input>
                <TittleBrandSize>
                  <p className="title">{ingredient.product}</p>
                  <p className="brand">{ingredient.brand}</p>
                  <p className="size">{ingredient.quantity}</p>
                </TittleBrandSize>
              </IngredientContainerLeft>
              <IngredientContainerRight>
                <h2>
                  {parseFloat(ingredients[index].price * ingredients[index].items).toFixed(2) }{" "}
                  {currency}
                </h2>
              </IngredientContainerRight>
            </IngredientContainer>
          );
        })
      ) : (
        <h1>Cargando</h1>
      )}
    </>
  );
};

export default ListaProductos;
