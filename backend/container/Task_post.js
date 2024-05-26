// import  Express  from "express";
// import httpStatus from "http-status";
import httpStatus from "http-status"
import{postdata} from "../servese/index.js"
import { param } from "express-validator";

 const adddata=async(req,res)=>{
  
  console.log("in container")
    // res.send({data:"hi  i am merin here"});

    
         

        const ob=await postdata.postdata(req?.body);
    res.status(httpStatus.OK).send(ob)
    

    
    


}
const adddatainmanager=async(req,res)=>{
  
    console.log("in container")
      
  
      
           
  
          const ob=await postdata.postdatainmanager(req?.body);
          console.log(ob)
      res.status(httpStatus.OK).send(ob)
      
  
      
      
  
  
  }
  const imagedata=async(req,res)=>{
    console.log(req.file)
    const data=await postdata.serimagedata(req.file.filename);
   //  res.send(data)

   
   res.status(httpStatus.OK).send(data)
   

}
const allreportdata=async(req,res)=>{
    console.log(req.file)
    const data=await postdata.storereportdata(req.file.filename,req?.body);
   //  res.send(data)

   
   res.status(httpStatus.OK).send(data)
   

}
  const getdatafrommanager=async(req,res)=>{
    const data=await postdata.ser_getdatafrommanager(req?.body);
   //  res.send(data)
   
   res.status(httpStatus.OK).send(data)
   

}
const employeelogin=async(req,res)=>{
    const data=await postdata.ser_getdatafromemployee(req?.body);
   //  res.send(data)
   
   res.status(httpStatus.OK).send(data)
   

}
const employeeworkdata=async(req,res)=>{
    const data=await postdata.employeeworkdataprocess(req?.body);
   //  res.send(data)
   
   res.status(httpStatus.OK).send(data)
   

}


const getdata=async(req,res)=>{
     const data=await postdata.ser_getdata();
    //  res.send(data)
    res.status(httpStatus.OK).send(data)

}
const getimgdata=async(req,res)=>{
    const data=await postdata.ser_getimgdata();
   //  res.send(data)
   res.status(httpStatus.OK).send(data)

}


const putdata=async(req,res)=>{
    const data=await postdata.put_data(req?.params?.id,req?.body)
    console.log(req?.params?.id)
    console.log(req?.body)
    res.status(httpStatus.OK).send(data)
}


const deletedata=async(req,res)=>{
    const data=await  postdata.del_data(req?.params?.id)
    res.status(httpStatus.OK).send(data)

}
const getdatabyid=async(req,res)=>{
    const data=await postdata.get_byid(req?.params?.id)
    // console.log(req?.params?.id)
    res.status(httpStatus.OK).send(data)
}
const reportemployeedata=async(req,res)=>{
    const data=await postdata.repemployeedata(req?.params?.id)
    // console.log(req?.params?.id)
    res.status(httpStatus.OK).send(data)
}
const reportdatedata=async(req,res)=>{
    const data=await postdata.repdatedata(req?.params?.id)
    // console.log(req?.params?.id)
    res.status(httpStatus.OK).send(data)
}
const employeeworkgetdata=async(req,res)=>{
    const data=await postdata.workget_byid(req?.params?.id)
    // console.log(req?.params?.id)
    res.status(httpStatus.OK).send(data)
}

const sendmail=async(req,res)=>{
    console.log("in sendmail container")
    const data=await postdata.mail_data(req?.body)
    
    res.status(httpStatus.OK).send(data)


}
export { adddata,adddatainmanager,getdata,putdata,deletedata,getdatabyid
    ,sendmail,getdatafrommanager,employeelogin,employeeworkdata,imagedata,getimgdata,employeeworkgetdata,reportdatedata,reportemployeedata,allreportdata
};
