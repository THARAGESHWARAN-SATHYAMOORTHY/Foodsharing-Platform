import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Login({ setIsLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if the entered username and password are correct
        if (username === '21pc37' && password === '12345') {
            // Set the isLoggedIn state to true
            setIsLoggedIn(true);
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
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
