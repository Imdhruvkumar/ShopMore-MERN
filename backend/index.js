const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const path = require("path");

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin:
    process.env.NODE_ENV === "production"
      ? true
      : "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth", require("./routes/authRoutes.js"));
app.use("/api/product", require("./routes/productRoutes.js"));
app.use("/api/order", require("./routes/orderRouter.js"));
app.use("/api/payment", require("./routes/paymentRouter.js"));
app.use("/api/analytics", require("./routes/analyticsRouter.js"));

// Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("ShopMore Backend Working Properly");
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});