
import express from "express";
import multer from "multer";
import auth from "../middleware/auth.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";
import Coupon from "../models/Coupon.js";

const r=express.Router();
const up=multer({dest:"backend/uploads"});

r.get("/orders",auth,async(req,res)=>res.json(await Order.find()));
r.post("/product",auth,up.array("images"),async(req,res)=>{
 const imgs=(req.files||[]).map(f=>"/uploads/"+f.filename);
 res.json(await Product.create({...req.body,images:imgs}));
});
r.post("/coupon",auth,async(req,res)=>res.json(await Coupon.create(req.body)));

export default r;
