const express = require("express");

const router = express.Router();
const {createOrder,verifyPayment}= require("../controller/paymentControllers")
router.post('/order',createOrder);
router.post('/verify',verifyPayment);
module.exports = router;