import axios from "axios"
import { useContext } from "react"

export const adduserdata=(data)=>{
   
    return axios.post(`https://backend1-three.vercel.app/userdata`,{
        name:data.name,
        email:data.email,
        password:data.password,
        address:data.address
    })
 }
 export const getuserdata=()=>{
    return axios.get(`https://backend1-three.vercel.app/userdata`)
 }

 export const addadmindata=(data)=>{
    return axios.post(`https://backend1-three.vercel.app/admindata`,{
        name:data.name,
        email:data.email,
        password:data.password,
        address:data.address
    })
}
export const getadmindata=()=>{
    return axios.get(`https://backend1-three.vercel.app/admindata`)
 }

  export const singleuser=(data,id,date)=>{
    console.log("date",data)
     if(id){
        let newDates = [...date,data]
        return axios.patch(`https://backend1-three.vercel.app/singleuser/${id}`,{
            dates:newDates
       
    })
     } else{
        return axios.post(`https://backend1-three.vercel.app/singleuser`,{
            name:data.name,
            email:data.email,
            dates:[data.dates[data.dates.length-1]]
        })
     }
  }

  export const getsingleuser=()=>{
    return axios.get(`https://backend1-three.vercel.app/singleuser`)
 }
 export const getsingleuserbyid=(id)=>{
    return axios.get(`https://backend1-three.vercel.app/singleuser/${id}`)
 }
