import React, { useEffect, useState } from "react";
import styles from "../CSS Module/ProductList.module.css";
import Product from "./Product";

const ProductList = () => {
  const [productList, setProductList] = useState([]); // State to hold the list of products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to store any error that occurs during fetch

  // useEffect to fetch data when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products from API
        const response = await fetch('http://localhost:8080/api/products/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProductList(data); // Update productList state with fetched data
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading state to false after fetch completes (whether success or error)
      }
    };

    fetchProducts(); // Call fetchProducts function when component mounts
  }, []);

  // Loading state: Show "Loading..." message
  if (loading) {
    return <div className={styles.main}>Loading...</div>;
  }

  // Error state: Show error message
  if (error) {
    return <div className={styles.main}>Error: {error}</div>;
  }

  // Empty productList state: Show "No products available" message
  if (!productList || productList.length === 0) {
    return <div className={styles.main}>No products available.</div>;
  }

  // Display productList
  return (
    <div className={`${styles.main} row row-cols-1 row-cols-md-4`}>
      {/* Map through productList and render Product component for each item */}
      {productList.map((item) => (
        <Product product={item} key={item._id} />
      ))}
    </div>
  );
};

export default ProductList;
