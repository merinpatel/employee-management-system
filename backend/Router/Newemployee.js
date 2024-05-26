import  Express  from "express"
const router=Express.Router()
import {data} from "../container/Index.js";


router.route("/")
.post(data.adddata)
export default router