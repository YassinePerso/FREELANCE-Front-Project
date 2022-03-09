import React from 'react';
import '../Styles/Products.css';
import { connect } from 'react-redux';
import { getItems, AddToCart, bannerClose} from './actions/itemActions';
import Product from './Product';
import Marquee from './Marquee';


const Thé = (props) => {
 
    const AddToCart = (id) => {
        props.AddToCart(id);
    }

    const {Thé} = props.item;

    
    return (
        <div className="products">
            <Marquee  name="Thé"/>


            <div className="inside-container">
                <div className="products-center">
                    {Thé.filter((elt) => elt.page_category === "Thé" && elt.url === "urlThé").map((product) => <Product key={product._id} data={product} AddToCart={() => AddToCart(product._id)} isInCart={product.isInCart}/>)}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    item:state.item
})

export default connect(mapStateToProps, {getItems, AddToCart, bannerClose}) (Thé);