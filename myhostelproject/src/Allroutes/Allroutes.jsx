import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../components/login/AdminLogin'
import UserLogin from '../components/login/Userlogin'
import AdminSignup from '../components/signup/AdminSignup'
import UserSignup from '../components/signup/UserSignup'
import Adminpage from '../pages/Adminpage'
import Homepage from '../pages/Homepage'
import Singleuserpage from '../pages/singleuserpage'
import Userpage from '../pages/Userpage'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

const Allroutes = () => {
  return (
   <>
   <Routes>
   <Route path="/" element={<Homepage />}></Route>
    <Route path="/usersignup" element={<UserSignup />}></Route>
    <Route path="/userlogin" element={<UserLogin />}></Route>
    <Route path="/adminsignup" element={<AdminSignup />}></Route>
    <Route path="/adminlogin" element={<AdminLogin />}></Route>
    <Route path="/admin" element={<PrivateRoute><Adminpage /> </PrivateRoute>}></Route>
    <Route path="/user" element={<PrivateRoute><Userpage /></PrivateRoute>}></Route>
    <Route path='/singleuser' element={<PrivateRoute><Singleuserpage /></PrivateRoute>}></Route>
   </Routes>
   </>
  )
}

export default Allroutes