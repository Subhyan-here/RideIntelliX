import mongoose from "mongoose";

const riderschema = new mongoose.Schema({
    name:{type:String,required:true},
    location:{type:String,required:true},
    experience:{type:String,required:true},
    login:{type:Date,default:Date.now},
    image:{type:String}
});

const rider = mongoose.model('Rider',riderschema);

export default rider;