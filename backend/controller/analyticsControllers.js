const Order = require("../model/orderModel");
const User = require("../model/userModel");
const Product = require("../model/productModel");
const getAdminStats = async(req,res)=>{
    try {
        const totalUsers = await User.countDocuments({role:'user'});
        const totalOrders = await Order.countDocuments({});
        const totalProducts = await Product.countDocuments({});

        const orders = await Order.find({});
        const totalRevenueData = orders.reduce((acc,order) => acc+order.totalAmount,0);

        res.json({
            totalOrders,
            totalProducts,
            totalUsers,
            totalRevenue:totalRevenueData
        });
    } catch (error) {
    console.log(error);

    res.status(500).json({
        message: "Error fetching stats",
        error: error.message
    });
}
};

module.exports ={getAdminStats} ;