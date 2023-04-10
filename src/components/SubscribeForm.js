import { useState } from "react";

const SubscribeForm = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted email:", email);
        setEmail("");
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="subscribe-form">
            <h3>Subscribe to Our Newsletter</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleChange}
                />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default SubscribeForm;
