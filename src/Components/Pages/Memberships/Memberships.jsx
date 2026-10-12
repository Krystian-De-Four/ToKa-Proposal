import './Memberships.css';

export default function Memberships() {
    return (
        <div className="memberships-container">
            <h2>Membership Options</h2>
            <p>Choose the tier that suits your requirements, offering different content and facility access.</p>

            <div className="tiers-grid">

                <div className="tier-card highlighted-tier">
                    <h3>Free Tier</h3>
                    <p className="price">£0.00 / month</p>
                    <ul>
                        <li>Access to free resources</li>
                        <li>Basic training and healthy living info</li>
                    </ul>
                    <button className="tier-btn">Current Selection</button>
                </div>

                <div className="tier-card">
                    <h3>Standard Tier</h3>
                    <p className="price">£19.99 / month</p>
                    <ul>
                        <li>Standard digital content</li>
                        <li>Customisable workout plans</li>
                        <li>Social and community chat</li>
                    </ul>
                    <button className="tier-btn">Select Standard</button>
                </div>

                <div className="tier-card">
                    <h3>Premium Tier</h3>
                    <p className="price">£35.99 / month</p>
                    <ul>
                        <li>Full personal training access</li>
                        <li>Advanced video content and custom eating plans</li>
                        <li>Priority booking and support</li>
                    </ul>
                    <button className="tier-btn">Select Premium</button>
                </div>
            </div>
        </div>
    );
}