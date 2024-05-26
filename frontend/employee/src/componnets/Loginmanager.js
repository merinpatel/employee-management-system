import React, { useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom';

export default function Loginmanager() {
  const navigate=useNavigate()
  const [data,setdata]=useState([])
  const [value,setvalue]=useState({
    name:"",
    email:"",
    password:"",
    conformpassword:""
  })
  const updatevalue=async()=>{
   



    

  await fetch("http://localhost:3000/manager/newmanger")
 .then((response)=>response.json())
 .then((json)=>{
     if(json.length>0)
     {console.log(value.password)
        
        navigate("/")
     }
     else{
    
     
  navigate("/")}
//   {json.length?setdata(json):console.log("")}
 })
 



  }
  return (
    <>
      
      <h1>login up</h1>
       <form onSubmit={updatevalue}>
       <label htmlFor='name'>name</label>
       <input type="text"  onChange={(e)=>setvalue({...value,name:e.target.value})}  name="name"/>
       <label htmlFor='descreption'>Email</label>
       <input type="text"  onChange={(e)=>setvalue({...value,email:e.target.value})} name="email" />
       <label htmlFor='descreption'>password</label>
       <input type="text"  onChange={(e)=>setvalue({...value,password:e.target.value})} name="passsword" />
       
       <button type="submit" >login</button>
       {/* <h6>if you are alredy login?</h6> */}
       {/* <Link to="/loginmanager">login</Link> */}
       </form>
    </>
  )
}
