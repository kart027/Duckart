const mongoose = require("mongoose")
const DonationSchema = new mongoose.Schema({
    From:{
       
        type: mongoose.Schema.Types.ObjectId,
        ref:"creator",
    },
    To:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"creator",
    },
    Currency:{
        type:String,
        required:true
    },
    Amount:{
        type:Number,
        required:true
    },
    Name:{
        type:String
    },
    Message:{
        type:String,
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
})


module.exports = mongoose.model('Donation',DonationSchema)