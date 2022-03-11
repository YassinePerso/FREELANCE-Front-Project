import React from 'react';
// import { Data } from './Data'
import '../../Styles/Achat.css';
import { connect } from 'react-redux';
import { deleteItem, increaseItem, decreaseItem, getTotals } from '../../components/actions/itemActions'
import { Link } from 'react-router-dom';

const Achat = (props) => {


  const { cart } = props.item

  // useEffect(() => {
  //   props.getTotals();
  // }, [])

  // const { pageC } = useParams();
  let detailsCategory = props.item.items.find((item) => item.page_category);


    return (
        <div className='cart'>

            <section className='containerHeaderAchat-yr'>
                <span>PANIER</span>
            </section>


          <div className='inside-container-remake'>
          {cart.length === 0 ?
            <>
            <h3>Vous avez {cart.length} produit dans votre panier.</h3>
            </>
            :
            <>
            <div className="cart-center-achat">
              <div className="cart-info-achat">
                {cart.map(cart => (
                  <div className="single-cart-achat" key={cart._id}>
                    <div className="cart-img-achat">
                      <img src={cart.img} alt="présentation" />
                    </div>

                    <div className="achat-title-achat">
                      <h4>{cart.title}</h4>
                    </div>

                    {/* TAUX  */}
                    <div className="fontChange-yzx-achat">
                      <p>Taux de CBD: {cart.taux}</p>
                    </div>
                   

                    <div className="counting-achat">
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

                    <div className="price-achat">
                      <h4>{cart.prix * cart.count}€</h4>
                    </div>

                    
                  </div>
                ))}
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

export default connect(mapStateToProps, {deleteItem, increaseItem, decreaseItem, getTotals})(Achat);


