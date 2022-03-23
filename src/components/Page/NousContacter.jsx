import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import styles from '../../Styles/NousContacter.module.css';

const NousContacter = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
        <main className={styles.wrapperNousContacter}>
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Votre message a bien été envoyé</Modal.Body>
        <Modal.Body>Nous vous remercions </Modal.Body>
        <Modal.Body>A bientôt !</Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
        </form>
        </main>
    );
};

export default NousContacter;