import React, { useState } from 'react'

export default function Newemployee() {
    const [title,settitle]=useState({
        name:"",
        email:"",
        phoneno:"",
        address:"",
        domaintype:"",
        id:""
    })
    // const [err,seterr]=useState({
    //     tit:"",
    //     des:""
    // })
    
    
    const fortitle=(event)=>{
      const name=event.target.name
      const value=event.target.value
        settitle({
            ...title,[name]:value
            
        })
        
    }
    
  const check=async (e)=>{
       
  e.preventDefault();
  console.log(title);

  const reponse=await fetch('http://localhost:3000/manager/newemployee',{
    method:"POST",
    headers:{
        'Content-Type':"application/json"
    },
    body:JSON.stringify(title)
  })
console.log(reponse)
    }
  return (
    <div>

<form  onSubmit={check} >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">title</label>
    <input type="text" name="name" value={title.name} onChange={fortitle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
     {/* <p>{title}</p> */}
     {/* {err.tit?<q>{err.tit}</q>:<q></q>} */}
     
     
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">description</label>
    <input type="text" name="email" value={title.email}  onChange={fortitle}className="form-control" id="exampleInputPassword1"/>
    {/* {err.des?<q>{err.des}</q>:<q></q>} */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">description</label>
    <input type="text" name="phoneno" value={title.phoneno}  onChange={fortitle}className="form-control" id="exampleInputPassword1"/>
    {/* {err.des?<q>{err.des}</q>:<q></q>} */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">description</label>
    <input type="textarea" name="address" value={title.address}  onChange={fortitle}className="form-control" id="exampleInputPassword1"/>
    {/* {err.des?<q>{err.des}</q>:<q></q>} */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">description</label>
    <input type="textarea" name="domaintype" value={title.domaintype}  onChange={fortitle}className="form-control" id="exampleInputPassword1"/>
    {/* {err.des?<q>{err.des}</q>:<q></q>} */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">employee id</label>
    <input type="text" name="id" value={title.domaintype}  onChange={fortitle}className="form-control" id="exampleInputPassword1"/>
    {/* {err.des?<q>{err.des}</q>:<q></q>} */}
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
  {/* {console.log({title})} */}
</form>
{console.log({title})}
    </div>
  )
}
