
import express from "express";
import Product from "../models/Product.js";
import Order from "../models/Order.js";
const r=express.Router();

r.get("/products",async(req,res)=>res.json(await Product.find({active:true})));
r.get("/product/:id",async(req,res)=>res.json(await Product.findById(req.params.id)));
r.post("/order",async(req,res)=>res.json(await Order.create(req.body)));

export default r;
