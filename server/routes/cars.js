const express = require("express");
const {Cars} = require("../models/car");
const router = express.Router();

router.get("/",async(req,res)=>{
try {
    const allDatas=await Cars.find()
    res.send({status:"ok",data:allDatas})
} catch (error) {
    console.log(error);
}
})

router.post("/add",async(req,res)=>{
    const {name,model,color}=req.body
    try {
        await Cars.create({name,model,color})
        res.send({status:"ok",data:req.body})
    } catch (error) {
        console.log(error);
    }
})

router.put("/:id",async(req,res)=>{
    try {
        const id=req.params.id
        const prev=await Cars.findById(id)
        const newVal=req.body
        await Cars.updateOne(prev,newVal)
        res.send({status:"ok",data:req.body})

    } catch (error) {
       console.log(error); 
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        const id=req.params.id
        const prev=await Cars.findById(id)
        await Cars.deleteOne(prev)
        res.send({status:"deleted"})

    } catch (error) {
       console.log(error); 
    }
})
module.exports=router

