import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';


import styles from '../Styles/Footer.module.css';


const Footer = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  


    return (
        <>
        <section className={styles.containerFooter}>
            <li className={styles.footerLink}>
            <Link to="/CGV">CGV</Link>
            </li>
            <li className={styles.footerLink}>
            <Link to="/FAQ">FAQ</Link>
            </li>
            <li className={styles.footerLink} onClick={toggleModal}>
                <button className={styles.btnLiFooter}>
                    <Link to="#">Nous contacter</Link>
                </button>
            </li>
            {modal && (
                <div className={styles.modal}>
                <div onClick={toggleModal} className={styles.overlay}></div>
                <div className={styles.modalContent}>
             <form id={styles.contactForm}>
          <div className={styles.formGroup}>
            <input placeholder="First Name" type="name" className={styles.formControl} />
          </div>
          <div className={styles.formGroup}>
            <input placeholder="Last Name" type="name" className={styles.formControl} />
          </div>
          <div className={styles.formGroup}>
            <input placeholder="Email" type="email" className={styles.formControl} aria-describedby="emailHelp" />
          </div>
          <div className={styles.formGroup}>
            <textarea  placeholder="Message" className={styles.formControlMessage} rows="5"></textarea>
          </div>
          
      <Button className={styles.buttonEnvoyerMessage} onClick={handleShow}>
          Envoyer  
      </Button>

      <Modal show={show} onHide={handleClose} className={styles.modalReception}>
        
        <Modal.Body className={styles.modalBodyX} onClick={handleClose}>X</Modal.Body>
        <Modal.Body className={styles.modalBody}>Votre message a bien été envoyé</Modal.Body>
        <Modal.Body className={styles.modalBody}>Nous vous remercions </Modal.Body>
        <Modal.Body className={styles.modalBody}>A bientôt !</Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
        </form>
                    <button className={styles.closeModal} onClick={toggleModal}>
                    X
                    </button>
                </div>
                </div>
            )}
            <li className={styles.footerLink}>
            <Link to="/Se-connecter">Se connecter</Link>
            </li>
        </section>
        </>
    );
};

export default Footer;