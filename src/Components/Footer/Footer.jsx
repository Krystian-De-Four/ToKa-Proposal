import './Footer.css'
import { NavLink } from 'react-router'
import { useState } from 'react'

export default function Footer() {
    const [activeModal, setActiveModal] = useState(null);

    return (
        <div className="main-footer">
            <img className="footer-logo" src="/src/assets/ToKa Logo.png" alt="logo" />

            <div className="footer-items">
                <div className="footer-legal-items">
                    <h4>© 2026 ToKa Fitness</h4>
                    <a href="#" className="footer-legal-text" onClick={(e) => { e.preventDefault(); setActiveModal('privacy'); }}>Privacy Policy</a>
                    <a href="#" className="footer-legal-text" onClick={(e) => { e.preventDefault(); setActiveModal('terms'); }}>Terms of Service</a>
                </div>

                <div className="footer-sections">
                    <div className="footer-sect a">
                        <div className="footer-sect-header">
                            <h2>Company</h2>
                        </div>
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveModal('about'); }}>About Us</a>
                        <NavLink to="#">Jobs</NavLink>
                        <NavLink to="articles">Events</NavLink>
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveModal('faq'); }}>FAQ</a>
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

            {activeModal === 'privacy' && (
                <div className="footer-modal-overlay" onClick={() => setActiveModal(null)}>
                    <div className="footer-modal-box" onClick={(e) => e.stopPropagation()}>
                        <button className="footer-modal-close" onClick={() => setActiveModal(null)}>×</button>
                        <h3>Privacy Policy</h3>
                        <p>Your privacy is protected with ToKa Fitness</p>
                    </div>
                </div>
            )}

            {activeModal === 'terms' && (
                <div className="footer-modal-overlay" onClick={() => setActiveModal(null)}>
                    <div className="footer-modal-box" onClick={(e) => e.stopPropagation()}>
                        <button className="footer-modal-close" onClick={() => setActiveModal(null)}>×</button>
                        <h3>Terms of Service</h3>
                        <p>By using signing up and using ToKa fitness you agree to:
                            everything
                        </p>
                    </div>
                </div>
            )}

            {activeModal === 'about' && (
                <div className="footer-modal-overlay" onClick={() => setActiveModal(null)}>
                    <div className="footer-modal-box" onClick={(e) => e.stopPropagation()}>
                        <button className="footer-modal-close" onClick={() => setActiveModal(null)}>×</button>
                        <h3>About Us</h3>
                        <p>ToKa Fitness is a is a great place</p>
                    </div>
                </div>
            )}

            {activeModal === 'faq' && (
                <div className="footer-modal-overlay" onClick={() => setActiveModal(null)}>
                    <div className="footer-modal-box" onClick={(e) => e.stopPropagation()}>
                        <button className="footer-modal-close" onClick={() => setActiveModal(null)}>×</button>
                        <h3>Frequently Asked Questions</h3>
                        <p>stop asking questions</p>
                    </div>
                </div>
            )}
        </div>
    )
}