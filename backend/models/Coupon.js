
import mongoose from "mongoose";
export default mongoose.model("Coupon",new mongoose.Schema({
 code:String,
 type:String,
 value:Number,
 active:{type:Boolean,default:true}
},{timestamps:true}));
