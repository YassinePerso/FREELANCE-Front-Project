import React from "react";
import { Link } from "react-router-dom";

import styles from "../Styles/Links.module.css";

const Links = (props) => {
  return (
    <section className={styles.containerLinks}>
      <div className={styles.links}>
        Menu {">"} <Link to={`/${props.page}`}>{props.page}</Link> {">"}
        <Link to={`/${props.page}/${props.id}`}>{props.product}</Link>
      </div>
    </section>
  );
};

export default Links;
