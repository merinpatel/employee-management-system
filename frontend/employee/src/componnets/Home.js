import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  // const navigate=useNavigate()
  // const [value,setvalue]=useState({
  //   name:"",
  //   email:"",
  //   password:"",
  //   conformpassword:""
  // })
  // const updatevalue=async(e)=>{
  //   e.preventDefault();
  //     if(value.password!=value.conformpassword)
  //     {
  //       alert("enter the similller")
  //       return;

  //     }
  //   const reponse=await fetch('http://localhost:3000/manager/newmanger',{
  //   method:"POST",
  //   headers:{
  //       'Content-Type':"application/json"
  //   },
  //   body:JSON.stringify(value)
  // })

  // }
  return (
    <>
       <img src='https://tse3.mm.bing.net/th?id=OIP.stcMVhxqSxmCuTT0RIe5SAHaFD&pid=Api&P=0&h=180'  alt='image not load'
      style={{
        height:"800px",width:"100%",borderImage:"inherit",borderBlockStyle:"ridge black 5px",position:"revert-layer",display:"block"
      }}
      
      />
      {/* <h1>Sign up</h1>
       <form onSubmit={updatevalue}>
       <label htmlFor='name'>name</label>
       <input type="text"  onChange={(e)=>setvalue({...value,name:e.target.value})} value={value.name} name="name"/>
       <label htmlFor='descreption'>Email</label>
       <input type="text"  onChange={(e)=>setvalue({...value,email:e.target.value})}value={value.email} name="email" />
       <label htmlFor='descreption'>password</label>
       <input type="text"  onChange={(e)=>setvalue({...value,password:e.target.value})}value={value.phoneno} name="passsword" />
       <label htmlFor='descreption'>conformpassword</label>
       <input type="textarea"  onChange={(e)=>setvalue({...value,conformpassword:e.target.value})}value={value.address} name="conformpassword" />
       
       <button type="submit" >Signup</button>
       <h6>if you are alredy login?</h6>
       <Link to="/loginmanager">login</Link>
       </form> */}
    </>
  )
}
