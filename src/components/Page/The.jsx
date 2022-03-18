import React from 'react';
// import '../../Styles/Products.css';
import { connect } from 'react-redux';
import { getItems, AddToCart, bannerClose} from '../actions/itemActions';
import ProductThe from '../ProductThe';
import Marquee from '../Marquee';

import styles from "../../Styles/SubCategory.module.css";


const The = (props) => {
    const AddToCart = (id) => {
        props.AddToCart(id);
    }

    
    const {items} = props.item;

    
    return (
        <>
            <Marquee  name="Thé"/>
        <>
            <div className={styles.containerSubCategory}>
                {/* <div className="products-center"> */}
                    {items.filter((elt) => elt.page_category === "The" && elt.url === "urlThé").map((product) => <ProductThe key={product._id} data={product} AddToCart={() => AddToCart(product._id)} isInCart={product.isInCart}/>)}
                {/* </div> */}
            </div>
        </>
        </>
    );
};

const mapStateToProps = (state) => ({
    item:state.item
})

export default connect(mapStateToProps, {getItems, AddToCart, bannerClose}) (The);