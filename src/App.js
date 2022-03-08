import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import Huile from './components/Huile';
import Cart from '../src/components/Cart';
import Thé from './components/Thé';
import Details from '../src/components/Details';
import Autre from '../src/components/Autre';
import Livraison from '../src/components/Livraison';
import { Provider } from 'react-redux';
import store from './components/store'
import Footer from './components/Footer';
import CGV from './components/CGV';
import FAQ from './components/FAQ';
import NousContacter from './components/NousContacter';
import SeConnecter from './components/SeConnecter';
import HuileAntiStress from './components/Page/HuileAntiStress';
import HuileCalmante from './components/Page/HuileCalmante';
import HuileRelaxante from './components/Page/HuileRelaxante';
import HuileAntiDouleur from './components/Page/HuileAntiDouleur';

function App() {
  return (
    <Provider store={store}>
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Huile" element={<Huile />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/Thé" element={<Thé />}/>
        <Route path="/details/:id" element={<Details />}/>
        <Route path="/Autre" element={<Autre />}/>
        <Route path="/livraison" element={<Livraison />}/>
        <Route path="/CGV" element={<CGV />}/>
        <Route path="/FAQ" element={<FAQ />}/>
        <Route path="/Nous-contacter" element={<NousContacter />}/>
        <Route path="/Se-connecter" element={<SeConnecter />}/>
        <Route path="/HuileAntiStress" element={<HuileAntiStress />} />
        <Route path="/HuileCalmante" element={<HuileCalmante />} />
        <Route path="/HuileRelaxante" element={<HuileRelaxante />} />
        <Route path="/HuileAntiDouleur" element={<HuileAntiDouleur />} />
      </Routes>
      {/* <Footer /> */}
    </>
    </Provider>
  );
}

export default App;
