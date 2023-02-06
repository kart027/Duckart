const donationcontroller = require("../models/DonationSchema")

exports.Donation = async (req,res)=>{
    try {
        const c1 = req.user._id;
        const c2 = req.params.id;

        const{currency,amount,name,message} = req.body;

        let newdonation = await donationcontroller.create({
            From:c1,
            To:c2,
            Currency:currency,
            Amount:amount,
            Name:name,
            Message:message
        })
        res.status(201).json({
            sucess:true,
            newdonation
        })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:error.message,
        })
    }
}

exports.getDonation = async(req,res)=>{
  
    try {
        const c1 = req.user._id;
        const c2 = req.params.id;

        let donation = await donationcontroller.find({From:c1,To:c2});

        if(!donation){
            return res.status(404).json({
                message:"No Transcation found"
            })
        }

        res.status(201).json({
            donation
        })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:error.message,
        }) 
    }
}