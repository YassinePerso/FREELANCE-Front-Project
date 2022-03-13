import React from 'react';
// import { Data } from './Data'
import trash from '../../images/delete.png';
import '../../Styles/Cart.css';
import { connect } from 'react-redux';
import { deleteItem, increaseItem, decreaseItem, getTotals } from '../../components/actions/itemActions'
import { Link } from 'react-router-dom';

const Cart = (props) => {


  const { cart } = props.item

  // useEffect(() => {
  //   props.getTotals();
  // }, [])

  // const { pageC } = useParams();
  let detailsCategory = props.item.items.find((item) => item.page_category);


    return (
        <div className='cart'>
          <section className="containerButtonCart-jz-ts">

            <div className="containerButtonContinuerDeShopper">
              <Link to={`/${detailsCategory.page_category}`} >
                <button>
                  Continuer de shopper
                </button>
              </Link>
            </div>
            <div className="containerButtonCommander">
              <Link to="/Achat" >
                <button>
                  Commander
                </button>
              </Link>
            </div>

          </section>

          <div className='inside-container-remake'>
          {cart.length === 0 ?
            <>
            <h3>Votre panier est vide.</h3>
            </>
            :
            <>
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
                    <div className="fontChange-yzx">
                      <p>{cart.taux}</p>
                    </div>
                    <div className="fontChange-yzx">
                      <p>{cart.contenance}</p>
                    </div>
                    <div className="fontChange-yzx">
                      <p>{cart.gout}</p>
                    </div>

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
                      <h4>{cart.prix}0€</h4>
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