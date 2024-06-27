import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styles from "../CSS Module/Product.module.css";
import { incrementQuantityThunk } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle adding product to cart
  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up to parent elements
    dispatch(incrementQuantityThunk(product._id)); // Dispatch the correct async thunk action to add product to cart
    navigate("/cart");
  };

  // Function to handle navigation to product details page
  const handleClick = () => {
    navigate(`/products/${product._id}`);
  };

  return (
    <div className="col" onClick={handleClick}>
      <div className={`card ${styles.main_card}`}>
        <img src={product.image} height={"300px"} className="card-img-top" alt={product.name} />
        <div className="card-body text-white">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.type}</p>
          <div className="row align-items-center">
            <h5 className={`${styles.price} col-md-5 col-12 mb-2 mb-md-0`}>RS.{product.price}</h5>
            <button className={`${styles.btn} btn col-md-5 col-12`} onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
