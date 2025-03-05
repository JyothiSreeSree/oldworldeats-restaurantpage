import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { CartProvider } from './context/CartContext';
import Home from './components/Home';
import BreakfastAndBrunch from './components/BreakfastAndBrunch'
import MainCourse from './components/MainCourse';
import Desserts from './components/Desserts';
import Drinks from './components/Drinks';
import Services from './components/Services';
import Contact from './components/Contact';
import Cart from './components/Cart';
import About from './components/About';
import Header from './components/Header';
// import Chatbot from './components/Chatbot';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'swiper/swiper-bundle.min.css';
import './App.css';

const App = () => {
  return (
    <>
    
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/breakfast" element={<BreakfastAndBrunch />} />
          <Route path="/maincourse" element={<MainCourse />} />
          <Route path="/deserts" element={<Desserts />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/chatbot" element={<Chatbot />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;