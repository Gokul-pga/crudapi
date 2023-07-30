const express =require("express");
const { Users } = require("../models/car");
const router=express.Router();

router.get("/",async(req,res)=>{
try {
    const allDatas=await Users.find()
    res.send({status:"ok",data:allDatas})
} catch (error) {
    console.log(error);
}
})

router.post("/add",async(req,res)=>{
    const userData=req.body
    try {
        await Users.create(userData)
        res.send(req.body)
    } catch (error) {
        console.log(error);
    }
})
module.exports=router

