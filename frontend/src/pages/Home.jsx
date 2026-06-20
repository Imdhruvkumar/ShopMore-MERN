import React from "react";
import { Link } from "react-router-dom";
const Home = ()=>{
    return(
        <div className="home">
            <h1>Welcome To Shopmore</h1>
            <p>your one-stop shop for all your needs. explore our wide range of product. </p>
            <Link to="/shop" className="btn">Start Shopping</Link>
        </div>
    );
};

export default Home;