import React ,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/home.css";
import "../styles/product.css";
const Home = ()=>{
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
    useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await fetch("/api/product");


            const data = await response.json();
            
            setProducts(data.slice(0, 5)); // Show only first 6 products
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };
    fetchProducts();
}, []);

     return(
        <div className="home-container">
          <div className="hero-banner" >
            <h1>Welcome to ShopMore</h1>
            <p>Discover the best products at unbeatable prices.</p>
            </div>
            <h2>Featured Products</h2>
            {loading ? (
                <div>Loading products...</div>
            ) : (
                <div className="products-grid">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;