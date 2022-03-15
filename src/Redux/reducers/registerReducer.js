import { registerTypes } from "../types/registerTypes";



export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case registerTypes.register:

        return{
           email: action.payload.email,
           password: action.payload.password,
           name: action.payload.name
        }

        default:
          return state;
    }
}