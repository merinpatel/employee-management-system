// import { Router } from "express";
// import task from "./container/Index.js"
import  Express  from "express"
const router=Express.Router()
import {data} from "../container/Index.js";
// import {validate } from "../validate/Task_validate.js"
// import {vali} from '../validate/Middle.js'
console.log("in router")

//makes get,post,put,delete rquest
router.route("/")
.get(data.getdata)
.post(data.sendmail)

router.route("/:id")
.put(data.putdata)
.get(data.getdatabyid)
.delete(data.deletedata)


// router.post("/",vali,validate, data.adddata);
// router.post("/", data.adddata);

// router.get("/",data.getdata)

// router.put("/:id",data.updatedata)

// router.delete("/".data.del)
export default router;





