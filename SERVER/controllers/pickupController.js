const pickup = require("../models/pickup");


//create
exports.createRider = async(req,res)=>{
    const {name,location} = req.body;
    const newdata = await pickup.create({name,location});
    res.status(201).json(newdata);
}

//view all data
exports.getallRider = async(req,res)=>{
    const datas = await pickup.find();
    res.status(201).json(datas);
}

//update all data
exports.update = async(req,res)=>{
    const updatedata = await pickup.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).json(updatedata);
}

//deleted
exports.deleteRider = async(req,res)=>{
    await pickup.findByIdAndDelete(req.params.id);
    res.status(201).json({message:'Deleted successfully'});
}