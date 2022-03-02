import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import Products from './components/Products';
import Cart from '../src/components/Cart';
import About from '../src/components/About';
import Details from '../src/components/Details';
import Contact from '../src/components/Contact';
import Livraison from '../src/components/Livraison';
import { Provider } from 'react-redux';
import store from './components/store'
import Footer from './components/Footer';
import CGV from './components/CGV';
import FAQ from './components/FAQ';
import NousContacter from './components/NousContacter';
import SeConnecter from './components/SeConnecter';


function App() {
  return (
    <Provider store={store}>
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/details/:id" element={<Details />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/livraison" element={<Livraison />}/>
        <Route path="/CGV" element={<CGV />}/>
        <Route path="/FAQ" element={<FAQ />}/>
        <Route path="/Nous-contacter" element={<NousContacter />}/>
        <Route path="/Se-connecter" element={<SeConnecter />}/>
      </Routes>
      <Footer />
    </>
    </Provider>
  );
}

export default App;
