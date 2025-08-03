const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:Number,required:true},
    role:{type:String,required:true},
    login:{type:Date,default:Date.now},
    image:{type:String}
});

module.exports = mongoose.model('User',userschema);