import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { json, useNavigate, useParams } from 'react-router-dom'
import { Navigator } from 'react-router-dom';



export default function Update() {
  const navigate=useNavigate();
    const {id}=useParams();
const [value,setvalue]=useState({
    name:"",
        email:"",
        phoneno:"",
        address:"",
        domaintype:""
    
})
const [data,setdata]=useState([])
const gatedata=async()=>{
  
      await fetch('http://localhost:3000/manager/employee/'+id,{
        method:"GET"
      })
      .then((response)=>response.json())
       .then((json)=>{
        // console.log("data is",json)
        setvalue({...value,name:json.name,email:json.email,phoneno:json.phoneno,address:json.address,domaintype:json.domaintype})
        

        
       })
      }
      





useEffect(()=>{
  gatedata()
  

 },[])


const updatevalue=async(e)=>{
  e.preventDefault();
  await axios.put('http://localhost:3000/manager/employee/'+id,value)
    
 .then((res)=>{
  console.log("res",res)
  navigate("/")
  alert("data update  succesfully")
 })
 


}

  return (
    <div>
       <h1>update the data</h1>
       <form onSubmit={updatevalue}>
       <label htmlFor='name'>name</label>
       <input type="text"  onChange={(e)=>setvalue({...value,name:e.target.value})} value={value.name} name="name"/>
       <label htmlFor='descreption'>Email</label>
       <input type="text"  onChange={(e)=>setvalue({...value,email:e.target.value})}value={value.email} name="descreption" />
       <label htmlFor='descreption'>phoneno</label>
       <input type="text"  onChange={(e)=>setvalue({...value,phoneno:e.target.value})}value={value.phoneno} name="descreption" />
       <label htmlFor='descreption'>Adress</label>
       <input type="textarea"  onChange={(e)=>setvalue({...value,address:e.target.value})}value={value.address} name="descreption" />
       <label htmlFor='descreption'>domaintype</label>
       <input type="textarea"  onChange={(e)=>setvalue({...value,domaintype:e.target.value})}value={value.domaintype} name="descreption" />
       <button type="submit" >update</button>
       </form>
    </div>
  )
}
// onChange={(e)=>setvalue({name:e.target.value})} value={value.name}
// onChange={(e)=>setvalue({descreption:e.target.value})}value={value.descreption}