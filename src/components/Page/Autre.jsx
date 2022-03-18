import React from 'react';
// import '../../Styles/Products.css';
import { connect } from 'react-redux';
import { getItems, AddToCart } from '../actions/itemActions';
import Product from '../Product';
import Marquee from '../Marquee';
import styles from "../../Styles/SubCategory.module.css";


const Autre = (props) => {
 
    // useEffect(() => {
    //     props.getItems();
    // }, [])

    //AddToCart
    const AddToCart = (id) => {
        props.AddToCart(id);

        // setTimeout(() => {
        //     props.bannerClose();
        // }, 2000)
    }

    const {items} = props.item;

    
    return (
        <>
            <Marquee  name="Autre"/>


            <div className={styles.containerSubCategory}>
                {/* <div className="products-center"> */}
                    {items.filter((elt) => elt.page_category === "Autre").map((product) => <Product key={product._id} data={product} AddToCart={() => AddToCart(product._id)} isInCart={product.isInCart}/>)}
                {/* </div> */}
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    item:state.item
})
export default connect(mapStateToProps, {getItems, AddToCart}) (Autre);