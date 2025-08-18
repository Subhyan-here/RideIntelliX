import { format } from "path";
import imagekit from "../config/imageKit.js";
import User from "../models/user.js";
import fs from "fs";
import Vehicle from "../models/vehicle.js";
import Booking from "../models/booking.js";


//API FOR owner role

export const changeRoleToOwner = async (req, res)=>{
    try {
        const {_id}= req.user;
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        await User.findByIdAndUpdate(_id, {role: "owner"})
        res.json({success: true, message: "Now you can list a vehicle"})
    } catch(error) {
        console.log(error.message);
        res.json({success: false, message:error.message})
    }
}


//API FOR adding owner vehicles

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
        await Vehicle.create({...Vehicle, owner: _id, image})
            res.json({success: true, message: "Vehicle added"})
        
    } catch(error){
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}
        

//API for Listing owner vehicles

export const getOwnerVehicles = async(req,res) =>{
    try {
        const {_id}= req.user;
        const vehicle = await Vehicle.find({owner: _id})
        res.json({success: true, vehicle})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message:error.message})
    }
}

//API FOR togle vehicle availability

export const toggleVehicleAvailability = async (req,res)=>{
    try {
        const {_id}= req.user;
        const {vehicleId} = req.body
        const vehicle = await Vehicle.findById(vehicleId)
        
        
        //cheching is vechicle belong to user 
        if(vehicle.owner.toString() !== _id.toString()){
            return res.json({success: false, message: "Unauthorized"});
        }

        vehicle.isAvaillable = !vehicle.isAvaillable;
        await vehicle.save()

        res.json({success: true, message: "Availability Toggled"})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message:error.message})
    }
}

//API FOR delete a vehicle

export const deleteVehicle = async (req,res)=>{
    try {
        const {_id}= req.user;
        const {vehicleId} = req.body
        const vehicle = await Vehicle.findById(vehicleId)
        
        
        //cheching is vechicle belong to user 
        if(vehicle.owner.toString() !== _id.toString()){
            return res.json({success: false, message: "Unauthorized"});
        }

        vehicle.owner = null;
        vehicle.isAvaillable = false;

        await vehicle.save()

        res.json({success: true, message: "Vehicle Removed"})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message:error.message})
    }
}

//API TO get dashboard data
export const dashboardData = async (req,res)=>{
    try {
        const {_id, role }= req.user;
        
        if(role !== 'owner'){
            return res.json({success: false, message: "Unauthorized"});
        }
        const vehicle = await Vehicle.find({owner: _id})
        const bookings = await Booking.find({owner: _id}).populate('vehicle').sort({ createdAt : -1});

        //function for pending booking
        const pendingBookings = await Booking.find({owner:_id, status: "Pending"})

        //function for confirmed booking
        const confirmedBookings = await Booking.find({owner:_id, status: "Confirmed"})


        //Calculate monthly revenue from confirmed booking

        const monthlyRevenue = bookings.slice().filter(booking => booking.status === 'confirmed').reduce((acc, booking)=> acc + booking.price, 0)

        const dashboardData = {
            totalvehicles: vehicle.length,
            totalbookings: bookings.length,
            pendingBookings: pendingBookings.length,
            confirmedBookings: confirmedBookings.length,
            recentBookings: bookings.slice(0,3),
            monthlyRevenue
        }

        res.json({success: true, dashboardData});

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message:error.message})
    }
}

//API to update user image 

export const updateUserImage = async (req,res)=>{
    try {
        const {_id }= req.user;

        const imageFile = req.file;

        //upload image to imageKit
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile,
            folder: '/users'
        })

        // Optimization through imageKit URL Transformation
        var optimizedimageURL = imagekit.url({
            path : response.filePath,
            transformation : [
                {width:'400'},
                {quality:'auto'},   //Auto compression
                {format: 'webp'}    //convert to modern format
            ]
        });

        const image = optimizedimageURL;

        await User.findByIdAndUpdate(_id, {image});
        res.json({success: true, message: "User image updated"})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message:error.message})
    }

}