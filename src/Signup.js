//IIT Student ID: 20210181
//UOW ID: w1867427
//Project Title: SmartFIN - Microeconomic level household income sufficiency predictor using a hybrid deep learning approach with XAI
//Project Supervisor: Mr. Obhasha Priyankara
//Project Supervisee: Suwanda Hennadige Savinthie Vidara Suwandaratna
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css'; // Import the CSS file for styling
import logo from './smartFinlogo.svg'; // Import the logo image
function Signup() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Add signup logic here
        console.log("Signup submitted");
    }

    return (
        <>
        <div className="signup-container">
            <div className="signup-form">
                <h1>Create an Account</h1>
                <img src={logo} alt="SmartFin Logo" />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="email" id="email" name="email" required placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <input type="password" id="password" name="password" required placeholder="Enter your password" />
                    </div>
                    <div className="form-group">
                        <input type="password" id="confirm_password" name="confirm_password" required placeholder="Confirm your password" />
                    </div>
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
                <p className="login-link">
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </div>
        </div>
        <p style={{ textAlign: 'center' }}>© 2025 SmartFin. All rights reserved.</p>
        <p style={{ textAlign: 'center' }}><Link to="https://docs.google.com/document/d/1vXkrY0mOQWNFQjTjt-RZmj899I6sFgvqESluNRvZc_E/edit?usp=sharing" target="_blank" rel="noopener noreferrer">User Disclaimer Policy</Link></p>
        </>
        
    );
}

export default Signup;
