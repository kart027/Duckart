const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const CreatorSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:[true,"Username Alerdy Exist"],
    },
    password:{
        type:String,
        required:[true,"Please enter PassworS"],
        minlength:[6,"minimum lenght should be 6"],
    },
    profileUrl:{
        type:String,
        required:true
    },profession:{
        type:String,
        required:true
    }
})


CreatorSchema.pre("save",async function (next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10)
    }
    next();    
});

CreatorSchema.methods.matchPassword = async function (password){
    return await bcrypt.compare(password,this.password);
}

CreatorSchema.methods.generateToken = function ()
{
    return jwt.sign({
        _id:this._id
    },process.env.JWT_SECERT);
}


module.exports = mongoose.model('creator',CreatorSchema)