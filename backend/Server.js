


import dotenv from 'dotenv'
import app from "./App.js";

import query from "./Databaseconnect.js"
// const port=process.env.PORT||8000

query();
app.listen(3000,()=>{
    console.log("hello")
})
