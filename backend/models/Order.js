
import mongoose from "mongoose";
export default mongoose.model("Order",new mongoose.Schema({
 email:String,
 product:String,
 plan:String,
 price:Number,
 status:{type:String,default:"pending"}
},{timestamps:true}));
