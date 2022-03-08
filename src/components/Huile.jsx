import React from 'react';
import { Link } from 'react-router-dom';
// import Product from './Product';
// import '../Styles/Products.css';
import styles from '../Styles/FirstPage.module.css';
import Marquee from './Marquee';

const Huile = (props) => {


    const huilePage = [
        {
            _id: 1,
            title: "Huile Calmante",
            img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
            url: "HuileCalmante"
        },
        {
            _id: 2,
            title: "Huile Relaxante",
            img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
            url: "HuileRelaxante"
        },
        {
            _id: 3,
            title: "Huile Anti-Stress",
            img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
            url: "HuileAntiStress"
        },
        {
            _id: 4,
            title: "Huile Anti-douleur",
            img: "https://assets.codepen.io/1159990/tokyo-tower.jpg",
            url: "HuileAntiDouleur"
        }
    ]

    
    return (
            <>
            <Marquee name="Huile" />
            <div className={styles.containerFirstPage}>
                {huilePage.map((elt) => {
                    return (
                        <>
                            <Link to={`/${elt.url}`}>
                                <section className={styles.containerProductsFirstPage}>
                                    <span>{elt.title}</span>
                                    <img src={elt.img} alt="img" />
                                </section>
                            </Link>
                        </>
                    );
                })}
            </div>
            </>
    );
};


export default Huile;