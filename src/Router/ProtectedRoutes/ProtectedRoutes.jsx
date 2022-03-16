import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


const useAuth = () => {
  const login = useSelector(store => store.login);
  const isLogged = login.isLogged
  // console.log('user auth', isLogged);
  return isLogged}

// const useAdmin = () => {
//   const {user} = useContext(UserContext);
//   const {isAdmin} = user
//   return isAdmin}


const ProtectedRoutes = () => {
  
  const isAuth = useAuth();
  
   return isAuth ? <Outlet /> : 
   <Navigate to="/login" />
  
}
// export const ProtectedAdmin = () => {
//   
//   const isAuth = useAdmin();
//   
//    return isAuth ? <Outlet /> : 
//    <Navigate to="/sprint2copy/" />
//   
// }

export default ProtectedRoutes