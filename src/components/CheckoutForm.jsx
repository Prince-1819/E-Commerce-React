import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../CSS Module/CheckoutForm.module.css";

const CheckoutForm = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/order-summary', { state: { name, address, paymentMethod } });
    };

    return (
        <div className={`${styles.main} container`}>
            <h2 className="text-center mb-4">Checkout Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea
                        className="form-control"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Payment Method</label>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="cash"
                            name="paymentMethod"
                            value="cash"
                            checked={paymentMethod === 'cash'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <label htmlFor="cash" className="form-check-label ms-2">Cash on Delivery</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="cheque"
                            name="paymentMethod"
                            value="cheque"
                            checked={paymentMethod === 'cheque'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <label htmlFor="cheque" className="form-check-label ms-2">Cheque</label>
                    </div>
                </div>
                <button type="submit" className="btn w-100" style={{ background: "rgb(56,49,49)", color: "white" }}>
                    Continue
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
