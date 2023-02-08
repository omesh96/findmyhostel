import React from 'react'
import { useReducer } from "react"
import { createContext } from "react"
import reducer from "./reducer"
import {Admin,User,Admin_SignUp_Page,User_SignUp_Page,Authorised_Admin_User,Authorised_User_User,User_Name,Checkin_btn,Checkout_btn,User_Email,Logut_btn,Is_Auth} from "./action"

export const AuthContext=createContext()

const Isauth={
   admin :false,
    user:false,
    adminsignuppage:false,
    usersignuppage:false,
    isAdminAuth:false,
    isUserAuth:false,
    username:"",
    useremail:"",
    inbtndisable:true,
    outbtndisable:false,
    singleuserid:"",
    isAuth:false
}


const AuthContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,Isauth)
  return (
  <>
   <AuthContext.Provider value={{state,dispatch,Admin,User,Admin_SignUp_Page,User_SignUp_Page,Authorised_Admin_User,Authorised_User_User,User_Name,Checkin_btn,Checkout_btn,User_Email,Logut_btn,Is_Auth}}>
 {children}
   </AuthContext.Provider>
  </>
  )
}

export default AuthContextProvider