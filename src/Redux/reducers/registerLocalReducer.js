import { registerLocalTypes } from "../types/registerLocalTypes";



export const registerLocalReducer = (state = {}, action) => {
    switch (action.type) {
        case registerLocalTypes.registerLocal:

        return{
           email: action.payload.email,
           uid: action.payload.uid,
           displayName: action.payload.name,
           img: action.payload.img
        }

        default:
          return state;
    }
}