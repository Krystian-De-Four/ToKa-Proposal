import "./Header.css"
import { NavLink, Link } from "react-router"

export default function Header(){
    return (
        <div className="header">
            <img className="header-logo" src="/src/assets/ToKa Logo.png" alt="logo"/>
            
            <nav className="header-buttons">
                <NavLink to="#">Social</NavLink>
                <Link to="#">Login / Sign Up</Link>
                <Link to="#">Accessibility</Link>

            </nav>
        </div>
    )
}