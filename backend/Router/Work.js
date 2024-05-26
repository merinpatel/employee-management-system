import  Express  from "express"
const router=Express.Router()
import {data} from "../container/Index.js";
// import multer from 'multer';
// const upload = multer({ dest: 'Router/s' })
console.log("work")
router.route("/")
.post(data.employeeworkdata)

// 
router.route("/:id")
.get(data.reportdatedata)

// router.route("/image")
// .post(data.imagedata)   


export default router