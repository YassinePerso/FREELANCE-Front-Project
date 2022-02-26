import React from 'react';
import BackImg from '../images/stars.jpg';
// import Products from './Products';
import '../Styles/Home.css';

const Home = () => {
    return (
        <>
        <div className="home" style={{backgroundImage:`url(${BackImg})`}}>
            Hello from Home

            {/* <div className="banner">
                <h1 style={{color:"white"}}>Welcome to our store</h1>
            </div> */}
        </div>
        {/* <Products /> */}
        </>
    );
};

export default Home;