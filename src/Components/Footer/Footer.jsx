import './Footer.css'
import { NavLink } from 'react-router'


export default function footer() {
    return (
        <div className="main-footer">
            <img className="footer-logo" src="/src/assets/ToKa Logo.png" alt="logo" />

            <div className="footer-sections">
                <div className="footer-sect a">
                    <div className="footer-sect-header">
                        <h2>Company</h2>    
                    </div>
                    <NavLink to="#">About Us</NavLink>
                    <NavLink to="#">Jobs</NavLink>
                    <NavLink to="#">Events</NavLink>
                    <NavLink to="#">FAQ</NavLink>
                </div>
                <div className="footer-sect a">
                    <div className="footer-sect-header">
                        <h2>User</h2>    
                    </div>
                    <NavLink to="#">Manage Account</NavLink>
                    <NavLink to="#">Manage Subscriptions</NavLink>
                </div>
                <div className="footer-sect a">
                    <div className="footer-sect-header">
                        <h2>Contact Us</h2>    
                    </div>
                    <NavLink to="#">Facilities</NavLink>
                    <h5>ToKa@email.com</h5>
                    <h5>Phone number</h5>
                </div>
                <div className="footer-sect a">
                    <div className="footer-sect-header">
                        <h2>Services</h2>    
                    </div>
                    <NavLink to="#">Accessibility Features</NavLink>
                    <NavLink to="#">Dahboard</NavLink>
                    <NavLink to="#">Articles</NavLink>
                </div>
            </div>


        </div>
    )
}