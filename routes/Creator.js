const express = require("express")
const router = express.Router();
const { creatorsignup , creatorlogin,getallcreator,creatorlogout}  = require("../controller/Creatorcontroller")
const upload = require("../middleware/multer")
const{ isAuthenticated} = require("../middleware/auth")


router.route("/signup").post(upload.single("myfile"),creatorsignup);
router.route("/getAllCreator").get(isAuthenticated,getallcreator);
router.route("/login").post(creatorlogin);
router.route("/logout").get(creatorlogout)
module.exports = router;