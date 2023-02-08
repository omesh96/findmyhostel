import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex,
    Container,
    Spacer,
    Box,
    HStack,
    Grid,
    Button,
    Text,
    Heading,
    useToast,
    Spinner,
  } from '@chakra-ui/react'
import { useContext, useEffect, useRef } from 'react'
import { useState } from 'react'
 import {NavLink, useNavigate} from "react-router-dom"
import { getadmindata, getuserdata } from '../../api/data'
import {  Authorised_User, User_Email } from '../../context/action'
import { AuthContext } from '../../context/Allcontext'
import Userpage, { userdetails } from '../../pages/Userpage'
 import "./loginpage.css"

  


  const initstate={
    email:"",
    password:""
  }
 function  UserLogin(){
    const navigate=useNavigate()
    const nameref=useRef("")
    const emailref=useRef("")
  const [userdata,setuserdata]=useState(initstate)
  const toast = useToast()
 const [loginloading,setloginloading]=useState(false)
  const {state,dispatch,Authorised_Admin_User,Admin_SignUp_Page,Authorised_User_User,User_SignUp_Page,User_Name,Is_Auth}=useContext(AuthContext)

  useEffect(()=>{
    dispatch(User_SignUp_Page)
      },[])

   const handlechange=(e)=>{
 const {name,value}=e.target
 setuserdata({...userdata,[name]:value})
   }
 
   const handlesubmit=(e)=>{
    setloginloading(true)
    e.preventDefault()
    getuserdata()
    .then((res)=>{
       return checkcredentials(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
    .finally(()=>{
        return (
            console.log(`call completed`),
            setloginloading(false),
            setuserdata(initstate)
        )
    })
   }

  const checkcredentials=(data)=>{
   let filtered=data.filter((el)=>{
       return el.email===userdata.email && el.password===userdata.password
   })
     return finalcheck(filtered)
  }
   
  const finalcheck=(filtered)=>{
    if(filtered.length>0){
      nameref.current=filtered[0].name
      emailref.current=filtered[0].email
       let  naam=nameref.current
       let eml=emailref.current
        return (
            toast({
                title: 'Login Successfull.',
                description: `Welcome ${nameref.current}`,
                status: 'success',
                duration: 3000,
                isClosable: true,
              }),
              dispatch(Authorised_User_User),
             dispatch(User_Name(naam)),
             dispatch(User_Email(eml)),
             dispatch(Is_Auth),
              navigate("/user")
              
        )
        } else{
        return toast({
         title: 'Wrong Credentials.',
         description: "UnAuthorised User",
         status: 'error',
         duration: 3000,
         isClosable: true,
       })
        }
  }
   
    console.log(`auth`,state.isAuth)
   console.log(`user data`,userdata)
    const {email,password}=userdata
  
  

    if(loginloading){
      return  <Spinner style={{position:"relative",top:"350px" }}
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
    }
         if(state.isUserAuth){
          return  navigate("/user")
         }

    return (
       
        <div style={{position:"relative",top:"50px" }} className="logindiv">
          
          <HStack spacing={'24px','20px','10px'}>
             <Box>
              <form action="" onSubmit={handlesubmit}>
              <FormControl >
        <FormLabel fontSize={'16px','14px','14px'}>Email address</FormLabel>
      <Input type='email'placeholder='email' value={email} name="email" onChange={handlechange}  />

      <FormLabel  fontSize={'16px','14px','14px'}>Password</FormLabel>
      <Input type='password'placeholder='password' value={password} name="password" onChange={handlechange} />
      <Text mt="20px" style={{fontSize:"13px"}}>Dont Have an Account <br /> <NavLink style={{color:'teal',fontSize:"14px"}} to="/usersignup">Sign Up</NavLink> First</Text>
   <Input 
   cursor={"pointer"} type="submit" value="Login"  mt="30px" w="100%" colorScheme='whatsapp' bg="black" color="white" /> 
         </FormControl>
              </form>
             </Box>
<Spacer/>  
            <Box className='registerbox'>
            <FormControl >
                <Heading align={"left"} as='h6' size='md'  fontSize={'18px','16px','16px'}>REGISTER</Heading>
                <Text align={"left"} mt="20px" fontSize={'20px','14px','12px'} >if you still dont have a findmyhostal.com Account,<br /> use this option to access the <br /> Registration.</Text>
          <Text align={"left"} mt="20px" fontSize={'16px','14px','12px'}>By giving us your details, <br /> Searching HOSTEL at <br /> findmyhostal.com will be faster <br /> and and enjoyable experience.</Text>
          <Button align={"left"} mt={"30px","50px","62px"} w={"80%",'70%','60%'} mr={"90px",'70px','50px'} colorScheme='whatsapp' bg="black" className='accountbtn'
           onClick={()=>navigate("/usersignup")}
          >
            Create Account</Button>
 
</FormControl>
            </Box>
          </HStack >
        
                </div >
    )
 }
 export default UserLogin