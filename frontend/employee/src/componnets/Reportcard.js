// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { json, useNavigate, useParams } from 'react-router-dom'
// import { Navigator } from 'react-router-dom';



// export default function Reportcard() {
//   // const navigate=useNavigate();
//     const {id}=useParams();
//     // const [date,setdate]=useState({})
// const [value,setvalue]=useState({
//     name:"",
//         email:"",
//         phoneno:"",
//         address:"",
//         domaintype:""
    
// })
// const [dat,setdat]=useState({
//   date:"",
//     starttime:"",
//     endtime:"",
//     note:"",
  
// })
// // const [data,setdata]=useState([])
// const gatedata=async()=>{
  
//       await fetch('http://localhost:3000/manager/report/'+id,{
//         method:"GET"
//       })
//       .then((response)=>response.json())
//        .then((json)=>{
//         console.log("data is",json)
//         setvalue({...value,name:json.name,email:json.email,phoneno:json.phoneno,address:json.address,domaintype:json.domaintype})
        

        
//        })
//       }
//       const gatedata1=async()=>{
  
//         await fetch('http://localhost:3000/manager/employeework/'+id,{
//           method:"GET"
//         })
//         .then((response)=>response.json())
//          .then((json)=>{
//           console.log("data is",json)
//           setdat({...dat,date:json.date,starttime:json.starttime,endtime:json.endtime,note:json.note})
//           setdate(dat)
  
          
//          })
//         }
      





//         useEffect(() => {
//           const fetchData = async () => {
//             await gatedata();
//             await gatedata1();
//           };
        
//           fetchData();
//         }, []);



 




//   return (
//     <div>
      
       
//        <form >
//        <label htmlFor='name'>name</label>
//        <input type="text"   value={value.name} name="name"/>
//        <label htmlFor='descreption'>Email</label>
//        <input type="text" value={value.email} name="descreption" />
//        <label htmlFor='descreption'>phoneno</label>
//        <input type="text"  value={value.phoneno} name="descreption" />
//        <label htmlFor='descreption'>Adress</label>
//        <input type="textarea" value={value.address} name="descreption" />
//        <label htmlFor='descreption'>domaintype</label>
//        <input type="textarea"  value={value.domaintype} name="descreption" />

//        <input type="text"  value={date.date} name="name"/>
//        <label htmlFor='descreption'>Email</label>
//        <input type="text"  value={date.starttime} name="descreption" />
//        <label htmlFor='descreption'>phoneno</label>
//        <input type="text"  value={date.endtime} name="descreption" />
//        <label htmlFor='descreption'>Adress</label>
//        <input type="textarea" value={date.note} name="descreption" />
       
//        </form>
//     </div>
//   )
// }
// // onChange={(e)=>setvalue({name:e.target.value})} value={value.name}
// // onChange={(e)=>setvalue({descreption:e.target.value})}value={value.descreption}
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { json, useNavigate, useParams } from 'react-router-dom'
// import { Navigator } from 'react-router-dom';



export default function Reportcard() {
  // const navigate=useNavigate();
  // const [report,setreport]=useState({
  //   name:value.name,
  //       email:value.email,
  //       phoneno:value.phoneno,
  //       address:"",
  //       domaintype:"",
  //       date:"",
  //       starttime:"",
  //       endtime:"",
  //       note:"",
  //       pdf:""  

  // })
  const [upload,setupload]=useState("")
  const storedata=async(e)=>{
    e.preventDefault()
  const formdata=new FormData()
       formdata.append('name',value.name)
       formdata.append('email',value.email)
       formdata.append('phoneno',value.phoneno)
       formdata.append('address',value.address)
       formdata.append('domaintype',value.domaintype)
       formdata.append('date',dat.date)
       formdata.append('starttime',dat.starttime)
       formdata.append('endtime',dat.endtime)
       formdata.append('note',dat.note)
       formdata.append('pdf',upload)
       
       const reponse=await axios.post('http://localhost:3000/manager/report',formdata,{
          headers:{"Content-Type":"multipart/form-data"}
        })

  }    
    const {id}=useParams();
const [value,setvalue]=useState({
    name:"",
        email:"",
        phoneno:"",
        address:"",
        domaintype:""
    
})
const [dat,setdat]=useState({
    date:"",
      starttime:"",
      endtime:"",
      note:"",
    
  })
const [data,setdata]=useState([])
const gatedata=async()=>{
  
      await fetch('http://localhost:3000/manager/employeework/'+id,{
        method:"GET"
      })
      .then((response)=>response.json())
       .then((json)=>{
        console.log("data is",json)
        setvalue({...value,name:json.name,email:json.email,phoneno:json.phoneno,address:json.address,domaintype:json.domaintype})
        

        
       })
      }
      const gatedata1=async()=>{
  
                await fetch('http://localhost:3000/manager/report/'+id,{
                  method:"GET"
                })
                .then((response)=>response.json())
                 .then((json)=>{
                  console.log("data is",json)
                  setdat({...dat,date:json.date,starttime:json.starttime,endtime:json.endtime,note:json.note})
                  // setdate(dat)
          
                  
                 })
                }
      





useEffect(()=>{
  gatedata()
  gatedata1()
  

 },[])




  return (
    <div>
       <h1>update the data</h1>
       <form onSubmit={storedata}>
       <label htmlFor='name'>name</label>
       <input type="text"   value={value.name} name="name"/>
       <label htmlFor='descreption'>Email</label>
       <input type="text"  value={value.email} name="descreption" />
       <label htmlFor='descreption'>phoneno</label>
       <input type="text"  value={value.phoneno} name="descreption" />
       <label htmlFor='descreption'>Adress</label>
       <input type="textarea"  value={value.address} name="descreption" />
       <label htmlFor='descreption'>domaintype</label>
       <input type="textarea"  value={value.domaintype} name="descreption" />
       <input type="text"  value={dat.date} name="name"/>       <label htmlFor='descreption'>Email</label>
        <input type="text"  value={dat.starttime} name="descreption" />
        <label htmlFor='descreption'>phoneno</label>
       <input type="text"  value={dat.endtime} name="descreption" />
        <label htmlFor='descreption'>Adress</label>
        <input type="textarea" value={dat.note} name="descreption" />
        <label htmlFor='descreption'>upload pdf</label>
        <input type="file" onChange={(e)=>{setupload(e.target.files[0])}} name="descreption" />
        <button type='submit'>submit my report</button>
       </form>
    </div>
  )
}
// onChange={(e)=>setvalue({name:e.target.value})} value={value.name}
// onChange={(e)=>setvalue({descreption:e.target.value})}value={value.descreption}