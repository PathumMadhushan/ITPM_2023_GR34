const express=require("express");
const router=express.Router();

const Room=require('../models/room')

router.route("/getallrooms").get(async(req,res)=>{

    try {
        const rooms=await Room.find({})
        return res.json({rooms});
        
    } catch (error) {
        return res.status(400).json({message:error});
    }
})
router.route("/update/:id").put(async(req,res)=>{
    let userId=req.params.id;
    const {fullname,maxCount,phoneNumber,rentPerDay,imageurls,currentBookings,type,}=req.body;

    const updateRoom={
        fullname,
        maxCount,
        phoneNumber,
        rentPerDay,
        imageurls,
        currentBookings,
        type,
       
    }

    const update=await room.findByIdAndUpdate(userId,updateRoom)
    .then(()=>{
        res.status(200).send({status:"updated"})   
    }).catch((err)=>{
console.log(err);
res.status(500).send({status:"error with updating data",err:err.message})
    })

    router.route("/delete/:id").delete(async(req,res)=>{
        let roomId=req.params.id;
    
        await room.findByIdAndDelete(roomId)
        .then(()=>{
            res.status(200).send({status:"deleted"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"error with delete ",error:err.message});
        })
})
    
   
})

;

module.exports=router;