import { loginTypes } from "../types/loginTypes"

const initialState = {
  displayName: 'Invitado',
  email: '',
  uid: '',
  photoUrl:'',
  isLogged: false
}

export const loginReducer = (state=initialState, action) => {
  switch(action.type){
    case loginTypes.login:
      return {
        ...action.payload, isLogged: true
      }
      
    default:
      return state
  }
}