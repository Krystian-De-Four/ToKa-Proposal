import './Homepage.css'

import { NavLink } from 'react-router'


export default function Homepage() {
    return (
        <div className="content">

            <main className="homepage-container">

                <section className="hero-section">
                    <div className="hero-image-cover">
                        <img className="hero-image" src="/src/assets/Gym Image.png" alt="hero-background" />

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
                            <div classname='container-1'>
                                <NavLink to="freeResources">| Free Services</NavLink>
                                <p>Here at ToKa Fitness, we have a range of free services available when you sign up for an account with us,
                                     this includes information and advice about training and healthy living, and 
                                    access to a small range of our online resources</p>
                            </div>
                            <div classname='container-2'>
                                <NavLink to="memberships">| Membership information</NavLink>
                                <p>We also have a range of membership options to suit your needs, different tiers are at different prices that 
                                    also tailor your experience to your needs at one of our great facilities</p>

                            </div>
                        </div>

                        <div className="container-btm-row">
                            <div classname='container-3'>
                                <NavLink to="/">| Services</NavLink>
                                <p>We offer a range of services to suit your needs, including digital content that will provide 
                                    advice on fitness and healthy living, training, as well a lot of digital content on our 
                                    customiseable plans and different services we provide</p>

                            </div>
                            <div classname='container-4'>
                                <NavLink to="articles">| Equiptment</NavLink>
                                <p>At ToKa Fitness, we arent just well equiped in person but online as well, create an account with us to
                                     find out more or pop into one of our facilites</p>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}