import user from '../models/user.js';


//API to create user
export const createUser = async(req,res)=>{
    try {
    const {name,email,password} = req.body;
    const image = req.file ? req.file.filename : null;
    const newdata = await user.create({name,email,password});
    res.status(201).json(newdata);

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

//API to view all data
export const getallUser = async(req,res)=>{
    try {
        const datas = await user.find();
        res.status(201).json(datas);
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

//API to update all data
export const updateUser = async(req,res)=>{
    try {
    const updatedata = await user.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).json(updatedata);   
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

//API to delete user
export const deleteUser = async(req,res)=>{
    try {
        await user.findByIdAndDelete(req.params.id);
        res.status(201).json({message:'Deleted successfully'});
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
    
}

