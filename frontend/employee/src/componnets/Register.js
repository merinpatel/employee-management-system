import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate=useNavigate()
  const [value,setvalue]=useState({
    name:"",
    email:"",
    password:"",
    conformpassword:""
  })
  const updatevalue=async(e)=>{
    e.preventDefault();
     
    const resp=await fetch('http://localhost:3000/manager/newmanger',{
    method:"POST",
    headers:{
        'Content-Type':"application/json"
    },
    body:JSON.stringify(value)
  })
  const p=await resp.json()
  console.log("msg is",p.msg)
  if(p.msg="employee manager already there")
  {
    alert("already exist")
  }
  else{

 alert("succesfully register")
 navigate("/login")
 
  }
  

 

  }
  return (
    <div>
      <form onSubmit={updatevalue}>
  {/* <!-- Email input --> */}
  <div className="form-outline mb-4">
    <input type="text" id="form2Example1" className="form-control" onChange={(e)=>{setvalue({...value,name:e.target.value})}} />
    <label className="form-label" for="form2Example1">name</label>
  </div>
  <div className="form-outline mb-4">
    <input type="text" id="form2Example1" className="form-control" onChange={(e)=>{setvalue({...value,email:e.target.value})}}/>
    <label className="form-label" for="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline mb-4">
    <input type="text" id="form2Example2" className="form-control" onChange={(e)=>{setvalue({...value,password:e.target.value})}}/>
    <label className="form-label" for="form2Example2">Password</label>
  </div>
  <div className="form-outline mb-4">
    <input type="text" id="form2Example2" className="form-control" onChange={(e)=>{setvalue({...value,conformpassword:e.target.value})}}/>
    <label className="form-label" for="form2Example2">conformPassword</label>
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div className="row mb-4">
    {/* <div className="col d-flex justify-content-center">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label className="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div> */}

    {/* <div className="col">
    
      <a href="#!">Forgot password?</a>
    </div> */}
  </div>

  {/* <!-- Submit button --> */}
  <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

  {/* <!-- Register buttons --> */}
  <div className="text-center">
    <p>if member? <Link to="/login">login</Link></p>
    
    

   
  </div>
</form>
    </div>
  )
}
