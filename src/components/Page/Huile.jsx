import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Styles/FirstPage.module.css';
import Marquee from '../Marquee';

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

                                    <div className={styles.divSpanCat}>
                                        <span>{elt.title}</span>
                                    </div>

                                    <div className={styles.divImgCat}>
                                        <img src={elt.img} alt="img" />
                                    </div>

                                </section>
                            </Link>

                        </>
                    );
                })}
            </div>
            <section className={styles.retourFirstPage}>
                <Link to="">
                    <button>
                        Retour
                    </button>
                </Link>
            </section>
            </>
    );
};


export default Huile;