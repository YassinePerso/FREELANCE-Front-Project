
///////////////    ------------------------------------------------------------------    /////////////////////

import { Link, useParams } from "react-router-dom";
import React from "react";
// import { Data } from './Data';
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
              <p>{detailsProduct.prix}€</p>
            </div>
            <div className={styles.buttonGridDetails}>
              <button onClick={() => props.AddToCart(detailsProduct._id)}>
                Ajouter au panier
              </button>
            </div>
          </div>

          {/* LINKS component */}
          <Links
            page_category={detailsProduct.page_category}
            title={detailsProduct.title}
            product={`${props.detailsTitle}`}
          />
          {/* LINKS component -- END*/}

          {/* GRID PRODUCT */}
          <section className={styles.detailsCenter}>


            {/* GRID -- 1 */}
            <div className={styles.detailsImg}>
              {/* <img src={`/${detailsProduct.img}`} alt="product" /> */}
              <Slider />
            </div>


            {/* GRID -- 2 */}
            <section className={styles.detailsInfoGrid}>

              {/* <h4 className={styles.detailsTitle}>{detailsProduct.title}</h4> */}


              <Accordion name="DESCRIPTION" description={detailsProduct.description}/>
              <Accordion name="COMPOSITION" description={detailsProduct.composition}/>
              <Accordion name="CONTENANCE" description={detailsProduct.contenance}/>
              <Accordion name="TAUX" description={detailsProduct.taux}/>
              <Accordion name="GOUT" description={detailsProduct.gout}/>
              <Accordion name="UTILISATION" description={detailsProduct.utilisation}/>
              <Accordion name="PROVENANCE" description={detailsProduct.Provenance}/>
              
              {/* </div> */}
            </section>
          </section>
          <section className={styles.containerLinkRetour}>
            <button>
              <Link to={`/${detailsProduct.page_category}`} className={styles.linkRetour}>
                Retour
              </Link>
            </button>
          </section>

          {/* END -----  GRID PRODUCT */}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, AddToCart })(Details);
