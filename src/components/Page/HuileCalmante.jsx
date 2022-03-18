import React from 'react';
import Links from '../Links';
import { connect } from 'react-redux';
import { getItems, AddToCart, bannerClose} from '../actions/itemActions';
import Product from '../Product';

import styles from "../../Styles/SubCategory.module.css";

const HuileCalmante = (props) => {

    const {items} = props.item;

    const AddToCart = (id) => {
        props.AddToCart(id);
    }

    return (
        <>
            <Links page_category="Huile" title="Huile Calmante"/>

            {/* <h2>AUTRE PRODUCT</h2> */}

            <div className={styles.containerSubCategory}>

                {/* <div className="products-center"> */}
                    {items.filter((elt) => elt.page_category === "Huile" && elt.url === "HuileCalmante").map((product) => <Product key={product._id} data={product} AddToCart={() => AddToCart(product._id)} isInCart={product.isInCart}/>)}
                {/* </div> */}
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    item:state.item
})

export default connect(mapStateToProps, {getItems, AddToCart, bannerClose}) (HuileCalmante);