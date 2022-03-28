
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

	const dataSearchBar = [
		 "Huile Calmante 1",
		 "Huile Calmante 2",
		 "Huile Calmante 3",
		 "Huile Relaxante 1",
		 "Huile Relaxante 2",
		 "Huile Relaxante 3",
		 "Huile Anti-Stress",
		 "Huile Anti-douleur 1",
		 "Huile Anti-douleur 2",
		 "Huile Anti-douleur 3",
		 "Infusion CBD Vitalité",
		 "Infusion CBD Digestion ",
		 "Thé Anti-Stress",
		 "Gummies CBD 1",
		 "Gummies CBD 2",
		 "Bonbons colorés"
	  ]

	const urlSearchBar = [
		 1,
		 2,
		 3,
		 4,
		 5,
		 6,
		 7,
		 8,
		 9,
		 10,
		 11,
		 12,
		 13,
		 14,
		 15,
		 16
	  ]



  return (
    <nav className="navbar">
      <section className="gridNavBar">

        <div className="navBarGridLogo">
          <Link to="/" className="nav-logo">
            LOGO
          </Link>
        </div>

        <div className="navBarGridSearchBar">
          <Searchbox lang={dataSearchBar} url={urlSearchBar}/>
        </div>

      <div className="navBarGridIconCart">
        <Link to="/cart">
            <div className="shopping-cart">
              <img src={cart} alt="cart" />
              <span>{props.item.cart.length}</span>
            </div>
        </Link>
      </div>

      <div className="navBarGridIconMenu">
        <div onClick={handleClick} className="nav-icon">
          {open ? <FiX /> : <FiMenu />}
        </div>
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

