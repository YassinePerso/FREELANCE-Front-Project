import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Data } from './Data';

// import '../Styles/Details.css';
import styles from '../Styles/Details.module.css';

const Details = (props) => {

    const {id} = useParams();

    console.log(useParams().id);
    // console.log("Data not found");

    let detailsProduct = Data.find(item => item._id === Number(id));

    return (
        <div className={styles.details}>
            <div className={styles.insideContainer}>
                <h3>Product Details</h3>
                <div className={styles.detailsCenter}>
                    <div className={styles.detailsImg}>
                        <img src={`/${detailsProduct.img}`} alt="product" />
                    </div>

                    <div className={styles.detailsinfo}>
                        <h4 className={styles.detailsTitle}>{detailsProduct.title}</h4>
                        <p className={styles.detailsTextInfo}>{detailsProduct.details}</p>
                        <p className={styles.detailsPrice}>Price: <span>{detailsProduct.price}€</span></p>
                    </div>

                    <div className={styles.detailsBtn}>
                        <Link to="/products">Retour</Link>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;