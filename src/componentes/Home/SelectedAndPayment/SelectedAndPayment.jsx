import React from "react";
import { useSelector } from "react-redux";
import {
  FlexItems,
  FlexPrice,
  PriceContainer,
} from "../../../styles/HomeStyle";

const SelectedAndPayment = () => {
  const shoppingCart = useSelector((store) => store.shoppingCart);
  const ingredients = useSelector((store) => store.ingredients);
  const quantity = useSelector((store) => store.quantityItems);
  // console.log('ingredients', ingredients)
  const itemsLength = shoppingCart.length;
  let totalSum = 0;
  shoppingCart.forEach((element) => {
    // const quantity = document.getElementsByClassName('numberInput')
    console.log('element.product', element.product)
    Object.values(quantity).map((item) => {
      if(element.product === item.name){

        return totalSum += element.price * item.items;
      }

      return totalSum;
    })    
    // console.log('totalSum', totalSum)
  });

  const handleModal = () => {
    // Get the modal
    const modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];
    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  };
  return (
    <PriceContainer>
      <FlexItems>
        <p>Items: {itemsLength}</p>
      </FlexItems>
      <FlexPrice>
        <p>Subtotal</p>
        <p>
          {parseFloat(totalSum).toFixed(2) } {ingredients["currency"]}
        </p>
      </FlexPrice>
      <FlexPrice>
        <p>Gastos de envío</p>
        <p>
          {parseFloat(ingredients["shipping-cost"]).toFixed(2)}{" "}
          {ingredients["currency"]}
        </p>
      </FlexPrice>
      <FlexPrice>
        <p className="totalText">Total</p>
        <p className="total">
          {parseFloat(ingredients["shipping-cost"] + totalSum).toFixed(2)}{" "}
          {ingredients["currency"]}
        </p>
      </FlexPrice>
      <button className="button" onClick={() => handleModal()}>
        Comprar ingredientes:{" "}
        {parseFloat(ingredients["shipping-cost"] + totalSum).toFixed(2)}
        {ingredients["currency"]}
      </button>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>
            Thanks! You bought {itemsLength} items at{" "}
            {parseFloat(ingredients["shipping-cost"] + totalSum).toFixed(2)}{" "}
            Now, lets cook!
          </p>
          <button>Close</button>
        </div>
      </div>
    </PriceContainer>
  );
};

export default SelectedAndPayment;
