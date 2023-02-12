const mongoose = require('mongoose');

const formData = new mongoose.Schema({
    Name:{
        type:String,
        required:[true,'Name should not be empty'],
        trim:true,
        maxlength:[20,'You have crossed the maximum length'],
    },
    Number:{
        type:Number,
        required:[true,'Number cannot be empty'],
        maxlength:[10,'Number should be length of 10'],
    },
    Email:{
        type:String,
        required:[true,'Email cannot be empty'],

    },
    Message:{
        type:String,
        required:[true,'Message cannot be empty'],
        trim:true,
    }
})

module.exports= mongoose.model('Enquiry',formData);