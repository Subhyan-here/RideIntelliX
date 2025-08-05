import User from "../models/user";


export const changeRoleToOwner = async (req, res)=>{
    try {
        const {_id}= req.user;
        await User.findByIdAndUpdate(_id, {role: "owner"})
        res.json({success: true, message: "Now you can list a vehicle"})
    } catch(error) {
        console.log(error.message);
        res.json({success: false, message:error.message})
    }
}
         