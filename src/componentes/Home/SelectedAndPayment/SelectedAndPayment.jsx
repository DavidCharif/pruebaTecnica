import React from "react";
import { useSelector } from "react-redux";
import { FlexItems, FlexPrice, PriceContainer } from "../../../styles/HomeStyle";

const SelectedAndPayment = () => {
  const shoppingCart = useSelector(store=> store.shoppingCart)
  const ingredients = useSelector(store => store.ingredients)
  console.log('ingredients', ingredients)
  const itemsLength = shoppingCart.length
  let totalSum = 0
  let totalPrice = shoppingCart.forEach(element => {
    totalSum += element.price
    console.log('totalSum', totalSum)
    return totalSum
  });
  return (
    <PriceContainer>
      <FlexItems>
        <p>Items:</p>
        <p>{itemsLength}</p>
      </FlexItems>
      <FlexPrice>
        <p>Subtotal</p>
        <p>{parseFloat(totalSum).toFixed(2)}{ingredients["currency"]}</p>
      </FlexPrice>
      <FlexPrice>
        <p>Gastos de envío</p>
        <p>{parseFloat(ingredients["shipping-cost"]).toFixed(2)}{ingredients["currency"]}</p>
      </FlexPrice>
      <FlexPrice>
        <p>Total</p>
        <p>{ parseFloat(ingredients['shipping-cost'] + totalSum).toFixed(2)}{ingredients["currency"]}</p>
      </FlexPrice>
      <button>Comprar ingredientes: { parseFloat(ingredients['shipping-cost'] + totalSum).toFixed(2)}{ingredients["currency"]}</button>
    </PriceContainer>
  );
};

export default SelectedAndPayment;
