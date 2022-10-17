import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../../components/actions/itemActions";
import { Link } from "react-router-dom";


import "../../Styles/Achat.css";



const Achat = (props) => {
  const { cart } = props.item;

  return (
    <div className="cart-achat">
      <section className="containerHeaderAchat-yr">
        <span>PANIER</span>
      </section>

      <div className="inside-container-remake-achat">
        <section className="containerThreeButtonsPageAchat">
          <button>CREER MON COMPTE</button>
          <button>CLIENT ENREGISTRE</button>
          <button>CONTINUER EN TANT QU'INVITE</button>
        </section>
        {cart.length === 0 ? (
          <>
            <h3>Vous avez {cart.length} produit dans votre panier.</h3>
          </>
        ) : (
          <>
            <div className="cart-info-achat">
              {cart.map((cart) => (
                <>
                  <div className="single-cart-achat" key={cart._id}>
                    <div className="cart-img-achat">
                      <img src={cart.img} alt="présentation" />
                    </div>

                    <div className="achat-title-achat">
                      <h4>{cart.title}</h4>
                    </div>

                    <div className="fontChange-yzx-achat">
                      <p>
                        Taux de CBD:{" "}
                        <span className="boldSpan">{cart.taux}</span>
                      </p>
                    </div>

                    <div className="counting-achat">
                      <p>
                        Quantité: <span className="boldSpan">{cart.count}</span>
                      </p>
                    </div>

                    <div className="price-achat">
                      <h6>
                        Prix: <span className="boldSpan">{cart.prix}0€</span>
                      </h6>
                    </div>
                  </div>




                  
                  <div className="single-cart-achat-phone" key={cart._id}>
                    <div className="cart-img-achat-phone">
                      <img src={cart.img} alt="présentation" />
                    </div>

                    <section className="gridPhoneMobileFirst">
                      <div className="achat-title-achat-phone">
                        <h4>{cart.title}</h4>
                      </div>

                      <div className="counting-achat-phone">
                        <p>
                          Quantité:{" "}
                          <span className="boldSpan">{cart.count}</span>
                        </p>
                      </div>

                      <div className="fontChange-yzx-achat-phone">
                        <p>
                          Taux de CBD:{" "}
                          <span className="boldSpan">{cart.taux}</span>
                        </p>
                      </div>

                      <div className="price-achat-phone">
                        <h6>
                          Prix: <span className="boldSpan">{cart.prix}0€</span>
                        </h6>
                      </div>
                    </section>
                  </div>
                </>
              ))}
            </div>

            <section className="retourButtonAchat">
              <Link to="/cart">
                <button>Retour</button>
              </Link>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, {deleteItem})(Achat);
