import './Footer.css'
import { NavLink } from 'react-router'


export default function footer() {
    return (
        <div className="main-footer">
            <img className="footer-logo" src="/src/assets/ToKa Logo.png" alt="logo" />

            <div className="footer-items">
                
                <div className="footer-legal-items">
                    <h4>© 2026 ToKa Fitness</h4>
                    <NavLink className="footer-legal-text" to="#">Privacy Policy</NavLink>
                    <NavLink className="footer-legal-text" to="#">Terms of Service</NavLink>
                </div>

                <div className="footer-sections">
                    <div className="footer-sect a">
                        <div className="footer-sect-header">
                            <h2>Company</h2>
                        </div>
                        <NavLink to="#">About Us</NavLink>
                        <NavLink to="#">Jobs</NavLink>
                        <NavLink to="articles">Events</NavLink>
                        <NavLink to="faq">FAQ</NavLink>
                    </div>
                    <div className="footer-sect a">
                        <div className="footer-sect-header">
                            <h2>User</h2>
                        </div>
                        <NavLink to="manageAccount">Manage Account</NavLink>
                        <NavLink to="manageAccount">Manage Subscriptions</NavLink>
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
                        <NavLink to="dashboard">Dashboard</NavLink>
                        <NavLink to="#">Articles</NavLink>
                    </div>

                </div>


            </div>




        </div>
    )
}