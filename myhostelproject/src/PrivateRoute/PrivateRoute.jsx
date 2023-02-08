
import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/Allcontext'

const PrivateRoute = ({children}) => {
    const {state}=useContext(AuthContext)

    if(state.isAdminAuth && state.isUserAuth===false){
        return children
       }
      else if(state.isAdminAuth===false && state.admin && state.user===false){
        return <Navigate to="/adminlogin" />
      }
      else if(state.isUserAuth && state.isAdminAuth===false){
        return children
      } else if(state.isUserAuth===false && state.user && state.admin===false){
        return <Navigate to="/userlogin" />
      }
}

export default PrivateRoute