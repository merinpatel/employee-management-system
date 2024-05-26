import  Express  from "express"

const router=Express.Router()
import check from "./Routers.js"
// import Mail from "./Mail.js"
import Manger from "./Manger.js"
import newemployee from "./Newemployee.js"
import work from "./Work.js"
import img from "./Image.js"
import report from "./Report.js"


const routerarry=[{
    path:"/employee",
    route:check
},
{
    path:"/newmanger",
    route:Manger
},
{
    path:"/newemployee",
    route:newemployee
},
{
    path:"/employeework",
    route:work
},
{
    path:"/image",
    route:img
},
{
    path:"/report",
    route:report
}


]

routerarry.forEach((cur,i)=>{
// {console.log("addtask",cur.path)
 router.use(cur.path,cur.route)
}
)

export default router;