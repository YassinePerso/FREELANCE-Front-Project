import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { data, AddToCart, isInCart } = props;

  return (
    <main className="containerProductComponent-yetz">
      <div className="product">
        <div className="product-details">
          <h3>{data.title}</h3>
        </div>
        <div className="box-img">
          <Link to={`/details/${data._id}`}>
            <img src={data.img} alt="produit" />
          </Link>
        </div>
        <h3>{data.taux}</h3>
        <h3>{data.contenance}</h3>
        <h3>{data.gout}</h3>
        <h3>{data.prix}0€</h3>
        {/* <div className="box-img">
                <Link to={`/subCategory/${data.url}}`}>
                    <img src={data.img} alt="produit" />
                </Link>
            </div> */}

        <div className="product-btn">
          <button onClick={AddToCart}>Ajouter au panier</button>
        </div>
        {/* <div className={isInCart ? "inCart newInCart" : "inCart"}>
                <span>Déjà dans le Panier</span>
            </div> */}
      </div>
    </main>
  );
};

export default Product;
