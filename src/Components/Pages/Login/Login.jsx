import './Login.css'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import axios from 'axios';
 
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
 
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8001/login", {
                email,
                password
            });
            //Save user info & tier data to LOCALSTORAGE
            localStorage.setItem("user", JSON.stringify(response.data));
 
            //redirect user after successful login
            window.location.href = "/";
        } catch (err) {
            console.error("Login error:", err);
            alert("Login failed: " + (err.response?.data?.detail || "An error occurred."));
        }
    }
 
    return (
        <div className="login-main">
            <form onSubmit={handleSubmit} className="login-form-container">
                <div className="login-email">
                    <label htmlFor="email">Enter your E-Mail to login, below:</label>
                    <input
                        className="login-email-input"
                        type="email"
                        placeholder="E-Mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="login-password">
                    <label htmlFor="password">Enter account password:</label>
                    <input
                        className="login-password-input"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
 
                    <NavLink className="" to="">Forgot Password?</NavLink>
 
                    <button type="submit" className="login-confirm">
                        <p>Login</p>
                    </button>
 
                    <div className="signup-links">
                        <NavLink className="login-to-signup" to="/signup">Don't have an account?</NavLink>
                    </div>
                </div>
            </form>
        </div>
    );
}