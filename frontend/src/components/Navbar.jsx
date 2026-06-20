import React from "react";
import { Link } from "react-router-dom";

const Navbar= ()=>{
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                <img src="logo.png" alt="Shopmore Logo" className="navbar-logo" />
                Shopmore
                </Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/shop">shop</Link></li>
                <li><Link to="/Cart">Cart</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
              
            </ul>
        </nav>
    );

}

export default Navbar;