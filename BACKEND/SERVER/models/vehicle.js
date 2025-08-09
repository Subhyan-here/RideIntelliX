import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types

const vehicleSchema = new mongoose.Schema({
    owner: {type: ObjectId,ref: 'User'},
    brand: {type: String, required: true},
    model: {type: String, required: true},
    image: {type:String, required: true},
    year: {type: Number, required: true},
    catagory: {type:String, required: true},
    vehicle_type: { type:String, required: true},
    priceperday: { type:Number, required: true},
    location: { type: String, required: true},
    description: { type:String, required: true},
    isAvaillable: { type:Boolean, default: true},
},{timestamps: true})

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle