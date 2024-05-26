import React, { useEffect, useState } from 'react'
import axios from "axios"
// import "../componnets/images"

export default function Add() {
    const [image,setimage]=useState("")

      const [getimg,setgetimg]=useState([])
      const storedata=async (e)=>{
           
        e.preventDefault();
        // console.log(title);
       const formdata=new FormData()
       formdata.append('image',image)
       console.log("image",image)
        const reponse=await axios.post('http://localhost:3000/manager/image',formdata,{
          headers:{"Content-Type":"multipart/form-data"}
        })
          
        
         
      console.log(reponse)
          }
          const getmyimage=async()=>{
            await fetch('http://localhost:3000/manager/image/getimage')
           .then((response)=>response.json())
           .then((json)=>{
            // console.log("data is",json)
            setgetimg(json)
            console.log("data is",json)
           })
          
          
          }
          useEffect(()=>{
            getmyimage()
          },[])
  return (
    <div>
       <div>
      

      <table className="table " >
        <thead>
          <tr>
            <th scope="col">id</th>
            
            <th scope="col">Image</th>
            {/* <th scope="col">Status</th> */}
            {/* <th scope="col">sidhule</th> */}
            {/* <th scope="col">compelete time</th> */}
            
      
            {/* <th scope="col">Handle</th> */}
          </tr>
        </thead>
        <tbody>
        { getimg.map(iteam=>
          <tr>
            <th scope="row">{iteam._id}</th>
            
            <td>{<img style={{height:"20px",width:"20px"}} src={require(`./images/${iteam.image}`)}/>}</td>
      
            {/* <td>{c.satus}</td> */}
            {/* <td>{date}</td> */}
           
          </tr>
         
           ) 
         } 
        </tbody>
      </table>
          </div>
         <h2>add image and pdf</h2>
        <form  onSubmit={storedata}>
           
            <label>add image</label>
            <input type="file" name="image" accept='image/*'  onChange={(e)=>{setimage(e.target.files[0])}}/>
            <br/>
            <button type='submit'>add image</button>
            <br/>
            {/* <button onClick={getmyimage} >show my image</button> */}
            
        </form>
        <div>
            {image==""?"":alert("image succefully upload")}
            </div>
    </div>
  )
}





// export default function Add() {
//     const [file, setFile] = useState(null);

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     }

//     const storeData = async (e) => {
//         e.preventDefault();

//         if (!file) return;

//         

//         try {
//             const response = await fetch('http://localhost:3000/manager/image', {
//                 method: "POST",
//                 body: formData
//             });
//             console.log(response);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     }

//     return (
//         <div>
//             <h2>add image and pdf</h2>
//             <form onSubmit={storeData}>
//                 <label>add image</label>
//                 <input type="file" onChange={handleFileChange} />
//                 <button type='submit'>add image</button>
//             </form>
//             {file && <img style={{ height: "30px", width: "20px" }} src={URL.createObjectURL(file)} alt="preview" />}
//         </div>
//     );
// }

