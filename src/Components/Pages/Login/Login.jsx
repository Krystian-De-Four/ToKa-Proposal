import './Login.css'
import { NavLink } from 'react-router'

export default function Login() {

    return (
        <div className="login-main">
            <div className="login-form-container">
                <div className="login-email">
                    <label for="email">Enter your username or E-Mail to login, below:</label>
                    <input className="login-email-input" type="email" id="email-id" placeholder="E-Mail / Username"></input>
                </div>
                <div className="login-password">
                    <label for="password">Enter account password:</label>
                    <input className="login-password-input" type="password" id="password-id" placeholder="Enter password:"></input>

                    <NavLink className="work" to="">Forgot Password?</NavLink>

                    <button className="login-confirm">
                        <p>Login</p>
                    </button>

                    <div className="signup-links">

                        <NavLink className="login-to-signup" to="/signup">Dont have an account?</NavLink>
                    </div>
                </div>

            </div>

        </div>

    )
}