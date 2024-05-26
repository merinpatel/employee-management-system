import mongoose  from "mongoose";


const managerschema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,"enter the task name"]
    },
    email:{
        type:String,
        require:[true,"enter the emailid"]

    },
    password:{
        type:String,
        require:[true,"enter the password"]
    },
    conformpassword:{
        type:String,
        require:[true,"enter the confrom password"]
    }
    // date:{
    //     type:new Date()
    // }
})

const employeeschema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,"enter the task name"]
    },
    email:{
        type:String,
        require:[true,"enter the emailid"]

    },
    phoneno:{
        type:String,
        require:[true,"enter the phone no"]
    },
    address:{
        type:String,
        require:[true,"enter the address"]
    },
    domaintype:{
        
        type:String,
        require:[true,"enter the domaintype"]
    },
    id:{
        
        type:String,
        require:[true,"enter the domaintype"]
    }

    // date:{
    //     type:new Date()
    // }
})
const reportschema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,"enter the task name"]
    },
    email:{
        type:String,
        require:[true,"enter the emailid"]

    },
    phoneno:{
        type:String,
        require:[true,"enter the phone no"]
    },
    address:{
        type:String,
        require:[true,"enter the address"]
    },
    domaintype:{
        
        type:String,
        require:[true,"enter the domaintype"]
    },
    date:{
        type:String,
        require:[true,"enter the task name"]
    },
    starttime:{
        type:String,
        require:[true,"enter the emailid"]

    },
    endtime:{
        type:String,
        require:[true,"enter the phone no"]
    },
    note:{
        type:String,
        require:[true,"enter the address"]
    },
    pdf:{
        type:String
    }
   

    // date:{
    //     type:new Date()
    // }
})
const imageschema=new mongoose.Schema({
    image:{
        type:String,
        require:[true,"enter the task name"]
    }
})
const employeeworkschema=new mongoose.Schema({
    date:{
        type:String,
        require:[true,"enter the task name"]
    },
    starttime:{
        type:String,
        require:[true,"enter the emailid"]

    },
    endtime:{
        type:String,
        require:[true,"enter the phone no"]
    },
    note:{
        type:String,
        require:[true,"enter the address"]
    },
    id:{
        
        type:String,
        require:[true,"enter the domaintype"]
    }
    // ,
    // photo:{
    //     type:String,
    //     require:[true,"enter the address"]
    // }

    
    // date:{
    //     type:new Date()
    // }
})

 const manager=new mongoose.model("manager",managerschema);
 const employee=new mongoose.model("employee",employeeschema)
 const employeework=new mongoose.model("employeework",employeeworkschema)
 const imagetable=new mongoose.model("imagetable",imageschema)
 const report=new mongoose.model("report",reportschema)

export {manager,employee,employeework,imagetable,report};