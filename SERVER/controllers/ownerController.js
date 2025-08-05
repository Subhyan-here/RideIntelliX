import { format } from "path";
import imagekit from "../config/imageKit";
import User from "../models/user";
import fs from "fs";
import scooter from "../models/scooter";
import bike from "../models/bike";


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


//API FOR LISTING

export const addvehicle = async (req,res)=>{
    try{
        const {_id} = req.user;
        let vehicle = JSON.parse(req.body.vehicleData);
        const imageFile = req.file;

        //upload image to imageKit
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile,
            folder: '/vehicles'
        })


        // Optimization through imageKit URL Transformation
        var optimizedimageURL = imagekit.url({
            path : response.filePath,
            transformation : [
                {width:'1200'},
                {quality:'auto'},   //Auto compression
                {format: 'webp'}    //convert to modern format
            ]
        });

        const image = optimizedimageURL;
        if (await scooter.create({...scooter, owner: _id, image}))
            { 
                res.json({success: true, message: "Scooter added"})
            }
        else{
            await bike.create({...bike, owner: _id, image})
            res.json({success: true, message: "Bike added"})
        }
        
    } catch(error){
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}
         