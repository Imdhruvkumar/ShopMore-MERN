import React from "react";
const textStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#2f2c2c",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    border: "1px solid #1d1818",
    lineHeight: "1.6",
    fontSize: "16px",
    color: "#f0e9e9"
};
const Disclamer = () => {
    return (
        <div style={textStyle}>
            <h2 style={{ marginBottom: "10px", color: "#d4421e", borderBottom: "2px solid #333", paddingBottom: "10px" }}>Disclaimer</h2>
            <p>The information, products, prices, and services available on this application are provided for general shopping purposes only. While we strive to ensure that all product descriptions, images, pricing, and availability are accurate and up to date, errors may occasionally occur. </p>
        </div>
    );
};

export default Disclamer;