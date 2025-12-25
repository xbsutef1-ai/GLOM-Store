
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import auth from "./routes/auth.js";
import store from "./routes/store.js";
import admin from "./routes/admin.js";

dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

app.use("/uploads",express.static(path.join(__dirname,"uploads")));
app.use(express.static(path.join(__dirname,"../frontend/public")));

app.use("/api/auth",auth);
app.use("/api/store",store);
app.use("/api/admin",admin);

app.get("*",(req,res)=>{
 res.sendFile(path.join(__dirname,"../frontend/public/index.html"));
});

mongoose.connect(process.env.MONGO_URI).then(()=>{
 app.listen(process.env.PORT||10000,()=>console.log("GLOM running"));
});
