import React from "react";
import { Link } from "react-router-dom";

import styles from "../Styles/Links.module.css";

const Links = (props) => {


  
  return (
    <section className={styles.containerLinks}>
      <div className={styles.links}>
        <Link to="/">
            MENU
        </Link>{">"}
        <Link to={`/${props.page_category}`}>
            {props.page_category}
        </Link>{">"}
        <Link to="">
          {props.title}
          </Link>
      </div>
    </section>
  );
};

export default Links;
