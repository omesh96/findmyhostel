import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Image, Input, Select, useDisclosure } from '@chakra-ui/react'

import {useNavigate} from "react-router-dom"
import React, { useContext } from 'react'
import  "../css/Navbar.css"
import log from "../assets/logo.png"
import log1 from "../assets/log1.jpg"
import { AuthContext } from '../context/Allcontext'


const Navbar = () => {
    const navigate=useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const {state,dispatch,Admin,User,Logut_btn,Is_Auth} =useContext(AuthContext)

   
    const handlechange=(e)=>{
       // console.log(e.target.value)
       const {value}=e.target
       if(value==="admin"){
        dispatch(Admin)
       onClose()
      
        navigate("/adminlogin")
       
       }
       else if(value==="user"){
        onClose()
        dispatch(User)
        navigate("/userlogin")
       

       }
    } 
    const handlelogout=()=>{
      dispatch(Logut_btn)
      dispatch(Is_Auth)
      navigate("/")
    }
    console.log("state",state)
  return (
   <>
    <div className='navdiv'>
    <Box className='companylogobox'>
  <Image src={log} alt='Dan Abramov' onClick={()=>navigate("/")} />
</Box>

 <Box className='btndiv'>

 <Box className={"flex"} >
   <Button size='xs' bg={state.isAuth ? "orange" :  "tomato"} color={state.isAuth ? "orange" :  "white"} ref={btnRef} colorScheme='teal' onClick={onOpen}>{state.adminsignuppage ? "Login/Admin" :  state.usersignuppage ? "Login/User" :  "Sign in" }</Button>
    <Button size='xs' bg={state.admin ? "lightgreen" : state.user ? "lightgreen" : "none"} ref={btnRef} colorScheme='teal'>{state.admin ? "Admin" : state.user ? "User" : ""}</Button>
    <Button size='xs' bg={state.isAuth ? "tomato" :  "none"}  colorScheme='teal' onClick={handlelogout}>{state.isAuth ? "Logout" : ""}</Button>
    </Box>
   
 </Box>
    </div>
   
  <div className='drwer'>
  <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box >
  <Image src={log1} alt='Dan Abramov'  />
</Box>

          <DrawerBody>
          <Select placeholder='Select user' onChange={handlechange} >
  <option value='user' >User</option>
  <option value='admin'>Admin</option>
 
</Select>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  </div>

   </>
  )
}

export default Navbar