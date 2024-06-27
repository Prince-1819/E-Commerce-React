import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../CSS Module/CartProduct.module.css";
import {
  incrementQuantityThunk,
  decrementQuantityThunk,
  removeProductThunk,
  fetchCart
} from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

export const CartProduct = () => {
  const cartProductList = useSelector((state) => state.cart.cartProductList); // Selecting cart products from the Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch cart products when the component mounts
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <ul className={styles.heading}>
        <li>Image</li>
        <li>Name</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Amount</li>
        <li>Remove</li>
      </ul>
      <hr className={`${styles.marginAuto} ${styles.w60}`} />

      {cartProductList.map((product) => (
        <ul className={styles.heading} key={product.productId._id}>
          <img src={product.productId.image} width={"50px"} height={"40px"} alt={product.productId.title} />
          <li>{product.productId.name}</li>
          <li>RS.{product.productId.price}</li>
          <li className="d-flex">
            <i
              className="bi bi-dash-circle"
              onClick={() => dispatch(decrementQuantityThunk(product.productId._id))}
            ></i>
            <span className="mx-3">{product.quantity}</span>
            <i
              className="bi bi-plus-circle"
              onClick={() => dispatch(incrementQuantityThunk(product.productId._id))}
            ></i>
          </li>
          <li>RS.{product.quantity * product.productId.price}</li>
          <i
            className="bi bi-trash3-fill"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(removeProductThunk(product.productId._id))}
          ></i>
        </ul>
      ))}

      {cartProductList.length !== 0 ? (
        <div className={styles.checkOutContainer}>
          <h4 className={styles.checkOutButton} onClick={() => navigate("/checkout")}>
            Check Out
          </h4>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CartProduct;
