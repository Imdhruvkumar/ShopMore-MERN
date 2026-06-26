import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './styles/global.css';
import Disclamer from './pages/Disclamer';
import ReturnPolicy from './pages/ReturnPolicy';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';



function App(){
  return(
    <Router>
      <Navbar/>
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/disclaimer" element={<Disclamer/>}/>
        <Route path="/return-policy" element={<ReturnPolicy/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
