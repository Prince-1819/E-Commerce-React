import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin } from '../store/api';
import { setToken, setUser } from '../store/authSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Function to handle form submission for login
    const handleLogin = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!email.includes('@')) {
            setError('Please enter a valid email address');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        try {
            const response = await signin({ email, password }); // Call signin API with email and password
            dispatch(setToken(response.data.token));
            dispatch(setUser(response.data.user));
            navigate('/');
        } catch (error) {
            console.error('Login failed', error);
            setError('Invalid email or password');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Login</h2>
                            {error && <div className="alert alert-danger" role="alert">{error}</div>}
                            <form onSubmit={handleLogin}>
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
                                <button type="submit" className="btn w-100" style={{ background: "rgb(56,49,49)", color: "white" }}>Login</button>
                            </form>
                            <div className="text-center mt-3 d-flex justify-content-center align-items-center">
                                <p className='me-2 mb-0'>Don't have an account?</p>
                                <button
                                    className="btn btn-link p-0"
                                    onClick={() => navigate('/signup')}
                                    style={{ textDecoration: "none", color: "rgb(56,49,49)" }}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
