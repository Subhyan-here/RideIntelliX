const mongoose = require('mongoose');

const riderschema = new mongoose.Schema({
    name:{type:String,required:true},
    location:{type:String,required:true},
    experience:{type:String,required:true},
    login:{type:Date,default:Date.now},
    image:{type:String}
});

module.exports = mongoose.model('Rider',riderschema);