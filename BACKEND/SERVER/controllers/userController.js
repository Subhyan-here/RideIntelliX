import brycptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import Vehicle from '../models/vehicle.js';


//Generate JWT token
const generateToken = (userId)=>{
    const payload =userId;
    return jwt.sign(payload, process.env.JWT_SECRET)
}


//API to register user
export const createUser = async(req,res)=>{
    try {
    const {name,email,password} = req.body
    if (!name || !email || !password) {
        return res.json({ success: false, message: "Fill all the fields" });
    }
    if (password.length < 5) {
        return res.json({ success: false, message: "Password must be at least 6 characters long" });
    }


    const userExists = await User.findOne({email})

    if(userExists){
        return res.json({success: false, message: 'User already exists'})
    }

    const hashedpassword = await brycptjs.hash(password, 10)
    const user = await User.create({name, email, password: hashedpassword})
    const token = generateToken(user._id.toString())
    res.json({success: true, token})
    // const image = req.file ? req.file.filename : null;

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

//API to login user
export const loginUser = async(req,res) =>{
    try {
        const {email, password} =req.body
        const user = await User.findOne({email})
        if(!user){
            return res.json({success: false, message: "User not found"})
        }
        const isMatch = await brycptjs.compare(password, user.password)
        if(!isMatch){
            return res.json({success: false, message: "Invalid Credentials"})
        }

    const token = generateToken(user._id.toString())
    res.json({success: true, token})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

//API to view all data
export const getallUser = async(req,res)=>{
    try {
        const {user} = req;
        res.json({success: true, user})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

//API to update all data
export const updateUser = async(req,res)=>{
    try {
    const updatedata = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).json(updatedata);   
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

//API to delete user
export const deleteUser = async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(201).json({message:'Deleted successfully'});
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
    
}

//Get All Vehicles for the Frontend

export const getVehicles = async(req,res)=>{
    try {
        const vehicles  = await Vehicle.find({isAvaliable: true})
        res.json({success: true, vehicles})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
    
}
