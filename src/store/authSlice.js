import { createSlice } from '@reduxjs/toolkit';

// Function to get user data from localStorage
const getUserFromLocalStorage = () => {
    const userJSON = localStorage.getItem('user');
    try {
        return userJSON ? JSON.parse(userJSON) : null;// Parse JSON if exists, otherwise return null

    } catch (error) {
        console.log('Error parsing user data from localStorage:', error);
    }
};

const initialState = {
    token: localStorage.getItem('token') || null,  // Retrieve token from localStorage, default to null if not found
    user: getUserFromLocalStorage(),  // Retrieve user from localStorage using helper function
};

// Create authentication slice using Redux Toolkit
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Reducer to set the token in the state and localStorage
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },

        // Reducer to set the user in the state and localStorage
        setUser: (state, action) => {
            state.user = action.payload;
            console.log(action);
            localStorage.setItem('user', JSON.stringify(action.payload));  // Store new user in localStorage as a JSON string
        },

        // Reducer to clear token and user from state and localStorage
        logout: (state) => {
            state.token = null;  // Clear token in state
            state.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },

        // Reducer to clear token and user from state without affecting localStorage
        clearAuth: (state) => {
            state.token = null;
            state.user = null;
        },
    },
});

export const { setToken, setUser, logout, clearAuth } = authSlice.actions;

export default authSlice.reducer;
