import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  shoppingAddAllAction,
  shoppingRemoveAllAction,
} from "../../../Redux/actions/shoppingAddAction";
import { HeaderStyled, Separation } from "../../../styles/HomeStyle";

const Header = () => {
  const { name, ingredients } = useSelector((store) => store.ingredients);
  const dispatch = useDispatch();
  const handleAll = (ingredients) => {
    dispatch(shoppingAddAllAction(ingredients));
    let inputs = document.getElementsByClassName("input");
    for (const input of inputs) {
      input.checked = true;
    }
  };
  const discardAll = () => {
    dispatch(shoppingRemoveAllAction());
    let inputs = document.getElementsByClassName("input");
    for (const input of inputs) {
      input.checked = false;
    }
  };
  return (
    <>
      <HeaderStyled>
        <h5>INGREDIENTES</h5>
        <h1>{name}</h1>
        <div className="buttons">
          <p className="selectAll" onClick={() => handleAll(ingredients)}>
            Seleccionar todo
          </p>
          <p>|</p>
          <p className="discardAll" onClick={() => discardAll()}>
            Deseleccionar todo
          </p>
        </div>
        <div className="border"></div>
      </HeaderStyled>
      <Separation />
    </>
  );
};

export default Header;
