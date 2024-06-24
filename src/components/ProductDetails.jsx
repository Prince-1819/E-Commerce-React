import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import styles from "../CSS Module/ProductDetails.module.css";
import { incrementQuantityThunk } from "../store/cartSlice";

const ProductDetails = () => {
    const { id } = useParams(); // Extracting the product ID from the URL
    const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store
    const [product, setProduct] = useState(null); // State to store the product details
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    // const [number, setNumber] = useState(1);
    const cartProductList = useSelector((state) => state.cart.cartProductList);
    const navigate = useNavigate();

    // useEffect to fetch product details when component mounts or when the ID changes
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/products/${id}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setProduct(data); // Update product state with fetched data
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false); // Set loading state to false after fetch completes (whether success or error)
            }
        };

        fetchProduct(); // Call fetchProduct function when component mounts or ID changes
    }, [id]);

    // const handleIncrementNumber = () => {
    //     setNumber((prevNumber) => prevNumber + 1);
    // };

    // const handleDecrementNumber = () => {
    //     if (number > 1) {
    //         setNumber((prevNumber) => prevNumber - 1);
    //     }
    // };

    // Function to handle adding product to cart
    const handleAddToCart = () => {
        // console.log("Add to cart clicked", { productId: product._id, quantity: number });

        // dispatch(incrementQuantityThunk({ productId: product._id, quantity: number }));
        dispatch(incrementQuantityThunk(product._id));
        navigate("/cart");
        // console.log(`Adding ${number} of ${product.name} to cart.`);
    };

    // Conditional rendering based on loading state
    if (loading) {
        return <div className={styles.main}>Loading...</div>;
    }

    // Conditional rendering based on error state
    if (error) {
        return <div className={styles.main}>Error: {error}</div>;
    }

    // Conditional rendering if product is not found
    if (!product) {
        return <div className={styles.main}>Product not found.</div>;
    }

    return (
        <div className="container my-5">
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={product.image} alt={product.name} className="img-fluid card-img-top" />
                    </div>
                    <div className="col-md-5">
                        <div className="card-body ms-5">
                            <h5 className={`${styles.title} card-title mb-2 ms-2 mt-5 text-uppercase`}>{product.name}</h5>
                            <p className="card-text ms-2">{product.description}</p>
                            <h5 className={`${styles.price} mb-4 ms-2`}>RS.{product.price}</h5>
                            <div className="d-flex align-items-center mb-4">
                                {/* <button className="btn btn-outline-danger me-2" onClick={handleDecrementNumber}>
                                    -
                                </button>
                                <span className="px-3">{number}</span>
                                <button className="btn btn-outline-success ms-2" onClick={handleIncrementNumber}>
                                    +
                                </button> */}
                            </div>
                            <button className={styles.btn} onClick={handleAddToCart}>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
