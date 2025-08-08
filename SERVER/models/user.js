import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String, enum: ["admin", "user"], default: 'user'},
    image:{type:String, default:''}
},  {timestamps: true});

const User = mongoose.model('user',userschema);

export default User