// // import mongoose from "mongoose"
// // const mongoose=require("mongoose")
// import mongoose from "mongoose"

// const query=async ()=>{
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/abc')
//         console.log("Database successfully connected...");
//     } catch (error) {
//         console.log("nwefuiw",error)
//     }
// }
// const first=new mongoose.Schema({
//  name:{
//     type:String
//  }
// })
// try{
// const insert=new  mongoose.model("insert",first)
// const value=new insert({
//     name:"merin"
// })
//     value.save()}
//     catch(err)
//     {
//         console.log("errro is",err)
//     }

// export default query;


// // module.exports={query}

import mongoose from "mongoose";
 const query = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/employeemanage')
        console.log("Database successfully connected...");
    } catch (error) {
        console.log("Error:", error);
    }
}
// query()
// const firstSchema = new mongoose.Schema({
//     name: {
//         type: String
//     }
// });

// try {
//     const Insert = mongoose.model("Insert", firstSchema)
//     const value = Insert.insertMany([{
//         name: "merin"
//     }])
//     // await value.save();
// } catch (error) {
//     console.log("Error:", error);
// }
export default query;

