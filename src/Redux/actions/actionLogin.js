import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { facebook, google, db } from "../../firebase/firebaseConfig";
import { loginTypes } from "../types/loginTypes";

import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import { ingredientTypes } from "../types/ingredientTypes";
import { registerUserSync } from "./actionRegister";

export const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSincrono(user.uid, user.displayName));
        console.log("Bienvenid@");
      })
      .catch((e) => {
        console.log("El usuario no existe");
      });
  };
};
// export const logoutAsincrono = () =>{
//
//     return (dispatch) =>{
//
//        const auth = getAuth();
//
//         signInWithEmailAndPassword(auth,email,password)
//        .then(({user}) =>{
//              dispatch(
//                 loginSincrono(user.uid,user.displayName)
//              )
//              console.log('Bienvenid@');
//        })
//        .catch(e =>{
//             console.log('El usuario no existe');
//        })
//     }
// }

export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        // console.log('user', user)
        const { uid, displayName, photoURL, email } = user;
        dispatch(loginSincrono(displayName, email, uid, photoURL));
        console.log(`Bienvenid@ ${user.displayName}`);
        const newUser = {
          displayName: user.displayName,
          email: user.email,
          photoUrl: photoURL,
          uid: user.uid,
        };
        addDoc(collection(db, "users"), newUser)
          .then((resp) => {
            dispatch(
              registerUserSync(user.displayName, user.email, user.uid, photoURL)
            );
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
export const loginFacebook = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        const { uid, displayName, photoURL, email } = user;
        dispatch(loginSincrono(displayName, email, uid, photoURL));
        console.log(`Bienvenid@ ${user.displayName}`);
        const newUser = {
          displayName: user.displayName,
          email: user.email,
          photoUrl: photoURL,
          uid: user.uid,
        };
        addDoc(collection(db, "users"), newUser)
          .then((resp) => {
            dispatch(
              registerUserSync(user.displayName, user.email, user.uid, photoURL)
            );
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const loginSincrono = (displayName, email, uid, photoURL) => {
  return {
    type: loginTypes.login,
    payload: {
      displayName,
      email,
      uid,
      photoURL,
    },
  };
};

export const logoutSincrono = () => {
  return {
    type: loginTypes.logout,
  };
};

// Search
export const searchAsync = (producto) => {
  return async (dispatch) => {
    const traerCollection = collection(db, "ProdouctosAmazon");
    const q = query(
      traerCollection,
      where("nombre", ">=", producto, "<", producto + "z")
    );
    const datos = await getDocs(q);

    const productos = [];
    datos.forEach((docu) => {
      productos.push({
        id: docu.id,
        data: docu.data(),
      });
      console.log("docu.data()", docu.data());
    });
    dispatch(searchSync(productos));
  };
};

export const searchSync = (productos) => {
  return {
    type: ingredientTypes.search,
    payload: productos,
  };
};
