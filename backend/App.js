
// import  express from "express";
import  Express  from "express";
import morgan from "morgan";
import router from "./Router/Index.js"
import cors from 'cors'
const app=Express();
const corsoption={
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}
app.use(morgan('dev'))  
app.use(Express.urlencoded({extended:false}))
app.use(Express.json())
app.use(cors(corsoption))
app.use("/manager",router)
export default app;