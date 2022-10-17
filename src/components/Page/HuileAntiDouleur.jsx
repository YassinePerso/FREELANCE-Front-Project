import React from "react";
import Links from "../Links";
import { connect } from "react-redux";
import { getItems, AddToCart } from "../actions/itemActions";
import Product from "../Product";

import styles from "../../Styles/SubCategory.module.css";

const HuileAntiDouleur = (props) => {
  const { items } = props.item;

  const AddToCart = (id) => {
    props.AddToCart(id);
  };

  return (
    <>
      <Links page_category="Huile" title="Huile Anti-Douleur" />

      <div className={styles.containerSubCategory}>
        {items
          .filter(
            (elt) =>
              elt.page_category === "Huile" && elt.url === "HuileAntiDouleur")
          .map((product) => (
            <Product
              key={product._id}
              data={product}
              AddToCart={() => AddToCart(product._id)}
              isInCart={product.isInCart}
            />
          ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, AddToCart })(HuileAntiDouleur);
