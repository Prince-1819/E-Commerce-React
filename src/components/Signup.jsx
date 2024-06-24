import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../store/api';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSignup = async (e) => {
        e.preventDefault();

        // Reset error message
        setError('');

        // Basic validation
        if (!email.includes('@')) {
            setError('Please enter a valid email address');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        if (name.trim().length === 0) {
            setError('Name cannot be empty');
            return;
        }

        try {
            // Call signup function with user input
            await signup({ email, password, name });
            alert('Signup successful, please login');
            navigate('/login');
        } catch (error) {
            console.error('Signup failed', error);
            setError('Signup failed, please try again');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Signup</h2>
                            {error && <div className="alert alert-danger" role="alert">{error}</div>}
                            <form onSubmit={handleSignup}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Name"

                                    />
                                </div>
                                <button type="submit" className="btn w-100" style={{ background: "rgb(56,49,49)", color: "white" }}>Signup</button>
                            </form>
                            <div className="text-center mt-3">
                                <button
                                    className="btn btn-link p-0"
                                    onClick={() => navigate('/login')} // Navigate to login page on click
                                    style={{ textDecoration: "none", color: "rgb(56,49,49)" }}
                                >
                                    Already have an account? Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
