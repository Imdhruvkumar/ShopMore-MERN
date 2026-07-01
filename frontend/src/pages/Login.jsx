import React,{useState,useContext} from "react";
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import '../styles/login.css';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (res.ok) {
                alert('Login successful!');
                login(data);
                navigate('/');
            } else {
                alert('Login failed: ' + data.message);
                console.error(data.message);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="login-button">
                    Login
                </button>
                <p>
                    Don't have an account? <Link to="/register" style={{ color: '#e47b1f' }}>Register</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
