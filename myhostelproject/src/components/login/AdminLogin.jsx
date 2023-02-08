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
import { useRef } from 'react'
import { useContext, useEffect } from 'react'
import { useState } from 'react'
 import {NavLink, useNavigate} from "react-router-dom"
import { getadmindata } from '../../api/data'
import {  Authorised_User } from '../../context/action'
import { AuthContext } from '../../context/Allcontext'

  


  const initstate={
    email:"",
    password:""
  }
 function  AdminLogin(){
    const navigate=useNavigate()
    const nameref=useRef("")
  const [userdata,setuserdata]=useState(initstate)
  const toast = useToast()
 const [loginloading,setloginloading]=useState(false)
  const {state,dispatch,Authorised_Admin_User,Admin_SignUp_Page,Is_Auth}=useContext(AuthContext)

  useEffect(()=>{
    dispatch(Admin_SignUp_Page)
      },[])

   const handlechange=(e)=>{
 const {name,value}=e.target
 setuserdata({...userdata,[name]:value})
   }
 
   const handlesubmit=(e)=>{
    setloginloading(true)
    e.preventDefault()
    getadmindata()
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
        return (
            toast({
                title: 'Login Successfull.',
                description: `Welcome ${nameref.current}`,
                status: 'success',
                duration: 4000,
                isClosable: true,
              }),
              dispatch(Authorised_Admin_User),
              dispatch(Is_Auth)
              
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
  console.log("ref",nameref)
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
         if(state.isAdminAuth){
          return  navigate("/admin")
         }

    return (
       
        <div style={{position:"relative",top:"50px" }} className="logindiv">
          
          <HStack spacing={'24px','20px','10px'}>
             <Box>
              <form action="" onSubmit={handlesubmit}>
              <FormControl >
        <FormLabel fontSize={'16px','14px','14px'}>Email address</FormLabel>
      <Input type='email'placeholder='email' value={email} name="email" onChange={handlechange}  />

      <FormLabel fontSize={'16px','14px','14px'}>Password</FormLabel>
      <Input type='password'placeholder='password' value={password} name="password" onChange={handlechange} />
      <Text mt="20px" style={{fontSize:"13px"}}>Dont Have an Account <br /> <NavLink style={{color:'teal',fontSize:"14px"}} to="/adminsignup">Sign Up</NavLink> First</Text>
   <Input 
   cursor={"pointer"} type="submit" value="Login"  mt="30px" w="100%" colorScheme='whatsapp' bg="black" color="white" /> 
         </FormControl>
              </form>
             </Box>
<Spacer/>  
            <Box>
            <FormControl >
                <Heading align={"left"} as='h6' size='md' fontSize={'18px','16px','16px'}>REGISTER</Heading>
                <Text align={"left"} mt="20px"  fontSize={'20px','14px','12px'} >if you still dont  have a findmyhostal.com Account,<br /> use this option to access the Registration</Text>
          <Text align={"left"} mt="20px" fontSize={'20px','14px','12px'} >By giving us your details, <br /> Searching HOSTEL at <br /> findmyhostal.com will be faster <br /> and and enjoyable experience.</Text>
          <Button align={"left"}  w="80%" mr="90px" colorScheme='whatsapp' bg="black" mt={"30px","50px","59px"} w={"80%",'70%','60%'} mr={"90px",'70px','50px'} className='accountbtn'
           onClick={()=>navigate("/adminsignup")}
          >
            Create Account</Button>
 
</FormControl>
            </Box>
          </HStack >
        
                </div >
    )
 }
 export default AdminLogin