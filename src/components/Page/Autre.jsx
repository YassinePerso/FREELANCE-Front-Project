import React from 'react';
import { connect } from 'react-redux';
import { getItems, AddToCart } from '../actions/itemActions';
import Product from '../Product';
import Marquee from '../Marquee';
import styles from "../../Styles/SubCategory.module.css";


const Autre = (props) => {
 
    const AddToCart = (id) => {
        props.AddToCart(id);
    }

    const {items} = props.item;

    
    return (
        <>
            <Marquee  name="Autre"/>


            <div className={styles.containerSubCategory}>
                    {items.filter((elt) => elt.page_category === "Autre").map((product) => <Product key={product._id} data={product} AddToCart={() => AddToCart(product._id)} isInCart={product.isInCart}/>)}
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    item:state.item
})
export default connect(mapStateToProps, {getItems, AddToCart}) (Autre);