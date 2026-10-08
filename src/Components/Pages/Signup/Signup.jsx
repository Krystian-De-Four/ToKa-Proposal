import './Signup.css'
import { NavLink } from 'react-router'


export default function signup() {

    return (
        <div className="signup-main">
            <div className="signup-email">
                <label for="email">Enter your Email to sign up below:</label>
                <input className="email-input" type="email" id="email-id" placeholder="E-Mail"></input>
            </div>
            <div className="signup-username">
                <label for="username">Create a Username</label>
                <input type="username" id="email-id" placeholder="Username"></input>
            </div>
            <div className="signup-password">
                <label for="password">Create a password for your new accont:</label>
                <input type="password" id="password-id" placeholder="Create a password"></input>
            </div>
            <NavLink className="signup-to-login" to="/login">Have an account?</NavLink>
        </div>


    )
}