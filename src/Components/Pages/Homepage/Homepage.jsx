import './Homepage.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { NavLink } from 'react-router'

export default function Homepage() {
    return (
        <div className="content">
            <Header />
            <main className="homepage-container"> 

                <section className="hero-section">
                    <div className="hero-image-cover">
                        <img className="hero-image" src="/src/assets/Gym Image.png" alt="hero-background"/>
                        
                        <NavLink className="join-button" to="/">Join today</NavLink>
                        <button className="learn-more-button">Learn more</button> 
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
                </section>

            </main>
            <Footer />
        </div>
    )
}