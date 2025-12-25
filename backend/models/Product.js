
import mongoose from "mongoose";
const Plan=new mongoose.Schema({name:String,price:Number,stock:Number});
export default mongoose.model("Product",new mongoose.Schema({
 title:String,
 description:String,
 images:[String],
 plans:[Plan],
 active:{type:Boolean,default:true}
},{timestamps:true}));
