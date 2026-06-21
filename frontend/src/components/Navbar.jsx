import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useSelecter } from "react-redux";
const Navbar= ()=>{
    const [user, logout ] = useContext(AuthContext);
    const cartItems = useSelecter((state) => state.cart.cartItems);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                <img src="logo.png" alt="Shopmore Logo" className="navbar-logo" style={{height: '36px', width:'36px'}} />
                Shopmore
                </Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/shop">Shop</Link>  </li>
                <li><Link to="/cart">Cart({cartItems.length})</Link>  </li>
                {user ? (
                    <>
                    <li><Link to="/profile">Profile</Link></li>
                    {user.role === 'admin' && <li><Link to="/admin">Admin Panel</Link></li>}
                    <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>

                    </>
                ) : (
                    <>
                    <li><Link to="/login">Login</Link></li>
                    </>
                    )}
            </ul>
        </nav>
    );

}

export default Navbar;