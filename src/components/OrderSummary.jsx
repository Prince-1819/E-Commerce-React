import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../CSS Module/OrderSummary.module.css";

const OrderSummary = () => {
    const location = useLocation(); // Hook to access the current location object
    const navigate = useNavigate();
    const cartProductList = useSelector((state) => state.cart.cartProductList); // Select cart product list from Redux store
    const { name, address, paymentMethod } = location.state; // Destructure order details from location state

    // Calculate total amount for the order
    const totalAmount = cartProductList.reduce((total, product) => {
        return total + product.quantity * product.productId.price;
    }, 0);

    // Function to handle placing the order
    const handlePlaceOrder = () => {
        alert("Order successfully placed!");
        navigate('/');
    };

    // Function to handle order cancellation
    const handleCancel = () => {
        navigate('/cart');
    };

    return (
        <div className={styles.main}>
            <h2 className="text-center fw-bold">Order Summary</h2>
            <hr />
            <div className="mb-3">
                <h5 className="mt-2">Shipping Information</h5>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Address:</strong> {address}</p>
                <p><strong>Payment Method:</strong> {paymentMethod === 'cash' ? 'Cash on Delivery' : 'Cheque'}</p>
            </div>
            <div className="mb-3">
                <h4>Products</h4>
                <ul>
                    {cartProductList.map(product => (
                        <li key={product.productId._id}>
                            {product.productId.name} - {product.quantity} x RS.{product.productId.price}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-3">
                <h5 className="text-end"><strong>Subtotal:</strong> RS.{totalAmount}</h5>
            </div>
            <div className="d-flex justify-content-around">
                <button className="btn btn-success" onClick={handlePlaceOrder}>Place Order</button>
                <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default OrderSummary;
