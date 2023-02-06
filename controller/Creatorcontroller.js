const creator = require("../models/CreatorSchema");
const cookie = require("cookie-parser")

exports.creatorsignup = async (req,res)=>{
const {username,password,cpassword,image,profession} = req.body;
if(password!=cpassword){
    return res.status(401).json({
        message:"password and confirm password should be same"
    })
}
try{
let newcreator = await creator.findOne({username});

   
if(newcreator){
    res.status(400).json({
        sucess:false,
        message:"Creator alerdy exist"
    })
}
newcreator = await creator.create({
   username:username,
   password:password,
   profileUrl:image,
   profession:profession
 })

 res.status(201).json({
     sucess: true,
     newcreator
 })
} catch (error) {
    res.status(500).json({
        sucess:false,
        message:error.message
       
    })
    

}
}

exports.creatorlogin = async (req,res)=>{



try{
    const {username,password} = req.body;

    const Creator = await creator.findOne({username}).select("+password");

    if(!Creator){
        return res.status(400).json({
            sucess:false,
            message:"Creator does not exist"
        });
    }

    const isMatch = await Creator.matchPassword(password);

    if(!isMatch){
        return res.status(400).json({
            sucess: false,
            message:"Incorrect Password",
        });
    }

    const token = await Creator.generateToken();
    const options = {expires:new Date(Date.now()+90*24*60*60*1000),httpOnly:true}

    res.status(200).cookie("token",token,options).json({
        sucess:true,
        Creator,
        token,
    })


}catch (error) {
    res.status(500).json({
        sucess:false,
        message:error.message,
    })
}

}

exports.getallcreator = async (req,res)=>{
    try {
        let getAllCreator = await creator.find();
        res.status(201).json({
            sucess:true,
            getAllCreator
        })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:error.message,
        })
    }

}

exports.creatorlogout = async (req,res)=>{
    try {
        res.status(201).cookie("token",null,{expires:new Date(Date.now()),httpOnly:true}).json({
           message:"logged out"
        })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:error.message,
        })
    }
}
 