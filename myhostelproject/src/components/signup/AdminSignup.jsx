import { Alert, AlertIcon, Box, Button, Container, Flex, FormControl, FormLabel, Heading, HStack, Input,InputGroup,InputLeftAddon,PinInput,PinInputField,Stack,Text, useToast } from "@chakra-ui/react"
import { useEffect } from "react"
import { useContext, useState } from "react"
import { Form } from "react-router-dom"
import { addadmindata, adduserdata } from "../../api/data"
import { AuthContext } from "../../context/Allcontext"
import { useNavigate} from "react-router-dom"
//import { admindata } from "../../data"
// import { adduserdata } from "../cart/addtocartapi"

 
const initstate={
    name:"",
    email:"",
    password:"",
    mobile:"",
    address:"",
    repeat_password:""
}

 function AdminSignup(){
    const navigate=useNavigate()
  const [userdata,setuserdata]=useState(initstate)
  const {state,dispatch,Admin,User,Admin_SignUp_Page,User_SignUp_Page} =useContext(AuthContext)

   useEffect(()=>{
 dispatch(Admin_SignUp_Page)
   },[])

  console.log("state",state)
 
 const toast = useToast()

   const handlechange=(e)=>{
    const {value,name}=e.target
    setuserdata({...userdata, [name]:value})
   }

    const handlesubmit=(e)=>{
        e.preventDefault()
        if(userdata.password!==userdata.repeat_password){
          return   toast({
          title: 'Account Not created.',
          description: "Password Did Not Match",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      
        }
          return (
            addadmindata(userdata),
            toast({
                title: 'Your Account is created.',
                description: "Now You Can Login",
                status: 'success',
                duration: 3000,
                isClosable: true,
              }),
              setuserdata(initstate),
              navigate("/adminlogin")
          )
    }
    console.log(`user data `,userdata)
     const {name,email,password,address,repeat_password,mobile}=userdata;

     
    return (
       <div style={{position:"relative",top:"50px",padding:"40px",width:"80%" }}>
         <Heading  as='h6' size='lg'>Admin Personal Details</Heading>

        <Container mt="30px">
        <Box>
           
             <form action="" onSubmit={handlesubmit}>
             <FormControl >

<FormLabel>Name</FormLabel>
<Input required type='text'placeholder='Name' name="name" value={name} onChange={handlechange} />
<Stack />
<FormLabel>Email address</FormLabel>
<Input required type='email'placeholder='email' name="email" value={email} onChange={handlechange} />

<Flex>
<FormLabel>Password</FormLabel>
<Input required type='password'placeholder='password' name="password" value={password} onChange={handlechange}  />

<FormLabel>Repeat Password</FormLabel>
<Input required type='password'placeholder='Repeat password' value={repeat_password} name="repeat_password" onChange={handlechange}/>
</Flex>

<FormLabel>Mobile</FormLabel>

<InputGroup>
<InputLeftAddon children='+91' />
<Input required type='tel' placeholder='phone number' name="mobile" value={mobile} onChange={handlechange} />
</InputGroup>

<FormLabel mt="10px">Address</FormLabel>
<Input required type='text'placeholder='Address' name="address" value={address} onChange={handlechange} />

<FormLabel mt="10px">Pin Code</FormLabel>
<HStack>
<PinInput  >
<PinInputField />
<PinInputField />
<PinInputField />
<PinInputField />
<PinInputField />
<PinInputField />
</PinInput>
</HStack>


<Input cursor={"pointer"} type="submit" value="Create Account"  mt="30px" w="100%" colorScheme='whatsapp' bg="black" color="white" align="center" />
</FormControl>
             </form>
       
             </Box>
        </Container>
       </div>
    )
 }
 export default AdminSignup