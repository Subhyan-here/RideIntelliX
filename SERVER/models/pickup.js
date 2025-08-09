import mongoose from "mongoose";

const pickupschema = new mongoose.Schema({
    name:{type:String,required:true},
    location:{type:String,required:true}
});

const Pickup = mongoose.model('Pickup', pickupschema)

export default Pickup