const Order = require("../model/orderModel");
const sendEmail = require('../utils/sendEmail');

const createOrder = async(req,res)=>{
    
    try {
      
        const {items,totalAmount,address,payment}= req.body;
        
     
        if (!items || items.length===0 || !address) {
            return res.status(400).json({message:'Invalid order data'});
        }
        else{
            const order = new Order({
                user:req.user._id,
                items,
                totalAmount,
                address,
                payment
            });
            await order.save();
            await sendEmail(req.user.email,'order created','your order has been created successfully');
            res.status(200).json({message:"order created successfully",order});

        }

    } catch (error) {
    console.error(error);

    res.status(500).json({
        message: "error creating order",
        error: error.message
    });
}
};

const myOrders = async(req,res)=>{
    try {
       const orders = await Order.find({user: req.user._id}).populate('items.productId','name price');
        res.json(orders)
    } catch (error) {
        res.status(501),json({message:'error fetching order',error});

    }
};

const getOrder= async(req,res)=>{
    try {
        const orders = await Order.find({}).populate('user','id name');
        res.json(orders);

    } catch (error) {
        res.status(500).json({message:'error fetching orrder',error});
    }
};

const updateOrderStatus = async(req,res)=>{
    try {
        const {status}= req.body;
        const order = await Order.findById(req.params.id);
        if(order){
            order.status = status;
            order.save();
            res.json({message:"order status updated",order});
        }
        else{
            res.status(502).json({messag:"order not found"});
        }
    } catch (error) {
         res.status(502).json({messag:"error updated order status",error});
    }
};

module.exports = {
    createOrder,
    myOrders,
    getOrder,
    updateOrderStatus
};