import React, { useState } from 'react';
import './Bmicalculator.css';

export default function BmiCalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBmi = (e) => {
        e.preventDefault();
        const w = parseFloat(weight);
        const h = parseFloat(height);

        if (w > 0 && h > 0) {
            const heightInMetres = h / 100;
            const calculated = w / (heightInMetres * heightInMetres);
            const rounded = calculated.toFixed(1);
            setBmi(rounded);

            if (rounded < 18.5) {
                setCategory('Underweight');
            } else if (rounded >= 18.5 && rounded < 25) {
                setCategory('Normal weight');
            } else if (rounded >= 25 && rounded < 30) {
                setCategory('Overweight');
            } else {
                setCategory('Obese');
            }
        }
    };

    return (
        <div className="bmi-component">
            <h3>BMI Calculator & Profile Tracker</h3>
            <p>Calculate your Body Mass Index to help track your fitness progress.</p>

            <form onSubmit={calculateBmi} className="bmi-form">
                <div className="form-group">
                    <label>Weight (kg):</label>
                    <input 
                        type="number" 
                        value={weight} 
                        onChange={(e) => setWeight(e.target.value)} 
                        placeholder="e.g. 70" 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>Height (cm):</label>
                    <input 
                        type="number" 
                        value={height} 
                        onChange={(e) => setHeight(e.target.value)} 
                        placeholder="e.g. 175" 
                        required 
                    />
                </div>

                <button type="submit" className="calc-button">Calculate BMI</button>
            </form>

            {bmi && (
                <div className="bmi-results-box">
                    <p><strong>BMI Score:</strong> {bmi}</p>
                    <p><strong>Category:</strong> {category}</p>
                </div>
            )}
        </div>
    );
}