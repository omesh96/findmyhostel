import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getsingleuser } from '../api/data'
import { AuthContext } from '../context/Allcontext'
import  "../css/adminpage.css"

const Adminpage = () => {
  const [data,setdata]=useState([])
  const {state,dispatch}=useContext(AuthContext)
  const navigate=useNavigate()

  useEffect(()=>{
    getdata()
  },[])
 
  const getdata=()=>{
    getsingleuser()
    .then((res)=>{
      return gettingdata(res.data)
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
    const gettingdata=(data)=>{
      console.log("data",data)
      setdata(data)
    }

    const handleonclick=(id)=>{
      state.singleuserid=id
      navigate("/singleuser")
    }

  return (
    <>
    <Heading  mt={"60px","60px"}>Activity Of All Hostlers</Heading>
     <div style={{marginTop:"20px"}} className="admindiv">
     
     {data.map((el)=>{
       return (
         <Box className="adminuserdiv" key={el.id} onClick={()=>handleonclick(el.id)}>
        <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt=""/>
        <Text as='i' fontSize='2xl' color='blue'>{el.name}</Text>
         </Box>
       )
     })}
 </div>
    </>
  )
}

export default Adminpage