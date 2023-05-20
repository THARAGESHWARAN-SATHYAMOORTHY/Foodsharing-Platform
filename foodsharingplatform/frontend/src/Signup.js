import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        // Save the user details to localStorage or a database
        // Here, we'll just log the details to the console
        const usernamePattern = /^[a-zA-Z0-9_]{4,}$/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

        if (username === usernamePattern && password === passwordPattern) {
            // Set the isLoggedIn state to true
            // Save the authentication token to localStorage or session storage
            localStorage.setItem('token', 'your_auth_token');
            // Redirect to the home page after successful login
            navigate('/');
        } else {
            // Clear the username and password fields
            setUsername('');
            setPassword('');
            // Show an error message or perform any other error handling
            console.log('Invalid credentials');
        }

        console.log('New user signed up:', { username, password });

        // Clear the form fields
        setUsername('');
        setPassword('');

        // Redirect to the login page after successful signup
        navigate('/login');
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
