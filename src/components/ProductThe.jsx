import React from "react";
import { Link } from "react-router-dom";

import styles from "../Styles/ProductThe.module.css";

const ProductThe = (props) => {


  const { data, AddToCart } = props;

  return (
      <div className={styles.productThe}>

        <div className={styles.productDetailsThe}>
          <span>{data.title}</span>
        </div>

        <div className={styles.boxImgThe}>
          <Link to={`/details/${data._id}`}>
            <img src={data.img} alt="produit" />
          </Link>
        </div>

        <div className={styles.containerTauxProductThe}>
           <span className={styles.yThe}>{data.taux}</span>
        </div>

        <div className={styles.containerGoutProductThe}>
           <span className={styles.yThe}>{data.gout}</span>
        </div>

        <div className={styles.containerPrixProductThe}>
           <span className={styles.yThe}>{data.prix}0€</span>
        </div>

        <div className={styles.productbtnThe}>
          <button onClick={AddToCart}>Ajouter au panier</button>
        </div>
       
      </div>
  );
};

export default ProductThe;
