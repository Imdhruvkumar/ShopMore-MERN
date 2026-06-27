import React,{useState,useContext} from "react";
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import '../styles/register.css';

const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
   const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await res.json();
            if (res.ok) {
                alert('Registration successful! You can now log in.');
                login(data);
                navigate('/');
            } else {
                alert('Registration failed: ' + data.message);
                console.error(data.message);
            } 
        }  
        catch (err) {
            console.error(err);
        }
   }
    

return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                <button type="submit" className="register-button">
                    Register
                </button>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );  
};

export default Register;
