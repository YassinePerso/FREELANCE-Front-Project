// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import cart from "../images/chariot.png";
// import '../Styles/Nav.css';
// import { connect } from "react-redux";
// import { toggleNav, closeNavbar } from "./actions/itemActions";

// const Navbar = (props) => {

//   // const [ toggle, setToggle ] = useState(false);

//   // const toggleNav = () => {
//   //   setToggle(!toggle)
//   // }

//   return (
//     <div className="navbar">
//       <nav className="nav">
//         <div className="logoBtn">
//           <Link to="/">
//             <p>
//               LOGO
//             </p>
//           </Link>

//           <div className="shopping-icon mobile-shopping">
//             <Link to="/cart">
//             <img src={cart} alt="cart" />
//             <span>{props.item.cart.length}</span>
//             </Link>
//           </div>

//           <div className="hamburger" onClick={props.toggleNav}>
//             <div className="bar"></div>
//             <div className="bar"></div>
//             <div className="bar"></div>
//           </div>

//           <div className="links">
//             <div className={props.item.cart.isOpen ? "new-links-navigation" : "links-navigation"}>
//             {/* /* ----------------------------------------------------------- */
//               /* <div className="nav-btn">
//                 <span onClick={props.toggleNav}>X</span>
//               </div> */
//               /* ----------------------------------------------------------- */}
//             </div>

//             <ul className="links-nav" onClick={props.closeNavbar}>
//               <li>
//                 <Link to="/Thé">Thé</Link>
//               </li>
//               <li>
//                 <Link to="/Huile">Huile</Link>
//               </li>
//               <li>
//                 <Link to="/Autre">Autre</Link>
//               </li>
//               <li>
//                 <Link to="/livraison">Livraison</Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <Link to="/cart">
//           <div className="shopping-cart">
//             <img src={cart} alt="cart" />
//             <span>{props.item.cart.length}</span>
//           </div>
//         </Link>
//       </nav>
//     </div> 
//   );
// };

// const mapStateToProps = (state) => ({
//   item:state.item
// })

// export default connect(mapStateToProps, {toggleNav, closeNavbar}) (Navbar);



/* ----------------------------------------------------------------------- */
/* ----------------------------------------------------------------------- */
/* ----------------------------------------------------------------------- */



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

	function GoToCart() {
		// eslint-disable-next-line no-restricted-globals
		history.push('/Cart')
	}

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

