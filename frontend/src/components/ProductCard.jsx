import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Product.css";

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-info">
                <h1 className="product-name">{product.name}</h1>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <Link to={`/product/${product.id}`} className="view-details-btn">
                View Details
                </Link>
            </div>
        </div>
    )
};

export default ProductCard;