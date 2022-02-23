import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import Products from '../src/components/Products';
import Cart from '../src/components/Cart';
import About from '../src/components/About';
import Details from '../src/components/Details';
import Contact from '../src/components/Contact';
import { Provider } from 'react-redux';
import store from './components/store'




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
      </Routes>
    </>
    </Provider>
  );
}

export default App;
