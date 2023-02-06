const express = require("express");
const router = express.Router()
const {isAuthenticated } = require("../middleware/auth")
const { Donation,getDonation} = require("../controller/Donationcontroller")

router.route("/donating/:id").post(isAuthenticated,Donation)
router.route("/donationdetails/:id").get(isAuthenticated,getDonation)
module.exports = router;