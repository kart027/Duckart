const express = require("express")
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config({path:"./config/config.env"})
const { connectDatabase } = require("./config/database")
app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));
const creator = require("./routes/Creator")
const Donationroutes = require("./routes/Donation")
connectDatabase();

app.use("/creator",creator);
app.use("/Donation",Donationroutes);



app.listen(process.env.PORT,()=>{
    console.log("hi")
})