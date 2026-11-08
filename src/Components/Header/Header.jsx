import "./Header.css";
import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router";

export default function Header() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        //check if user session exists in localStorage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return (
        <div className="header">
            <img className="header-logo" src="/src/assets/ToKa Logo.png" alt="logo"/>
            
            <nav className="header-buttons">
                <NavLink to="social">Social</NavLink>
                <Link to="/signup">Accessibility</Link>
                
                {user ? (
                    <div className="user-nav-container">
                        <button onClick={handleLogout} className="logout-btn">Logout</button>
                        <span className="user-username-display">{user.username}</span>
                    </div>
                ) : (
                    <Link to="/login" className="login-link">Login / Sign Up</Link>
                )}
            </nav>
        </div>
    );
}