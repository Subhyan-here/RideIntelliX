
const rider = require('../models/rider');
const Rider = require('../models/rider');

//create
exports.createRider = async(req,res)=>{
    const {name,location,experience} = req.body;
    const image = req.file ? req.file.filename : null;
    const newdata = await rider.create({name,location,experience,image});
    res.status(201).json(newdata);
}

//view all data
exports.getallRider = async(req,res)=>{
    const datas = await rider.find();
    res.status(201).json(datas);
}

//update all data
exports.updateRider = async(req,res)=>{
    const updatedata = await rider.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).json(updatedata);
}

//deleted
exports.deleteRider = async(req,res)=>{
    await rider.findByIdAndDelete(req.params.id);
    res.status(201).json({message:'Deleted successfully'});
}