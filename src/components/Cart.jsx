import React from 'react';
// import { Data } from './Data'
import trash from '../images/delete.png';
import '../Styles/Cart.css';
import { connect } from 'react-redux';
import { deleteItem, increaseItem, decreaseItem, getTotals } from '../components/actions/itemActions'

const Cart = (props) => {


  const { cart } = props.item

  // useEffect(() => {
  //   props.getTotals();
  // }, [])


    return (
        <div className='cart'>
          <div className='inside-container'>
            {cart.length === 0 ?
            <>
            <h3>Votre panier est vide.</h3>
            </>
            :
            <>
            <h3>Panier</h3>
            <div className='cart-center'>
              <div className="cart-info">
                {cart.map(cart => (
                  <div className="single-cart" key={cart._id}>
                    <div className="cart-img">
                      <img src={cart.img} alt="présentation" />
                    </div>

                    <div className="cart-title sameItem">
                      <h4>{cart.title}</h4>
                    </div>

                    {/* TAUX  */}
                    <p>{cart.taux}</p>
                    <p>{cart.contenance}</p>
                    <p>{cart.gout}</p>

                    <div className="counting">
                      <button onClick={() => {
                          props.decreaseItem(cart._id);
                          props.getTotals();
                      }}>-</button>
                      <button>{cart.count}</button>
                      <button onClick={() => {
                          props.increaseItem(cart._id);
                          props.getTotals();
                      }}>+</button>
                    </div>

                    <div className="price">
                      <h4>{cart.prix * cart.count}€</h4>
                    </div>

                    <div className="delete-item">
                      <img src={trash} className="fa-trash" alt="delete icon" onClick={() => {
                          props.deleteItem(cart._id);
                          props.getTotals();
                      }} />
                    </div>
                  </div>
                ))}
              </div>
              {/* cart results */}
              <div className="cart-results">
                <h3>Total :</h3>

                {/* <h4>Frais de livraison: {props.item.total >= 90 ? <span>Gratuit</span> : `+${props.item.shipping}`}</h4> */}
                <h4>Frais de livraison:<span>Gratuit</span></h4>
                {/* <h4>Prix: <span>WIP</span></h4> */}
                <h4>Prix total: <span>{props.item.total}€</span></h4>
              </div>
            </div>
            </>
            }
          </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
  
  item:state.item

})

export default connect(mapStateToProps, {deleteItem, increaseItem, decreaseItem, getTotals})(Cart);