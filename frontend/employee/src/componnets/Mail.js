import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
// import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

export default function Mail() {
    const {id}=useParams()
    console.log(id)
    const navigate=useNavigate()
    
    const [value,setvalue]=useState({
        mail:id,
    
        descreption:"",
        // dat:new Date()
        })
        const putdataonserver=async(e)=>{
          // setvalue({...value,date:startDate})
          console.log("inn")
          e.preventDefault()
          await fetch('http://localhost:3000/manager/employee',{method:"POST",
          headers:{
            'Content-Type':"application/json"
          },
          body:JSON.stringify(value)
        }).then((res)=>{alert("mail send to employee")
        navigate("/navbar")
      })
      }

  return (
    <div>
      <form onSubmit={putdataonserver}>
       <h1>Mial send to employee</h1>
       <br/>
       <label htmlFor='mail'>mail id</label>
       <input type="text" value={id} />
       <label htmlFor='descreption' >descreption</label>
      <input type='textarea' row={4} value={value.descreption} onChange={(event)=>{setvalue({...value,descreption:event.target.value})}}/>
      <button >submit</button>
      </form>
    </div>
  )
}
