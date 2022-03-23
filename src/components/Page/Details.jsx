

import { Link, useParams } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { getItems, AddToCart } from "../../components/actions/itemActions";

import styles from "../../Styles/Details.module.css";
import Links from "../../components/Links";
import Accordion from "../Accordion";
import Slider from "../Slider";

const Details = (props) => {
  
  
  const { id } = useParams();
  let detailsProduct = props.item.items.find((item) => item._id === parseInt(id));


  return (
    <>
      <div className={styles.details}>
        <div className={styles.insideContainerDetails}>
          <div className={styles.detailsBtn}>
            <div className={styles.buttonGridDetails}>
              <p>{detailsProduct.prix}0€</p>
            </div>
            <div className={styles.buttonGridDetails}>
              <button onClick={() => props.AddToCart(detailsProduct._id)}>
                Ajouter au panier
              </button>
            </div>
          </div>

          <Links
            page_category={detailsProduct.page_category}
            title={detailsProduct.title}
            product={`${props.detailsTitle}`}
          />

          <section className={styles.detailsCenter}>


            <div className={styles.detailsImg}>
              <Slider />
            </div>


            <section className={styles.detailsInfoGrid}>


              <Accordion name="DESCRIPTION" description={detailsProduct.description}/>
              <Accordion name="COMPOSITION" description={detailsProduct.composition}/>
              <Accordion name="CONTENANCE" description={detailsProduct.contenance}/>
              <Accordion name="TAUX" description={detailsProduct.taux}/>
              <Accordion name="GOUT" description={detailsProduct.gout}/>
              <Accordion name="UTILISATION" description={detailsProduct.utilisation}/>
              <Accordion name="PROVENANCE" description={detailsProduct.Provenance}/>
              
            </section>
          </section>
          <section className={styles.containerLinkRetour}>
            <button>
              <Link to={`/${detailsProduct.page_category}`} className={styles.linkRetour}>
                Retour
              </Link>
            </button>
          </section>

        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, AddToCart })(Details);
