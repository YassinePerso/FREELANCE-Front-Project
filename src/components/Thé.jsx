import React from 'react';
import '../Styles/Products.css';
import { connect } from 'react-redux';
import { getItems, AddToCart, bannerClose} from './actions/itemActions';
import Product from './Product';
import Marquee from './Marquee';


const Thé = (props) => {
 
    // useEffect(() => {
    //     props.getItems();
    // }, [])

    // AddToCart
    const AddToCart = (id) => {
        props.AddToCart(id);

        // setTimeout(() => {
        //     props.bannerClose();
        // }, 2000)
    }

    const {items} = props.item;

    
    return (
        <div className="products">
            <Marquee  name="Autre"/>


            <div className="inside-container">
                <div className="products-center">
                    {items.filter((elt) => elt.page_category === "Thé" && elt.url === "urlThé").map((product) => <Product key={product._id} data={product} AddToCart={() => AddToCart(product._id)} isInCart={product.isInCart}/>)}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    item:state.item
})
export default connect(mapStateToProps, {getItems, AddToCart, bannerClose}) (Thé);