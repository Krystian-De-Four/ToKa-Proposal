import './VideoContent.css';

export default function VideoContent() {
    return (
        <div className="video-content-container">
            <h2>Video Workout Content</h2>
            <p className="subtitle">Explore our quick daily routines to kickstart your fitness journey.</p>

            <div className="workout-list">
                <div className="workout-row">
                    <h3>5-Minute Full Body Burn</h3>
                    <div className="workout-columns">
                        <div className="video-wrapper">
                            <iframe 
                                src="https://www.youtube.com/embed/exXly1KGEgM" 
                                title="5-Minute Full Body Burn"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="workout-text">
                            <p>This session takes you through a fast bodyweight sequence designed to elevate your heart rate quickly without any equipment, establishing a solid baseline for overall body conditioning.</p>
                            <p>Improves cardiovascular endurance, boosts daily calorie expenditure, enhances core stability, and acts as a fantastic metabolic primer for beginners starting out.</p>
                        </div>
                    </div>
                </div>

                <div className="workout-row">
                    <h3>Daily 5-Minute Movement Routine</h3>
                    <div className="workout-columns">
                        <div className="video-wrapper">
                            <iframe 
                                src="https://www.youtube.com/embed/TUcTRQadvUU" 
                                title="Daily 5-Minute Movement Routine"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="workout-text">
                            <p>A low-impact routine focused on simple squat and lift movements combined with gentle rotational stretches to get your joints moving smoothly and efficiently throughout the day.</p>
                            <p>Relieves daily sitting stiffness, improves joint mobility across hips and shoulders, enhances posture, and promotes active recovery for resting days.</p>
                        </div>
                    </div>
                </div>

                <div className="workout-row">
                    <h3>5-Minute Beginner Cardio</h3>
                    <div className="workout-columns">
                        <div className="video-wrapper">
                            <iframe 
                                src="https://www.youtube.com/embed/q2NZyW5EP5A" 
                                title="5-Minute Beginner Cardio"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="workout-text">
                            <p>An interval workout utilizing steady 40 seconds of movement and 20 seconds of rest cycles to keep you moving at a manageable, controlled pace without burnout.</p>
                            <p>Builds lower body stability, strengthens cardiovascular endurance safely, introduces structured interval pacing, and boosts overall stamina progressively.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}