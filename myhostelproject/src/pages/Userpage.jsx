import { Box, Button, DrawerBody, FormControl, FormHelperText, FormLabel, Heading, HStack, Image, Input, Radio, RadioGroup, Select, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import { getsingleuser, singleuser } from '../api/data'
import { AuthContext } from '../context/Allcontext'
import "../css/userpage.css"
import { singleuseractivity } from '../singleuserdata'


const dates={
  mess:"",
  checkindate:"",
  checkintime:"",
  checkoutdate:"",
  checkouttime:""
 
}
 const initstate={
  name:"",
  email:"",
  dates:[]
 }
 
 

const Userpage = (naam) => {

  
  // const nameref=useRef(naam)
  const [data,setdata]=useState(initstate)
  const [datesdata,setdatesdata]=useState(dates)
  
  const {state,dispatch,Checkin_btn,Checkout_btn}=useContext(AuthContext)
  
  
  data.name=state.username
  data.email=state.useremail
  data.dates=[...data.dates,datesdata]
  const toast = useToast()

  const handlecheckinchange=(e)=>{
   const {value}=e.target
   setdatesdata(
      {
        ...datesdata,
       
       
       checkindate:value,
        checkintime:new Date().toLocaleTimeString() 
    })
   
  }
  const handlecheckoutchange=(e)=>{
    
    setdatesdata(
      {
        ...datesdata, 
        checkoutdate:e.target.value,
        checkouttime:new Date().toLocaleTimeString() 
    })
  }
  const handlemesschange=(e)=>{
    const {value}=e.target
    
    setdatesdata(
      {
        ...datesdata, 
        mess:value,
       
    })
    // setdata({
    //   ...data,
    //   dates:[...data.dates,datesdata],

    // })
   
  }
  
   const handlesubmit=()=>{
     console.log("dataaa",data)

     getsingleuser()
     .then((res)=>{
        return checkcredentials(res.data)
     })
     .catch((err)=>{
         console.log(err)
     })
     .finally(()=>{
         return (
             console.log(`call completed`)
           
         )
     })
    
   }

   const checkcredentials=(data)=>{
    console.log("check",data)
    let filtered=data.filter((el)=>{
         return el.email===state.useremail
    })
      return finalcheck(filtered)
   }
    
   const finalcheck=(filtered)=>{
     if(filtered.length>0){
      console.log("filtered",filtered)
     
      singleuser(datesdata,filtered[0].id,filtered[0].dates)
      toast({
        title: 'Your are CheckOut Now.',
        description: "",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
     
         } else{
         return singleuser(data)
         toast({
          title: 'Your are CheckOut Now.',
          description: "",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
         }
   }

    const handlecheckoutbtn=()=>{
      dispatch(Checkin_btn)
      
      handlesubmit()
    }

     const handlecheckinbtn=()=>{
      dispatch(Checkout_btn)
      toast({
        title: 'Your are CheckIn Now.',
        description: "",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
     }

   
   console.log("data",data)
    const {date,mess}=data
  return (
    <div className='usermaindiv' style={{marginTop:"60px"}}>
      <Heading as='h3' size='lg'>Welcome To My Hostel</Heading>

      <Box className='userpageform'>

      <Box className='userimgbox'>
      <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt='Dan Abramov' />
      <Heading as='h3' size='lg'>{state.username}</Heading>
      
      </Box>

      <Box>
      <FormLabel> Name:</FormLabel>
      <Input variant='filled' placeholder={state.username} disabled />
       
        
         <Box className="datebox">
         <Box  >

<FormLabel>Check In Date:</FormLabel>
<Input type="date" onChange={handlecheckinchange} name="date" isDisabled={state.inbtndisable ? false : true} />
</Box>
<Box  >
<FormLabel>check Out Date:</FormLabel>
<Input type="date" onChange={handlecheckoutchange} name="date" isDisabled={state.outbtndisable ? false : true}/>
</Box>
         </Box>
      

      <FormControl as='fieldset' className='mess' isDisabled={state.outbtndisable ? false : true}>
  <FormLabel as='legend'>Mess</FormLabel>
  
  <Select placeholder='Select option' onChange={handlemesschange}>
  <option value='yes' >Yes</option>
  <option value='no'>No</option>
 
</Select>
 
  
</FormControl> 
  
      <Box className='btn' mt="15px">
        <Button isDisabled={state.inbtndisable ? false : "disabled"} bg={"lightgreen"} mr="10px" onClick={()=>handlecheckinbtn()}>Check In</Button>
        <Button isDisabled={state.outbtndisable ? false : "disabled"} bg={"tomato"}  onClick={()=>handlecheckoutbtn()}>Check Out</Button>
      </Box>

      </Box>

      </Box>
    </div>
  )
}

export default Userpage