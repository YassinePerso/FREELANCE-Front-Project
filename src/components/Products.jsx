import React from 'react';
import Product from './Product';
// import { Data } from '../components/Data'
import '../Styles/Products.css';
import { connect } from 'react-redux';
import { getItems, AddToCart, bannerClose} from './actions/itemActions';
import Marquee from '../components/Marquee';

const Products = (props) => {


    // useEffect(() => {
    //     props.getItems();
    // }, [])

    //AddToCart
    const AddToCart = (id) => {
        props.AddToCart(id);

        setTimeout(() => {
            props.bannerClose();
        }, 2000)
    }

    const {items} = props.item;

    
    return (
        <div className="products">
            <Marquee  name="Huile"/>

            {/* <h2>HUILE PRODUCTS</h2> */}

            <div className="inside-container">
                {/* <h3>Products</h3> */}
                <div className="products-center">
                    {items.filter((elt) => elt.page_category === "Huile").map((product) => <Product key={product._id} data={product} AddToCart={() => AddToCart(product._id)} isInCart={product.isInCart}/>)}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({

    item:state.item

})

export default connect(mapStateToProps, {getItems, AddToCart, bannerClose}) (Products);