import React from 'react';
import Marquee from '../Marquee';

import styles from '../../Styles/Beauté.module.css'

const Beaute = () => {
    return (
        <>
        <Marquee name="Beauté" />
        <section className={styles.containerBeauté}>
            <p>Page Beauté - Aucun produit pour l'instant</p>
        </section>
        </>
    );
};

export default Beaute;