const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String, enum: ["admin", "user"], default: 'user'},
    image:{type:String, default:''}
},  {timestamps: true});

module.exports = mongoose.model('User',userschema);