import React from 'react';
import styles from '../CSS Module/Home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    // handleShopNow function navigates to the '/products' route when the button is clicked
    const handleShopNow = () => {
        navigate('/products');
    };

    return (
        <div className={styles.heroSection}>
            <div className={styles.textSection}>
                <h1>STYLE AT YOUR FEET</h1>
                <p>Discover the latest trends in footwear and get ready to step up your game.</p>
                <button className={styles.shopNowBtn} onClick={handleShopNow}>Shop Now</button>
            </div>
            <div className={styles.imageSection}>
                <img src="/hero.png" alt="Shoe" className={styles.shoeImage} />
                <img src="/hero2.png" alt="Shoe" className={styles.shoeImageSecondary} />
            </div>
        </div>
    );
};

export default Home;
