import "./Header.css"
import { NavLink } from "react-router"

export default function Header(){

    return (
        <div className="header">
            <img className="header-logo" src="">
            </img>
            <nav className="header-buttons">
                <NavLink to="#">Social</NavLink>
                <link to="#">Login / Sign Up</link>
                <link to="#">Accessibility</link>
            </nav>
        </div>

    )
}