import React from 'react';
import trash from '../../images/delete.png';
import '../../Styles/Cart.css';
import { connect } from 'react-redux';
import { deleteItem, increaseItem, decreaseItem, getTotals } from '../../components/actions/itemActions'
import { Link } from 'react-router-dom';

const Cart = (props) => {


  const { cart } = props.item

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
            <div style={{height:"100vh"}}>
            <h3>Votre panier est vide.</h3>
            </div>
            </>
            :
            <>
            <div className='cart-center'>
              <div className="cart-info">
                {cart.map(cart => (
                  <>
                  <div className='resecage'>
                  <div className="single-cart" key={cart._id}>
                    <div className="cart-img">
                      <img src={cart.img} alt="présentation" />
                    </div>

                    <div className="cart-title sameItem">
                      <h4>{cart.title}</h4>
                    </div>

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
                  </div>


                  

                  <div className="single-cart-mobile" key={cart._id}>


                    <section className="gridCartMobileImg">
                      <div className="cart-img-mobile">
                        <img src={cart.img} alt="présentation" />
                      </div>
                    </section>


                    <section className="gridCartMobileInfos">
                        <div className="cart-title-mobile sameItem">
                          <h4>{cart.title}</h4>
                        </div>

                        <div className="fontChange-yzx-mobile">
                          <p>CONTENANCE: {cart.contenance}</p>
                        </div>

                        <div className="counting-mobile">
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

                        <div className="price-mobile">
                          <h4>{cart.prix}0€</h4>
                        </div>

                        <div className="fontChange-yzx-mobile">
                          <p>{cart.taux}</p>
                        </div>




                        <div className="delete-item-mobile">
                          <span onClick={() => {
                              props.deleteItem(cart._id);
                              props.getTotals();
                          }}>
                            SUPPRIMER
                            </span>
                        </div>
                    </section>
                    
                  </div>



                </>
                ))}

            <section>
              <div className="cart-results">
                <h3>Total :</h3>
                <h4>Frais de livraison:<span>Gratuit</span></h4>
                <h4>Prix total: <span> {props.item.total}€</span></h4>
              </div>
            </section>

            <section className="sectionMethodeDePaiement">
              <span>
                 METHODES DE PAYEMENT
              </span>
            </section>

            <section className="sectionRetour">
              <button>
                 Retour
              </button>
            </section>

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