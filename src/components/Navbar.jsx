
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi';
import cart from "../images/chariot.png";
import { connect } from "react-redux";
import '../Styles/Nav.css';
import Searchbox from "./Searchbox";

const Navbar = (props) => {

  const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	// function GoToCart() {
	// 	// eslint-disable-next-line no-restricted-globals
	// 	history.push('/Cart')
	// }

  return (
    <nav className="navbar">
      <section className="gridNavBar">

        <div className="navBarGridLogo">
          <Link to="/" className="nav-logo">
            Logo
          </Link>
        </div>

        <div className="navBarGridSearchBar">
          <Searchbox />
        </div>

      <div className="navBarGridIconMenu">
        <div onClick={handleClick} className="nav-icon">
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      <div className="navBarGridIconCart">
        <Link to="/cart">
            <div className="shopping-cart">
              <img src={cart} alt="cart" />
              <span>{props.item.cart.length}</span>
            </div>
        </Link>
      </div>

        </section>


			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/The" className="nav-link" onClick={closeMenu}>
						Thé
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/Huile" className="nav-link" onClick={closeMenu}>
						Huile
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/Beaute" className="nav-link" onClick={closeMenu}>
						Beauté
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/Autre" className="nav-link" onClick={closeMenu}>
						Autre
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/Livraison" className="nav-link" onClick={closeMenu}>
						Livraison
					</Link>
				</li>
			</ul>
		</nav>
  );
};

const mapStateToProps = (state) => ({
  item:state.item
})

export default connect(mapStateToProps) (Navbar);

