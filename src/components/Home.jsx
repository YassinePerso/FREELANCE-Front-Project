import React from 'react';
import BackImg from '../images/stars.jpg';
// import Products from './Products';
import styles from '../Styles/Home.module.css';

const Home = () => {
    return (
        <>
        <main className={styles.containerHome}>

            <section className={styles.containerHomeImg}>
                <img src={BackImg} alt="stars" />
            </section>
        </main>
        </>
    );
};

export default Home;