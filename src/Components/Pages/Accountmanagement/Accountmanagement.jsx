import './Accountmanagement.css';

export default function Accountmanagement() {


    return (
        <div className="account-container">
            <h2>Account Management</h2>
            <p>Here, you can update and review your account and billing information.</p>

            <form className="account-form">
                <div className="form-field">
                    <label>Full Name:</label>
                    <input type="text" placeholder="Name"/>
                </div>

                <div className="form-field">
                    <label>Email Address:</label>
                    <input type="email" placeholder="Email" />
                </div>



                <button type="submit" className="update-btn">Save Changes</button>
            </form>

            <div className="billing-section">
                <h3>Billing & Membership</h3>
                <p>Current Tier: Premium Member</p>
                <p>Next Payment Due: </p>
                <button className="cancel-btn">Cancel Membership / Change Tier</button>
            </div>
        </div>
    );
}