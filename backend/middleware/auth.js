
import jwt from "jsonwebtoken";
export default (req,res,next)=>{
 try{
  req.user=jwt.verify(req.headers.authorization.split(" ")[1],process.env.JWT_SECRET);
  next();
 }catch{res.status(401).json({error:"UNAUTH"});}
};
