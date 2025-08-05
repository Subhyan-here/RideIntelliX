const mongoose = require('mongoose');

const pickupschema = new mongoose.Schema({
    name:{type:String,required:true},
    location:{type:String,required:true},
});

module.exports = mongoose.model('pickup',pickupschema);