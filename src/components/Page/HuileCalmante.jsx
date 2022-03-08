import React from 'react';
import Links from '../Links';
import { connect } from 'react-redux';
import { getItems, AddToCart, bannerClose} from '../actions/itemActions';
import Product from '../Product';

const HuileCalmante = (props) => {

    const {items} = props.item;

    const AddToCart = (id) => {
        props.AddToCart(id);
    }

    return (
        <div className="products">
            <Links page="Huile" id="Huile Calmante"/>

            {/* <h2>AUTRE PRODUCT</h2> */}

            <div className="inside-container">
                {/* <h3>Products</h3> */}
                <div className="products-center">
                    {items.filter((elt) => elt.page_category === "Huile" && elt.url === "HuileCalmante").map((product) => <Product key={product._id} data={product} AddToCart={() => AddToCart(product._id)} isInCart={product.isInCart}/>)}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    item:state.item
})

export default connect(mapStateToProps, {getItems, AddToCart, bannerClose}) (HuileCalmante);