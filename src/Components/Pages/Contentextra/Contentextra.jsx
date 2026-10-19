import './Contentextra.css';

export default function Contentextra() {
    return (
        <div className="content-page-container">
            <h2>Premium Content Extra</h2>
            <p>Exclusive advanced personal training materials, priority bookings, and advanced nutritional tracking.</p>
            
            <div className="content-grid">
                <div className="content-item">
                    <h4>Advanced Personal Training Video Masterclass</h4>
                    <div className="video-placeholder">[Video Placeholder]</div>
                    <p>One-on-one specialist routines from top instructors</p>
                </div>
                <div className="content-item">
                    <h4>Fully Customised Eating Plans</h4>
                    <p>Tailored dietary breakdowns linked directly to your profile database</p>
                </div>
            </div>
        </div>
    );
}