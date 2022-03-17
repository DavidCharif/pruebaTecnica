import { actionChangeQuantity } from "../../Redux/actions/actionChangeQuantity";
import { quantityItemTypes } from "../../Redux/types/quantityItemTypes";

describe("test actions", () => {
  test("Compare results given a Name and Value", () => {
    //
    const name = 'David'
    const value = 5
  //
    let result = actionChangeQuantity(name, value)
    expect(result).toEqual({
      type: quantityItemTypes.changeQuantity,
    payload: {
      name,
      value,
    }
    })
  }) 
})