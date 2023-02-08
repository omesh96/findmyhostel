import axios from "axios"
import { useContext } from "react"

export const adduserdata=(data)=>{
    return axios.post(`http://localhost:3008/userdata`,{
        name:data.name,
        email:data.email,
        password:data.password,
        address:data.address
    })
 }
 export const getuserdata=()=>{
    return axios.get(`http://localhost:3008/userdata`)
 }

 export const addadmindata=(data)=>{
    return axios.post(`http://localhost:3008/admindata`,{
        name:data.name,
        email:data.email,
        password:data.password,
        address:data.address
    })
}
export const getadmindata=()=>{
    return axios.get(`http://localhost:3008/admindata`)
 }

  export const singleuser=(data,id,date)=>{
    console.log("date",data)
     if(id){
        let newDates = [...date,data]
        return axios.patch(`http://localhost:3008/singleuser/${id}`,{
            dates:newDates
       
    })
     } else{
        return axios.post(`http://localhost:3008/singleuser`,{
            name:data.name,
            email:data.email,
            dates:[data.dates[data.dates.length-1]]
        })
     }
  }

  export const getsingleuser=()=>{
    return axios.get(`http://localhost:3008/singleuser`)
 }
 export const getsingleuserbyid=(id)=>{
    return axios.get(`http://localhost:3008/singleuser/${id}`)
 }
