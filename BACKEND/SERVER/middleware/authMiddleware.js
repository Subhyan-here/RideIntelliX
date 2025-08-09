import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const authMiddleware = async (req,res,next)=> {
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({error:'Not authorized'})
    }
    try{
        const userId = jwt.decode(token, process.env.JWT_SECRET);

        if(!userId){
            return res.json({success: false, message: "Not authorized"})
        }
        
        req.user = await User.findById(userId).select("-password")
        next();
    } catch(error){
        res.json({success: false, message:"Not authorized"});
    }
}
export default authMiddleware