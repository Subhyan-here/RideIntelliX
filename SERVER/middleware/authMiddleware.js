import jwt from "jsonwebtoken";

 const authMiddleware = (req,res,next)=> {
    const authheader = req.headers.authorization;
    if(!authheader) return res.status(401).json({error:'No token provided'});
    const token = authheader.split('')[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch{
        res.status(401).json({error:'Not authorized'});
    }
}
export default authMiddleware