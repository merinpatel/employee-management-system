import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import {postdata} from 'C:\Users\patel\Documents\sem6\Task manager project\backend\servese\Index.js'

export default function Employee() {
  

//   const response=fetch('http://localhost:3001/task_m/data/addtask',{
//     method:"GET"
//  })
// const data=postdata.ser_getdata();
//   console.log(data);
const [data,setdata]=useState([])
// [])


    
const data2=async()=>{
  await fetch('http://localhost:3000/manager/employee')
 .then((response)=> response.json())
 .then((json)=>{
  // console.log("data is",json)
  setdata(json)
 })


}


useEffect(()=>{
  data2()
 },[])

//  const updatedata=async(id)=>{
//   await fetch('http://localhost:3000/task_m/data/addtask/'+id,{
//     method:"PUT"
//   })
//   .then((response)=>response.json())
//    .then((json)=>{
//     console.log("data is",json)
    
//    })
//   }
  






  return (
    <div>
      

<table className="table " >
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phoneno</th>
      <th scope="col">Adress</th>
      <th scope="col">Domiantype</th>
      {/* <th scope="col">Status</th> */}
      {/* <th scope="col">sidhule</th> */}
      {/* <th scope="col">compelete time</th> */}
      

      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  { data.map(iteam=>
    <tr>
      <th scope="row">{iteam.id}</th>
      <td>{iteam.name}</td>
      <td>{iteam.email}</td>
      <td>{iteam.phoneno}</td>
      <td>{iteam.address}</td>
      <td>{iteam.domaintype}</td>

      {/* <td>{c.satus}</td> */}
      {/* <td>{date}</td> */}
      <td>
      
         <Link type="button" to={`/Delete/${iteam._id}`}className="btn btn-danger mx-2"  >DELETE</Link>
         <Link type="button" to={`/update/${iteam._id}`}   className="btn btn-primary" >UPDATE</Link>
         <Link type="button" to={`/mail/${iteam.email}`}   className="btn btn-primary" >Mail</Link>


      </td>
    </tr>
   
     ) 
   } 
  </tbody>
</table>
    </div>
  )
}
