
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
const r=express.Router();

r.post("/register",async(req,res)=>{
 const {name,email,password}=req.body;
 const hash=await bcrypt.hash(password,10);
 await User.create({name,email,password:hash});
 res.json({ok:true});
});

r.post("/login",async(req,res)=>{
 const u=await User.findOne({email:req.body.email});
 if(!u||!await bcrypt.compare(req.body.password,u.password))
  return res.status(400).json({error:"INVALID"});
 const token=jwt.sign({id:u._id,role:u.role},process.env.JWT_SECRET);
 res.json({token,email:u.email,name:u.name});
});

export default r;
