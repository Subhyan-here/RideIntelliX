import Booking from "../models/booking.js"
import Vehicle from "../models/vehicle.js";
import Razorpay from "razorpay";


//Function to check availability of vehicles for a given Date

const checkAvailability = async (vehicle, pickupDate, returnDate)=>{
    const bookings = await Booking.find({
        vehicle,
        pickupDate: {$lte : returnDate},
        returnDate: {$gte: pickupDate},
    })

    return bookings.length === 0;
}

//API to check availability of vehicles for the  given Date and location

export const checkAvailabilityofVehicle = async (req, res)=>{
    try {
        const {location, pickupDate, returnDate}= req.body

        //fetch all available vehicles for the given location
        const vehicles = await vehicle.find({location, isAvailable: true})

        //check car availability for the given data range using promise
        const availableVehiclesPromises = vehicles.map(async (vehicle)=>{
            
        const isAvailable = await checkAvailability(vehicle._id, pickupDate, returnDate)
        return {...vehicle._doc, isAvailable: isAvailable}
        })

    let availableVehicles = await Promise.all(availableVehiclesPromises);
        availableVehicles = availableVehicles.filter(vehicle => vehicle.isAvailable === true)

        res.json({success: true, availableVehicles})
    } catch(error) {
        console.log(error.message);
        res.json({success: false, message:error.message})
    }
}

//API to create booking 
export const createBooking = async(req,res)=>{
    try {
        const {_id} = req.user;
        const {vehicle, pickupDate, returnDate} = req.body;

        const isAvailable = await checkAvailability(vehicle, pickupDate, returnDate)
        if(!isAvailable){
            return res.json({success: false, message: "Vehicle is not available"})
        }

        const vehicleData = await Vehicle.findById(vehicle)

        //Calculate price based on pickupDate and returnDate 
        const picked = new Date(pickupDate);
        const returned = new Date(returnDate);
        const noOfDays = Math.ceil((returned - picked) / (1000 * 60 * 60 * 24))
        const price = vehicleData.priceperday * noOfDays;

        await Booking.create({vehicle, owner: vehicleData.owner, user: _id, pickupDate, returnDate, price})

        res.json({success: true, message: "Booking Created"})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message:error.message})
    }
}

//API to get list of user bookings 

export const getUserBookings = async (req,res)=>{
    try {
        const {_id} = req.user;
        const bookings = (await Booking.find({ user: _id }).populate("vehicle")).sort({createdAt: -1})
        res.json({success: true, bookings})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message:error.message})
    }
}

//API to get Owner bookings

export const getOwnerBookings = async (req,res)=>{
    try {
        if(req.user.role !== 'owner'){
            return res.json({success: false, message: "Unauthorized"})
        }
        const bookings = await Booking.find({owner: req.user._id}).populate('vehicle user').select("-user.password").sort({createdAt: -1})
        res.json({success: true, bookings})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message:error.message})
    }
}

//API to change booking status 

export const changeBookingStatus = async (req,res)=>{
    try {
        const {_id} = req.user;
        const {bookingId, status} = req.body;

        const booking = await Booking.findById(bookingId)

        if(booking.owner.toString() !== _id.toString()){
            return res.json({success: false, message: "Unauthorized"});
        }

        booking.status = status;
        await booking.save();

        res.json({success: true, message: "Status Updated"})
        
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message:error.message})
    }
}

        {/*CHANGES APPLIED*/}
//create booking & payment order
    export const bookVehicle = async(req,res)=>{

    try {
        const {vehicle,vehicleId,user,price} = req.body;

        //create razorpay order
        const options = {
            price:amount*100,
            currency:'INR',
            receipt:`recipt_order_${Date.now()}`
        };

        const order = await Razorpay.orders.create(options);

        const booking = await Booking.create({user,vehicleId,price,status: 'Pending'});
        res.status(201).json({booking,order});


    }catch(err){
        res.status(401).json({error:err.message});
    }

    };

//update payment status

export const verifyPayment = async(req,res)=>{

   try {
    const {vehicleId} = req.body;
    await Booking.findByIdAndUpdate(vehicleId,{paymentStatus:'Paid'});
    res.status(200).json({message:'Payment verified and updated'});
   } catch(err){
     res.status(401).json({error:err.message});
   }
}


//get all booking

export const getAllbookings = async(req,res)=>{
    const bookings = await Booking.find().populate('vehicleId');
    res.status(200).json(bookings);
}