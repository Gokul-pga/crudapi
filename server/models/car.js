const mongoose=require("mongoose")
const carSchema=new mongoose.Schema({
    name:String,
    model:String,
    color:String
},
{
    collection:"cars"
});
const Cars=mongoose.model("cars",carSchema);
exports.Cars=Cars


const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
},
{
    collection:"Users"
});
const Users=mongoose.model("Users",userSchema);
exports.Users=Users