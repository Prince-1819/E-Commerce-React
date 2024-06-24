import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addToCart, removeFromCart, getUserCart } from './api';

// Asynchronous thunk action to fetch the user's cart from the API
export const fetchCart = createAsyncThunk('cart/fetchCart', async (_, { rejectWithValue }) => {
    try {
        const response = await getUserCart();
        return response.data;
    } catch (error) {
        // Return a custom error message for better readability
        return rejectWithValue('Failed to fetch cart');
    }
});

const initialState = {
    cartProductList: [],
    status: 'idle', // Status of the fetch operation
    error: null,
};

// Create a slice for the cart with reducers and async thunks
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Reducer to increment the quantity of a product locally
        incrementQuantityLocal: (state, action) => {
            const existingProduct = state.cartProductList.find((item) => item.productId._id === action.payload);
            if (existingProduct) {
                existingProduct.quantity += 1;
            }
        },
        // Reducer to decrement the quantity of a product locally
        decrementQuantityLocal: (state, action) => {
            const existingProduct = state.cartProductList.find((item) => item.productId._id === action.payload);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            }
        },
        // Reducer to remove a product from the cart locally
        removeProductLocal: (state, action) => {
            state.cartProductList = state.cartProductList.filter((item) => item.productId._id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cartProductList = action.payload;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message;
            });
    },
});

export const { incrementQuantityLocal, decrementQuantityLocal, removeProductLocal } = cartSlice.actions;

// Thunk action to increment the quantity of a product in the cart
export const incrementQuantityThunk = (productId) => async (dispatch) => {
    try {
        await addToCart({ productId }); // Add to cart API call
        dispatch(incrementQuantityLocal(productId)); // Update state locally
    } catch (error) {
        console.error('Failed to increment quantity:', error);
    }
};

// Thunk action to decrement the quantity of a product in the cart
export const decrementQuantityThunk = (productId) => async (dispatch) => {
    try {
        await removeFromCart({ productId }); // Remove from cart API call
        dispatch(decrementQuantityLocal(productId)); // Update state locally
    } catch (error) {
        console.error('Failed to decrement quantity:', error);
    }
};

// Thunk action to remove a product from the cart
export const removeProductThunk = (productId) => async (dispatch) => {
    try {
        await removeFromCart({ productId }); // Remove from cart API call
        dispatch(removeProductLocal(productId)); // Update state locally
    } catch (error) {
        console.error('Failed to remove product:', error);
    }
};

export default cartSlice.reducer;
