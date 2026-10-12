import { Link } from 'react-router';
import './Dashboard.css';

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <h1>User Dashboard</h1>
            <p className="welcome-text">Welcome back! Manage your fitness journey, bookings, and account details below.</p>

            <div className="dashboard-grid">
                <div className="dash-card">
                    <h3>Account Management</h3>
                    <p>Update your personal details, view payment status, and manage membership tiers.</p>
                    <Link to="/accountmanagement" className="dash-link">Manage Account</Link>
                </div>

                <div className="dash-card">
                    <h3>Memberships & Payments</h3>
                    <p>View current tier benefits or upgrade to access paid digital content.</p>
                    <Link to="/memberships" className="dash-link">View Memberships</Link>
                </div>

                <div className="dash-card">
                    <h3>Social & Trainer Chat</h3>
                    <p>Connect and message directly with fitness trainers and other members.</p>
                    <Link to="/social" className="dash-link">Open Chat</Link>
                </div>

                <div className="dash-card">
                    <h3>Your Tier Content</h3>
                    <p>Access workout videos, healthy living advice, and customised plans.</p>
                    <Link to="/contentplus" className="dash-link">View Content</Link>
                </div>
            </div>
        </div>
    );
}