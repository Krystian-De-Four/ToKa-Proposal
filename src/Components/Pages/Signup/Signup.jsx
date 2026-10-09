import './Signup.css'
import { NavLink } from 'react-router'


export default function signup() {

    function handleSubmit(e){
        e.preventDefault();

        alert("signed up!")
    }

    return (
        <div className="signup-main">
            <p>Sign Up with ToKa Fitness</p>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="signup-email">
                    <label for="email">Enter your Email to sign up below:</label>
                    <input className="email-input" type="email" placeholder="E-Mail" required></input>
                </div>
                <div className="signup-username">
                    <label for="username">Create a Username</label>
                    <input className="username-input" type="username" placeholder="Username" required></input>
                </div>
                <div className="signup-password">
                    <label for="password">Create a password for your new accont:</label>
                    <input className="signup-box" type="password" placeholder="Create a password" required ></input>

                    <label for="password">Verify Password</label>
                    <input className="signup-verify-box" type="password" placeholder="Enter password again:" required></input>
                </div>
                <button className="signup-confirm">
                    <p>Confirm</p>
                </button>
                <NavLink className="signup-to-login" to="/login">Have an account?</NavLink>
            </form>

        </div>


    )
}