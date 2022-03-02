// import React, { useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// // import { Data } from './Data';
// import { connect } from 'react-redux';
// import { getItems, AddToCart } from '../components/actions/itemActions';

// // import '../Styles/Details.css';
// import styles from '../Styles/Details.module.css';

// const Details = (props) => {

//     const {id} = useParams();

//     console.log(useParams().id);
//     // console.log("Data not found");

//     let detailsProduct = props.item.items.find(item => item._id === Number(id));

//     return (
//         <div className={styles.details}>
//             <div className={styles.insideContainer}>
//                 {/* <h3>Fiche produit</h3> */}
//                 <div className={styles.detailsCenter}>
//                     <div className={styles.detailsImg}>
//                         <img src={`/${detailsProduct.img}`} alt="product" />
//                     </div>

//                     <div className={styles.detailsinfo}>
//                         <h4 className={styles.detailsTitle}>{detailsProduct.title}</h4>
//                         <h4 className={styles.detailsTitle}>{detailsProduct.description}</h4>
//                         <p className={styles.detailsTextInfo}>{detailsProduct.composition}</p>
//                         <p className={styles.detailsTextInfo}>{detailsProduct.contenance}</p>
//                         <p className={styles.detailsTextInfo}>{detailsProduct.utilisation}</p>
//                         <p className={styles.detailsPrice}>Prix: <span>{detailsProduct.prix}€</span></p>
//                     </div>

//                     <div className={styles.detailsBtn}>
//                         <Link to="/products"><button>Retour</button></Link>
//                         <button onClick={() => props.AddToCart(detailsProduct._id)}>Add to cart</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const mapStateToProps = (state) => ({
//     item:state.item
// })

// export default connect(mapStateToProps, {getItems, AddToCart}) (Details);

///////////////    ------------------------------------------------------------------    /////////////////////

import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
// import { Data } from './Data';
import { connect } from "react-redux";
import { getItems, AddToCart } from "../components/actions/itemActions";

import "../Styles/Details.module.css";
import styles from "../Styles/Details.module.css";
import Links from "../components/Links";
import { getByTitle } from "@testing-library/react";

const Details = (props) => {
  const { id } = useParams();
  const { pageCategory } = useParams();
  const { title } = useParams();

  console.log(useParams().id);

  const {contenance} = props.item.items.contenance;

  let detailsProduct = props.item.items.find((item) => item._id === Number(id));

  let detailsPageCategory = props.item.items.find(
    (item) => item.page_category === Number(pageCategory, title)
  );

  let detailsTitle = props.item.items.find(
    (item) => item.title === Number(title)
  );

  const [theForm, setTheForm] = useState(false);

  function handleClickForm() {
    setTheForm(!theForm);
  }

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
            index={`${props.detailsProduct}`}
            page={`${props.detailsPageCategory}`}
            id={`${props.detailsProduct}`}
            product={`${props.detailsTitle}`}
          />
          {/* LINKS component -- END*/}

          {/* GRID PRODUCT */}
          <section className={styles.detailsCenter}>
            {/* GRID -- 1 */}
            <div className={styles.detailsImg}>
              <img src={`/${detailsProduct.img}`} alt="product" />
            </div>
            {/* CAROUSEL */}
            {/* <div class="slideshow-container">
                <div class="first-carousel">
                  <div class="slide">
                    <img src={`/${detailsProduct.img[0]}`} alt="" />
                  </div>
                  <div class="slide">
                    <img src={`/${detailsProduct.img[1]}`} alt="" />
                  </div>
                  <div class="slide">
                    <img src={`/${detailsProduct.img[2]}`} alt="" />
                  </div>
                  <div class="slide">
                    <img src={`/${detailsProduct.img[3]}`} alt="" />
                  </div>
                </div>
              </div> */}
            {/* CAROUSEL */}

            {/* GRID -- 2 */}
            <section className={styles.detailsInfoGrid}>
              {/* <div className={styles.wrapperGridDetailsInfo}> */}

              {/* DROPDOWN */}

              {/* DROPDOWN */}

              <h4 className={styles.detailsTitle}>{detailsProduct.title}</h4>
              <h4 className={styles.detailsTitle}>
                {detailsProduct.description}
              </h4>

              <p className={styles.detailsTextInfo}>
                {detailsProduct.contenance}
              </p>
                  {/* {contenance.map(() => {
                    return (
                  
                      )
                      for (let i = 0; i < contenance.length; i++ ) {
                        if()
                      }
                   }
                  }
                 */}
                <option value={detailsProduct.contenance}>{detailsProduct.contenance}</option>

              <p className={styles.detailsTextInfo}>
                {detailsProduct.utilisation}
              </p>
              {/* </div> */}
            </section>
          </section>
          <section className={styles.containerLinkRetour}>
            <button>
              <Link to="/products" className={styles.linkRetour}>
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
