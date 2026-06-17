const express = require("express");
const {protect} = require("../middleware/authMiddleware");
const {admin} = require("../middleware/adminMiddleware");
const {getAdminStats} = require("../controller/analyticsControllers");
const router = express.Router();

router.get("/",protect,getAdminStats);
module.exports = router;