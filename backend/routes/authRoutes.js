const express = require("express");
const router = express.Router();
const {registerUser,loginUser,getUsers} = require("../controller/authControlles")
const {protect} = require('../middleware/authMiddleware');
const {admin}= require('../middleware/adminMiddleware');

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/user",protect,admin,getUsers);


