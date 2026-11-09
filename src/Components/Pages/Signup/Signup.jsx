import './Signup.css';
import { useState } from 'react';
import { NavLink } from 'react-router';
import axios from 'axios';

export default function Signup() {
    // declare state variables for user inputs
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    async function handleSubmit(e) {
        e.preventDefault(); //prevents browser refresh

        if (password !== confirmPass) {
            alert("Passwords do not match!");
            return;
        }

        try { //const response recieves the reply which is set up in the backend such as saving the inputs
            //await is used to ensure that a response is recieved before moving on
            const response = await axios.post("http://127.0.0.1:8001/signup", {
            //axios.post performs from website/signup, post the defined variables to the backend 
                email: email,
                username: username,
                password: password
            });
            
            console.log("Success from backend:", response.data);
            alert("Signed up successfully!");

            window.location.href = "/login";

        } catch (error) { //error handling 
            console.error("Signup error:", error);
            alert("Signup failed.");
        }
    } 

    return (
        //onChange puts the input to the variable and the value={} decides where it goes 
        <div className="signup-main">
            <p>Sign Up with ToKa Fitness</p>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="signup-email">
                    <label htmlFor="email">Enter your Email to sign up below:</label>
                    <input 
                        className="email-input" 
                        type="email" 
                        placeholder="E-Mail" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="signup-username">
                    <label htmlFor="username">Create a Username</label>
                    <input 
                        className="username-input" 
                        type="text" 
                        placeholder="Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="signup-password">
                    <label htmlFor="password">Create a password for your new account:</label>
                    <input 
                        className="signup-box" 
                        type="password" 
                        placeholder="Create a password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />

                    <label htmlFor="password">Verify Password</label>
                    <input 
                        className="signup-verify-box" 
                        type="password" 
                        placeholder="Enter password again:" 
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="signup-confirm">
                    <p>Confirm</p>
                </button>
                
                <NavLink className="signup-to-login" to="/login">Have an account?</NavLink>
            </form>
        </div>
    );
}