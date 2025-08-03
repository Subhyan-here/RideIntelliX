
const user = require('../models/user');
const User = require('../models/user');

//create
exports.createUser = async(req,res)=>{
    const {name,email,password,role} = req.body;
    //const image = req.file ? req.file.filename : null;
    const newdata = await user.create({name,email,password,role});
    res.status(201).json(newdata);
}

//view all data
exports.getallUser = async(req,res)=>{
    const datas = await user.find();
    res.status(201).json(datas);
}

//update all data
exports.updateUser = async(req,res)=>{
    const updatedata = await user.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).json(updatedata);
}

//deleted
exports.deleteUser = async(req,res)=>{
    await user.findByIdAndDelete(req.params.id);
    res.status(201).json({message:'Deleted successfully'});
}