import BmiCalculator from "../../Bmicalculator/Bmicalculator";
import './Contentplus.css';

export default function Contentplus() {
    return (
        <div className="content-page-container">
            <h2>Premium Content Plus & Tools</h2>
            <p>Access advanced video training routines, customised nutritional guides, and profile tracking tools.</p>

            <div className="content-grid">
                <div className="content-item">
                    <h4>Advanced Strength Routine</h4>
                    <div className="video-placeholder">[Video Player Placeholder]</div>
                    <p>Detailed guide on upper-body resistance training equipment.</p>
                </div>
                <div className="content-item">
                    <h4>Customied Eating Plan</h4>
                    <p>Nutritional breakdowns derived from your profile BMI calculations.</p>
                </div>
            </div>

            
            <div className="bmi-section-container">
                <h3>Body Mass Index (BMI)</h3>
                <p>Calculate your BMI to help tailor your customisable plans.</p>
                <BmiCalculator/>
            </div>
        </div>
    );
}