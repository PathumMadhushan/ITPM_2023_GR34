const mongoose = require('mongoose');

const roomSchema=mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    maxCount:{
        type:Number,
        required:true
    },
    phoneNumber:{
        type:Number,
        require:true

    },
    rentPerDay:{
        type:Number,
        required:true
    },
    imageurls:[],
    currentBookings:[],
    type:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{
    timeStamps:true,
})
const roomModel=mongoose.model('rooms',roomSchema)
module.exports=roomModel