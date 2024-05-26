import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  
  const navigate=useNavigate()
  const [role,setrole]=useState({})
  const [value,setvalue]=useState({
    name:"",
    email:"",
    password:"",
    
    
  
  })
  const updatevalue=async(e)=>{
    e.preventDefault();
    console.log(role)
     if(role==="manager"){
      console.log("in manager")
    const reponse=await fetch('http://localhost:3000/manager/newmanger/check',{
    method:"POST",
    headers:{
        'Content-Type':"application/json"
    },
    body:JSON.stringify(value)
  })
  const p=reponse.json()
  console.log(p.msg)
  if(p.msg="correct")
  {alert(`welcome ${value.name}`)
    navigate("/navbar")
  }
  else{
        alert("something went wrong")
  }
     }
     
     
     else
     {
      console.log("in employee")
      const reponse=await fetch('http://localhost:3000/manager/newmanger/employeecheck',{
    method:"POST",
    headers:{
        'Content-Type':"application/json"
    },
    body:JSON.stringify(value)
  })
  const p=reponse.json()
  console.log(p.msg)
  if(p.msg="correct")
  {alert(`welcome ${value.name}`)
    navigate("/navbaremployee")
  }
  else{
        alert("something went wrong")
  }

     }
  }
  return (
    <div>
      <form onSubmit={updatevalue}>
  {/* <!-- Email input --> */}
  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" onChange={(e)=>{setvalue({...value,name:e.target.value})}}/>
    <label className="form-label" for="form2Example2">name</label>
  </div>
  <div className="form-outline mb-4">
    <input type="email" id="form2Example1" className="form-control" onChange={(e)=>{setvalue({...value,email:e.target.value})}}/>
    <label className="form-label" for="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" onChange={(e)=>{setvalue({...value,password:e.target.value})}}/>
    <label className="form-label" for="form2Example2">Password</label>
  </div>
  <div className="form-outline mb-4">
  <label className="form-label" for="role">Role</label>
   <select for="role" onChange={(e)=>{setrole(e.target.value)}}>
    <option value=""></option>
    <option value="manager" >manager</option>
    <option value="employee">employee</option>
   </select>
{console.log(role)}
    
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
  <button type="submit" className="btn btn-primary btn-block mb-4">login</button>

  {/* <!-- Register buttons --> */}
 
</form>
    </div>
  )
}
