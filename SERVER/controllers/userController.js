import user from '../models/user';
// const User = require('../models/user');


//create
export const createUser = async(req,res)=>{
    try {
    const {name,email,password} = req.body;
    //const image = req.file ? req.file.filename : null;
    const newdata = await user.create({name,email,password});
    res.status(201).json(newdata);

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

//view all data
export const getallUser = async(req,res)=>{
    const datas = await user.find();
    res.status(201).json(datas);
}

//update all data
export const updateUser = async(req,res)=>{
    const updatedata = await user.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).json(updatedata);
}

//deleted
export const deleteUser = async(req,res)=>{
    await user.findByIdAndDelete(req.params.id);
    res.status(201).json({message:'Deleted successfully'});
}

