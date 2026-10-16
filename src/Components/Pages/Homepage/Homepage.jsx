import './Homepage.css'
import { NavLink } from 'react-router'

export default function Homepage() {
    return (
        <div className="content">
            <main className="homepage-container">

                <section className="hero-section">
                    <div className="hero-image-cover">
                        <img className="hero-image" src="/src/assets/gym-image.jpg" alt="hero-background" />

                        <NavLink className="join-button" to="/signup">Join today</NavLink>
                        <NavLink className="learn-more-button" to="/memberships">Learn more</NavLink>
                    </div>

                    <div className="hero-bottom">
                        <p className="plans">Plans from ££.££/m</p>
                    </div>
                </section>

                <section className="info-section">
                    <h2>Who we are and what we provide</h2>
                    <p>
                        At ToKa Fitness, we provide fitness training, personal training and healthy living advice to help you work towards your fitness goals. Our services are designed for different experience levels, whether you are starting your fitness journey or looking to improve your current routine.
                        Through our website, you can access fitness information, workout content, healthy living advice and personalised plans, all in one place. We aim to make fitness easier to access and help you stay consistent with your goals.
                    </p>

                    <div className="info-container-1">
                        <div className="container-top-row">
                            <div className="feature-card">
                                <NavLink to="/freeResources" className="card-link">| Free Services</NavLink>
                                <p>Here at ToKa Fitness, we have a range of free services available when you sign up for an account with us, this includes information and advice about training and healthy living, and access to a small range of our online resources.</p>
                            </div>
                            <div className="feature-card">
                                <NavLink to="/memberships" className="card-link">| Membership information</NavLink>
                                <p>We also have a range of membership options to suit your needs, different tiers are at different prices that also tailor your experience to your needs at one of our great facilities.</p>
                            </div>
                        </div>

                        <div className="container-btm-row">
                            <div className="feature-card">
                                <NavLink to="/" className="card-link">| Services</NavLink>
                                <p>We offer a range of services to suit your needs, including digital content that will provide advice on fitness and healthy living, training, as well a lot of digital content on our customiseable plans and different services we provide.</p>
                            </div>
                            <div className="feature-card">
                                <NavLink to="/articles" className="card-link">| Equipment</NavLink>
                                <p>At ToKa Fitness, we arent just well equiped in person but online as well, create an account with us to find out more or pop into one of our facilites.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="reviews-section">
                    <h2>What Our Members Say</h2>
                    <div className="reviews-grid">
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"ToKa Fitness completely changed my routine. The free resources and plans are amazing!"</p>
                            <p className="review-author">- Someone.</p>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"Great facilities and easy-to-follow online guidance. Highly recommend the membership."</p>
                            <p className="review-author">- Someone.</p>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"Clean equipment, helpful staff, and the platform is so simple to navigate. Love it!"</p>
                            <p className="review-author">- Someone.</p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}