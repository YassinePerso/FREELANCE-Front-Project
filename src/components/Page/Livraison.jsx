import React from 'react';
import Marquee from '../Marquee';

import styles from '../../Styles/Livraison.module.css'

const Livraison = () => {
    return (
        <>
        <Marquee name="Livraison" />
        <section className={styles.containerLivraison}>
            <p>Page Beauté - Aucun produit pour l'instant</p>
        </section>
        </>
    );
};

export default Livraison;