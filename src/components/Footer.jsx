import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../Styles/Footer.module.css';


const Footer = () => {
    return (
        <>
        <section className={styles.containerFooter}>
            <li className={styles.footerLink}>
            <Link to="/CGV">CGV</Link>
            </li>
            <li className={styles.footerLink}>
            <Link to="/FAQ">FAQ</Link>
            </li>
            <li className={styles.footerLink}>
            <Link to="/Nous-contacter">Nous contacter</Link>
            </li>
            <li className={styles.footerLink}>
            <Link to="/Se-connecter">Se connecter</Link>
            </li>
        </section>
        </>
    );
};

export default Footer;