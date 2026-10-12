import './Social.css';

export default function Social() {
    return (
        <div className="social-container">
            <h2>Community & Trainer Chat</h2>
            <p>Exchange messages with other members and fitness trainers.</p>

            <div className="chat-box">
                <div className="chat-message">
                    <p>hi </p>
                </div>
                <div className="chat-message">
                    <p>bye brokie</p>
                </div>
            </div>

            <form className="chat-form">
                <input type="text" placeholder="Type a message..." />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}