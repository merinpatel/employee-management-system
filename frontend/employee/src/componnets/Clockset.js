import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Clockset() {
  const [alltimedata,setalltimedata]=useState({
    date:"",
    starttime:"",
    endtime:"",
    note:"",
    id:""
  })
  
  const storedata=async (e)=>{
       
    e.preventDefault();
    // console.log(title);
  
    const reponse=await fetch('http://localhost:3000/manager/employeework',{
      method:"POST",
      headers:{
          'Content-Type':"application/json"
      },
      body:JSON.stringify(alltimedata)
    })
  console.log(reponse)
      }
  return (
    <div style={{backgroundColor:"gray"}}>
       <img src="https://www.morebusiness.com/wp-content/uploads/2021/04/time-clocks.jpg" style={{height:"30%",width:"50%", marginRight:"600px" ,marginTop:"200px",zIndex:"-4",border:"10px black solid"}}/>
        
          <div style={{display:"inline-block", height:"50px",height:"20%"}}>
          
                 <h1>ENTER THE TIME</h1>
                 <form onSubmit={storedata}>
                     <label style={{color:"blue"}}> DATE</label>
                     <input type="date" name="date" style={{border:"5px black solid"}} onChange={(e)=>{setalltimedata({...alltimedata,date:e.target.value})}}/>
                     <br/>
                     <label style={{color:"blue"}}>start time</label>
                     <input type="time" name="starttime"style={{border:"5px black solid"}} onChange={(e)=>{setalltimedata({...alltimedata,starttime:e.target.value})}}/>
                     <br/>
                     <label style={{color:"blue"}}>end time</label>
                     <input type="time" name="starttime"style={{border:"5px black solid"}} onChange={(e)=>{setalltimedata({...alltimedata,endtime:e.target.value})}}/>
                     <br/>
                     <label style={{color:"blue"}}>note about today work</label>
                    
                     <input type="text" style={{height:"50px",border:"5px black solid"}} onChange={(e)=>{setalltimedata({...alltimedata,note:e.target.value})}}/>
                      <br/>
                      <input type="text" style={{height:"50px",border:"5px black solid"}} onChange={(e)=>{setalltimedata({...alltimedata,id:e.target.value})}}/>
                      <br/>
                     
                       {/* onChange={(e)=>{setphoto(e.target.value)}} */}
                      <button type="submit">add my work</button>
                      
                      <p>if you need add some photo or pdf <Link to="/add">addimagepdf</Link></p>
                      <p>if you need add some photo or pdf <Link to={`/reportcard/${alltimedata.id}`}>generate report card</Link></p>

                     
                 </form>
          </div>
        
    </div>
  )
}
