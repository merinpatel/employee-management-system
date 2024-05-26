import  Express  from "express"
const router=Express.Router()
import {data} from "../container/Index.js";


router.route("/")
.post(data.adddatainmanager)

router.route("/check")
.post(data.getdatafrommanager)
// router.route("/:id")
router.route("/employeecheck")
.post(data.employeelogin)


export default router