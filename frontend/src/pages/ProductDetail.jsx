import React,{useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {addToCart} from "../redux/cartSlice";

    ``

const ProductDetail = () => {
    const [product,setProduct] = useState(null);
    const {id} = useParams();
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products/${id}`);
                const data = await res.json();
                setProduct(data);
               
            } catch (err) {
                console.error(err);
               
            }finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addtoCart(product));
        }
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!product) {
        return <div className="not-found">Product not found</div>;
    }

    return (
        <div className="product-detail" style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>

            <div className="product-image" style={{color: '#333', marginBottom: '20px',fontSize: '18px'}}>
                <Link to="/" style={{color:"orange"}}>Home</Link> / <Link to="/shop" style={{color:"orange"}}>Shop</Link> / <span style={{color:"orange"}}>{product.name}</span>
            </div>

            <div className="product-detail">
                <div className="detail-img-container">
                    <img src={product.imageUrl} alt={product.name} className="detail-image" />
                </div>
            </div>

            <div className="detail-info ">
                <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>{product.name}</h2>
               <p style={{ fontSize: '20px', color: '#555', marginBottom: '10px' }}>Price: ${product.price.toFixed(2)}</p>

               {/* description */}
               <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '20px', color: '#333', marginBottom: '10px' }}>Description</h4>
                <p style={{ fontSize: '16px', color: '#555' }}>{product.description}</p>
                </div>
            </div>


            {/* Add to Cart Button */}
           <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={handleAddToCart} style={{ padding: '10px 20px', backgroundColor: '#ff6600', color: '#fff', border: 'none', cursor: 'pointer' }}>
                    Add to Cart
                </button>
            </div>

            <p style={{ fontSize: '14px', color: '#999', marginTop: '10px' , color:product.stock > 0 ? '#28a745' : '#dc3545' }}>{product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}</p>


            

        </div>
    );

};

export default ProductDetail;
