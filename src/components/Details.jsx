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
import Accordion from "./Accordion";

const Details = (props) => {
  
  // console.log(useParams().id);
  
  const { id } = useParams();
  let detailsProduct = props.item.items.find((item) => item._id === parseInt(id));

  // const [theForm, setTheForm] = useState(false);

  // function handleClickForm() {
  //   setTheForm(!theForm);
  // }

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
            {/* GRID -- 2 */}
            <section className={styles.detailsInfoGrid}>
              {/* <div className={styles.wrapperGridDetailsInfo}> */}

              <h4 className={styles.detailsTitle}>{detailsProduct.title}</h4>


              {/* <p className={styles.detailsTextInfo}>
                {detailsProduct.description}
              </p> */}<Accordion name="Description" description={detailsProduct.description}/>

              {/* <p className={styles.detailsTextInfo}>
                {detailsProduct.composition}
              </p> */}<Accordion name="Composition" description={detailsProduct.composition}/>

              {/* <p className={styles.detailsTextInfo}>
                {detailsProduct.contenance}
              </p> */}<Accordion name="contenance" description={detailsProduct.contenance}/>

              {/* <p className={styles.detailsTextInfo}>
                {detailsProduct.taux}
              </p> */}<Accordion name="Taux" description={detailsProduct.taux}/>

              {/* <p className={styles.detailsTextInfo}>
                {detailsProduct.gout}
              </p> */}<Accordion name="Goût" description={detailsProduct.gout}/>

              {/* <p className={styles.detailsTextInfo}>
                {detailsProduct.utilisation}
              </p> */}<Accordion name="Utilisation" description={detailsProduct.utilisation}/>

              {/* <p className={styles.detailsTextInfo}>
                {detailsProduct.Provenance}
              </p> */}<Accordion name="Provenance" description={detailsProduct.Provenance}/>
              
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
