
import Rider from '../models/rider.js';


//create
export const createRider = async(req,res)=>{
    const {name,location,experience} = req.body;
    const image = req.file ? req.file.filename : null;
    const newdata = await Rider.create({name,location,experience,image});
    res.status(201).json(newdata);
}

//view all data
export const getallRider = async(req,res)=>{
    const datas = await Rider.find();
    res.status(201).json(datas);
}

//update all data
export const updateRider = async(req,res)=>{
    const updatedata = await Rider.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).json(updatedata);
}

//deleted
export const deleteRider = async(req,res)=>{
    await Rider.findByIdAndDelete(req.params.id);
    res.status(201).json({message:'Deleted successfully'});
}