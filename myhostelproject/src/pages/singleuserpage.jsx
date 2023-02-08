import { Box, Image, Text } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { getsingleuserbyid } from '../api/data'
import { AuthContext } from '../context/Allcontext'
import "../css/singleuserpage.css"

const Singleuserpage = () => {
    const [data,setdata]=useState([])
    const {state}=useContext(AuthContext)
   
    console.log("id",state.singleuserid)
    useEffect(()=>{
        getdata()
    },[])

    const getdata=()=>{
        getsingleuserbyid(state.singleuserid)
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
  return (
    <div className='singleuserdiv'>
      <Box className="singleuserimg">
        <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="phot" />
        <Text as='i' fontSize='2xl' color='blue'>{data.name}</Text>
      </Box>

      <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption fontSize="2xl" color="tomato">Activity of  {data.name} </TableCaption>
    <Thead>
      <Tr>
        <Th>S.No</Th>
        <Th>Check In Date</Th>
        <Th>Check In Time</Th>
        <Th>Check Out Date</Th>
        <Th>Check Out Time</Th>
        <Th >Mess</Th>
      </Tr>
    </Thead>
    <Tbody>
     
      {data && data.dates && data.dates.map((el,i)=>{
        return (
            <Tr key={el.id}>
        <Td>{i+1}</Td>
        <Td>{el.checkindate}</Td>
        <Td >{el.checkintime}</Td>
        <Td >{el.checkoutdate}</Td>
        <Td >{el.checkouttime}</Td>
        <Td>{el.mess}</Td>
      </Tr>
        )
      }) }
    </Tbody>
    
  </Table>
</TableContainer>
    </div>
  )
}

export default Singleuserpage