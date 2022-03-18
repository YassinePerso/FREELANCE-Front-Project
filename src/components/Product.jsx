import React from "react";
import { Link } from "react-router-dom";

import styles from "../Styles/Products.module.css";

const Product = (props) => {
  const { data, AddToCart } = props;

  return (
      <div className={styles.product}>

        <div className={styles.productDetails}>
          <span>{data.title}</span>
        </div>

        <div className={styles.boxImg}>
          <Link to={`/details/${data._id}`}>
            <img src={data.img} alt="produit" />
          </Link>
        </div>

        <div className={styles.containerTauxProduct}>
           <span className={styles.y}>{data.taux}</span>
        </div>

        <div className={styles.containerContenanceProduct}>
           <span className={styles.y}>{data.contenance}</span>
        </div>

        <div className={styles.containerGoutProduct}>
           <span className={styles.y}>{data.gout}</span>
        </div>

        <div className={styles.containerPrixProduct}>
           <span className={styles.y}>{data.prix}0€</span>
        </div>

        <div className={styles.productbtn}>
          <button onClick={AddToCart}>Ajouter au panier</button>
        </div>
        
      </div>
  );
};

export default Product;
