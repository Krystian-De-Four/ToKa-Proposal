import './Accountmanagement.css';
import axios from 'axios';
import { useState } from 'react';

export default function Accountmanagement() {
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem("user");
        return stored ? JSON.parse(stored) : null;
    });

    const [username, setUsername] = useState(user?.username ?? "");
    const [email, setEmail] = useState(user?.email ?? "");

    async function handleSave(e) {
        e.preventDefault();

        try {
            const response = await axios.put("http://127.0.0.1:8001/update", {
                current_email: user.email,
                username: username,
                email: email
            });

            const updatedUser = {
                ...user,
                username: response.data.username,
                email: response.data.email
            };
            

            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
            alert("Profile updated");
        } catch (error) {
            console.error("update error:", error);
            alert(error.response?.data?.detail || "Failed to update");
        }
    }

    if (!user || !user.email) {
        return (
            <div className="account-container">
                <p>Log in to view account details</p>
            </div>
        );
    }

    return (
        <div className="account-container">
            <h1>Account management</h1>

            <form onSubmit={handleSave} className="account-form">
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Account Tier:</label>
                    <p className="tier-display">
                        <strong>{(user.account_type ?? "").toUpperCase()}</strong>
                    </p>
                </div>

                <button type="submit" className="save-btn">Save Changes</button>
            </form>
        </div>
    );
}