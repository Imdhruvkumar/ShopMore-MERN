const express = require("express");
const {protect} = require("../middleware/authMiddleware");
const {admin} = require("../middleware/adminMiddleware.js");
const {createOrder,getOrder,myOrders,updateOrderStatus} = require("../controller/ordercontrollers.js");

const router = express.Router();

router.route('/').post(protect,createOrder).get(protect,admin,getOrder);
router.route('/myorder').get(protect,myOrders);
router.route("/:id/status").put(protect, admin ,updateOrderStatus);

module.exports = router;