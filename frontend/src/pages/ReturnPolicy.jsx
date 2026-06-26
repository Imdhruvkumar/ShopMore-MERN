import React from "react";
const textStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#2f2c2c",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
    lineHeight: "1.6",
    fontSize: "16px",
    color: "#f0e9e9"
};

const ReturnPolicy = () => {
    return (
        <div style={textStyle}>
            <h2 style={{ marginBottom: "10px", color: "#d4421e", borderBottom: "2px solid #333", paddingBottom: "10px" }}>Return Policy</h2>
            <p>We want you to be completely satisfied with your purchase. If for any reason you are not satisfied, we offer a hassle-free return policy. You can return most items within 30 days of delivery for a full refund or exchange.</p>
            <p>Please ensure that the items are in their original condition, unused, and with all tags and packaging intact. To initiate a return, please contact our customer support team with your order details.</p>
        </div>
    );
};

export default ReturnPolicy;