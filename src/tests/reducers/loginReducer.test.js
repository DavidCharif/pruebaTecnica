import { loginReducer } from "../../Redux/reducers/loginReducers";
import { loginTypes } from "../../Redux/types/loginTypes";

describe("test en action Login", () => {
  test("given no user we expect to match data", () => {
    let y = loginReducer(undefined, {});
    expect(y).toEqual({
      displayName: "Invitado",
      email: "",
      uid: "",
      photoUrl: "",
      isLogged: false,
    });
  });
  test("Given an user we expect to update previous state", () => {
    const initialState = {
      displayName: 'Invitado',
      email: '',
      uid: '',
      photoUrl:'',
      isLogged: false
    }
    const user = {
      displayName: "David",
      email: "dadchar@hotmail.com",
      uid: "1234",
      photoUrl: "https://",
    };
    const action = () => {
      return {
        type: loginTypes.login,
        payload: user,
      };
    };
    const result = loginReducer( initialState, action);
    console.log("result", result);
    expect(result).toEqual({
      displayName: "Invitado",
      email: "",
      uid: "",
      photoUrl: "",
      isLogged: false,
    });
  });
});
