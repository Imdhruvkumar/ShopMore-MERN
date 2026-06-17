const Order = require("../model/orderModel");
const User = require("../model/userModel");
const Product = require("../model/productModel");
const getAdminStats = async(req,res)=>{
    try {
        const totalUser = await User.countDocuments({role:'user'});
        const totalOders = await Order.countDocuments({});
        const totalProducts = await Product.countDocuments({});

        const orders = await Order.find({});
        const totalRevenueData = orders.reduce((acc,order) => acc+order.totalAmount,0);

        res.json({
            totalOders,
            totalProducts,
            totalUser,
            totalRevenue:totalRevenueData
        });
    } catch (error) {
        res.status(501).json({message:"error fetching status",error});
    }
};

module.exports ={getAdminStats} ;