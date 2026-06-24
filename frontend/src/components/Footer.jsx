import React from "react";
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
      <footer style={{
        background: "linear-gradient(to right, rgb(169, 91, 18),black)",
        borderTop: "1px solid #333",
        marginTop: "20px",
        padding: "20px 0"
      }}>
        <div style={{ 
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#fff",
            fontSize: "14px"
            
            }}>
            <div>
                <h1 style={{color:'black', marginBottom:'10px',marginLeft:'10px'}}>Shopmore. </h1>
                <p style={{color:'#alalaa', fontSize:'12px',marginLeft:'10px'}}> premium E-commers platform</p>
            </div>
            <div style={{display:'flex', gap:'20px'}}>
                <Link to="/about" style={{color:'#fff', textDecoration:'none'}}>About Us</Link>
                <Link to="/contact" style={{color:'#fff', textDecoration:'none'}}>Contact</Link>
                <Link to="/privacy" style={{color:'#fff', textDecoration:'none'}}>Privacy Policy</Link>
            </div>
            <div style={{color:'#fff', fontSize:'12px'}}>
                &copy; {new Date().getFullYear()} Shopmore. All rights reserved.
            </div>

        </div>        
      </footer>
    );
    
}

export default Footer;