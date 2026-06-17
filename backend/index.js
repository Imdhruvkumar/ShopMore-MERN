const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.send("shopmore backend working properly")
});
app.use('/api/auth', require('./routes/authRoutes.js'));
app.use('/api/product',require('./routes/productRoutes.js'));
app.use('/api/order',require('./routes/orderRouter.js'));
app.use('/api/payment',require('./routes/paymentRouter.js'));
app.use('/api/analytics',require('./routes/analyticsRouter.js'));

const PORT = process.env.PORT || 5000;
 app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
 });
