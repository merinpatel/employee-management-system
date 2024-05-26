import  Express  from "express"
const router=Express.Router()
import {data} from "../container/Index.js";
import multer from 'multer';
// const upload = multer({ dest: 'Uploads/' })
console.log("work")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,"../frontend/employee/src/componnets/images")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null,  uniqueSuffix+file.originalname)
    }
  })
  const upload = multer({ storage: storage })
router.route("/")
.post(upload.single("image"),data.imagedata) 

router.route("/getimage")
.get(data.getimgdata)   




export default router