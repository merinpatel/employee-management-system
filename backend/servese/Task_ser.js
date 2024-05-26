import mongoose from 'mongoose';
// import { Validator } from 'mongoose';
import {manager,employee, employeework, imagetable, report} from '../Models/Manager_db.js';
// const val=Validator()
// const nodemailer=require('nodemailer');
import nodemailer from 'nodemailer'



const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "patelmerin1212004@gmail.com",
      pass: "gdsi qlav jsog ghum",
    },
  });

  export const employeeworkdataprocess=async(body)=>{
    const date=body.date
    const starttime=body.starttime
    const endtime=body.endtime
    const note=body.note
    const id=body.id
    // const photo=body.photo
    // console.log(photo)
    // upload.single(photo)
    // const domaintype=body.domaintype
   
     
    await employeework.create([{
        date,starttime,endtime,note,id
    }])
    return {
        msg:"datainserted"
    }



}
export const serimagedata=async(file)=>{
    
    const filename=file
    // console.log(photo)
    // upload.single(photo)
    // const domaintype=body.domaintype
//    console.log("photo is",base64)
     
    await  imagetable.create({image:filename}) 
    return {
        msg:"datainserted"
    }



}

export const postdata=async(body)=>{
    const name=body.name
    const email=body.email
    const phoneno=body.phoneno
    const address=body.address
    const domaintype=body.domaintype
    const id=body.id
   
     
    await employee.create([{
        name,email,phoneno,address,domaintype,id
    }])
    return {
        msg:"datainserted"
    }



}
export const postdatainmanager=async(body)=>{
    const name=body.name
    const email=body.email
    const password=body.password
    const conformpassword=body.conformpassword
   const data=await manager.findOne({password:password})
     if(data)
     {
        return {msg:"employee manager already there"}
     }
     else{
    await manager.create([{
        name,email,password,conformpassword
    }])
    return {msg:"employee"}
     }



}
export const storereportdata=async(file,body)=>{
    const name=body.name
    const email=body.email
    const phoneno=body.phoneno
    const address=body.address
    const domaintype=body.domaintype
    const date=body.date
    const starttime=body.starttime
    const endtime=body.endtime
    const note=body.note
    const pdf=file
    
     
     report.create([{
        name,email,phoneno,address,domaintype,date,starttime,endtime,note,pdf
    }])
    return {msg:"employee"}
     



}
export const ser_getdatafromemployee=async(body)=>{
    const {name,email}=body

    const data=await employee.findOne({name:name,email:email})
    console.log(data)
     if(data)
     {
        return {msg:"correct"}
     }
     else{
        return{msg: "not correct"}
     }
}
export const ser_getdatafrommanager=async(body)=>{
    const {name,email,password}=body

    const data=await manager.findOne({name:name,email:email,password:password})
    console.log(data)
     if(data)
     {
        return {msg:"correct"}
     }
     else{
        return{msg: "not correct"}
     }
}


export const ser_getdata=async()=>{
    const data=await employee.find();
    return data
}
export const ser_getimgdata=async()=>{
    const data=await imagetable.find()
    return data;
    
}

export const put_data=async(id,body)=>{
    const name=body.name
    const email=body.email
    const phoneno=body.phoneno
    const address=body.address
    const domaintype=body.domaintype
   
    
    const data=await employee.findByIdAndUpdate(id,{$set:{
       name,email,phoneno,address,domaintype
    }})
    return data;
}
export const del_data=async(id)=>{
    const data=await employee.findByIdAndDelete(id);
    return data;
}
export const get_byid=async(id)=>{
    const data=await employee.findById(id);
    return data;
}
export const repdatedata=async(id)=>{
    console.log(id)
    const data=await employee.findOne({id:id});
    return data;
}
export const repemployeedata=async(id)=>{
    console.log(id)
    const data=await employeework.findOne({id:id});
    return data;
}
export const workget_byidget_byid=async(id)=>{
    const data=await employee.findById(id);
    return data;
}

export const mail_data=async(body)=>{
    console.log("in mail servese")
    const mail= body.mail
   
    const descreption=body.descreption
    
    console.log(mail,descreption)
    const info={
        from:"patelmerin1212004@gmail.com",
        to:mail,
        
        message:descreption
    }
    // const msg=""
    
    transporter.sendMail(info,function(err){
        if(err)
        {
            console.log("error is come",err)
        }
        else{
            console.log("succesfully msg is send")
        }
    })



    // res.send("hello")
}

