import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { Data } from './Data';
import { connect } from 'react-redux';
import { getItems, AddToCart } from '../components/actions/itemActions';

// import '../Styles/Details.css';
import styles from '../Styles/Details.module.css';

const Details = (props) => {


    useEffect(() => {
        props.getItems();

    })

    const {id} = useParams();

    console.log(useParams().id);
    // console.log("Data not found");

    let detailsProduct = props.item.items.find(item => item._id === Number(id));

    return (
        <div className={styles.details}>
            <div className={styles.insideContainer}>
                <h3>Fiche produit</h3>
                <div className={styles.detailsCenter}>
                    <div className={styles.detailsImg}>
                        <img src={`/${detailsProduct.img}`} alt="product" />
                    </div>

                    <div className={styles.detailsinfo}>
                        <h4 className={styles.detailsTitle}>{detailsProduct.title}</h4>
                        <p className={styles.detailsTextInfo}>{detailsProduct.details}</p>
                        <p className={styles.detailsPrice}>Prix: <span>{detailsProduct.price}€</span></p>
                    </div>

                    <div className={styles.detailsBtn}>
                        <Link to="/products"><button>Retour</button></Link>
                        <button onClick={() => props.AddToCart(detailsProduct._id)}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    item:state.item
})

export default connect(mapStateToProps, {getItems, AddToCart}) (Details);