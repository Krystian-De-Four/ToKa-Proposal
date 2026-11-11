import './Signup.css';
import { useState } from 'react';
import { NavLink } from 'react-router';
import axios from 'axios';

export default function Signup() {
    const [activeModal, setActiveModal] = useState(null);
    //declare state variables for user inputs
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [accountType, setAccountType] = useState("free");

    async function handleSubmit(e) {
        e.preventDefault();//prevents browser refresh


        if (password !== confirmPass) {
            alert("Passwords do not match!");
            return;
        }

        try {//const response recieves the reply which is set up in the backend such as saving the inputs
            //await is used to ensure that a response is recieved before moving on
            const response = await axios.post("http://127.0.0.1:8001/signup", {
                //axios.post performs from website/signup, post the defined variables to the backend 
                email: email,
                username: username,
                password: password,
                account_type: accountType
            });

            console.log("Success from backend:", response.data);
            alert("Signed up successfully!");

            window.location.href = "/login";

        } catch (error) {//error handling 
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
                    <label>Enter your Email to sign up below:</label>
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
                    <label>Create a Username</label>
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
                    <label>Create a password for your new account:</label>
                    <input
                        className="signup-box"
                        type="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label>Verify Password</label>
                    <input
                        className="signup-verify-box"
                        type="password"
                        placeholder="Enter password again:"
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                        required
                    />
                </div>
                <div className="signup-tier">
                    <label>Choose your plan:</label>
                    <div className="signup-tier-options">
                        <label>
                            <input type="radio" name="accountType" value="free" checked={accountType === "free"} onChange={(e) => setAccountType(e.target.value)} />
                            Free
                        </label>
                        <label>
                            <input type="radio" name="accountType" value="plus" checked={accountType === "plus"} onChange={(e) => setAccountType(e.target.value)} />
                            Plus
                        </label>
                        <label>
                            <input type="radio" name="accountType" value="extra" checked={accountType === "extra"} onChange={(e) => setAccountType(e.target.value)} />
                            Extra
                        </label>
                    </div>
                </div>

                <button type="submit" className="signup-confirm">
                    <p>Confirm</p>
                </button>

                <NavLink className="signup-to-login" to="/login">Have an account?</NavLink>

                <p>By clicking 'Confirm' you agree to our Terms of Service</p>
                <p>and Privacy Policy</p>
            </form>
        </div>
    );
}