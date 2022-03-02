import React, { useState } from "react";
import { Link } from "react-router-dom";

import cart from "../images/chariot.png";
import '../Styles/Nav.css';
import { connect } from "react-redux";
import { toggleNav, closeNavbar } from "./actions/itemActions";

const Navbar = (props) => {

  // const [ toggle, setToggle ] = useState(false);

  // const toggleNav = () => {
  //   setToggle(!toggle)
  // }

  return (
    <div className="navbar">
      <nav className="nav">
        <div className="logoBtn">
          <Link to="/">
            <p>
              LOGO
            </p>
          </Link>

          <div className="shopping-icon mobile-shopping">
            <Link to="/cart">
            <img src={cart} alt="cart" />
            <span>{props.item.cart.length}</span>
            </Link>
          </div>

          <div className="hamburger" onClick={props.toggleNav}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <div className="links">
            <div className={props.item.cart.isOpen ? "new-links-navigation" : "links-navigation"}>
              <div className="nav-btn">
                <span onClick={props.toggleNav}>X</span>
              </div>
            </div>

            <ul className="links-nav" onClick={props.closeNavbar}>
              <li>
                <Link to="/about">Thé</Link>
              </li>
              <li>
                <Link to="/products">Huile</Link>
              </li>
              <li>
                <Link to="/contact">Autre</Link>
              </li>
              <li>
                <Link to="/livraison">Livraison</Link>
              </li>
            </ul>
          </div>
        </div>

        <Link to="/cart">
          <div className="shopping-cart">
            <img src={cart} alt="cart" />
            <span>{props.item.cart.length}</span>
          </div>
        </Link>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  item:state.item
})

export default connect(mapStateToProps, {toggleNav, closeNavbar}) (Navbar);

