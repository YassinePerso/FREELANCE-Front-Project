import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from '../src/components/Navbar';
import Home from './components/Page/Home';
import The from './components/Page/The';
import Huile from './components/Page/Huile';
import Beaute from './components/Page/Beaute';
import Autre from '../src/components/Page/Autre';
import Livraison from '../src/components/Page/Livraison';
import Cart from '../src/components/Page/Cart';
import Details from '../src/components/Page/Details';
import { Provider } from 'react-redux';
import store from './components/store'
import Footer from './components/Footer';
import CGV from './components/Page/CGV';
import FAQ from './components/Page/FAQ';
import NousContacter from './components/Page/NousContacter';
import SeConnecter from './components/Page/SeConnecter';
import HuileAntiStress from './components/Page/HuileAntiStress';
import HuileCalmante from './components/Page/HuileCalmante';
import HuileRelaxante from './components/Page/HuileRelaxante';
import HuileAntiDouleur from './components/Page/HuileAntiDouleur';
import Decouverte from './components/Page/Decouverte';



function App() {



  return (
    <Provider store={store}>
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/The" element={<The />}/>
        <Route path="/Huile" element={<Huile />} />
        <Route path="/Beaute" element={<Beaute />} />
        <Route path="/Autre" element={<Autre />}/>
        <Route path="/Livraison" element={<Livraison />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/details/:id" element={<Details />}/>
        <Route path="/CGV" element={<CGV />}/>
        <Route path="/FAQ" element={<FAQ />}/>
        <Route path='/Decouverte' element={<Decouverte />} />
        <Route path="/Nous-contacter" element={<NousContacter />}/>
        <Route path="/Se-connecter" element={<SeConnecter />}/>
        <Route path="/HuileAntiStress" element={<HuileAntiStress />} />
        <Route path="/HuileCalmante" element={<HuileCalmante />} />
        <Route path="/HuileRelaxante" element={<HuileRelaxante />} />
        <Route path="/HuileAntiDouleur" element={<HuileAntiDouleur />} />
      </Routes>
      <Footer />
    </>
    </Provider>
  );
}

export default App;
