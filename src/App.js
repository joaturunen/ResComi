import 'bootstrap/dist/css/bootstrap.css';
import react, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Header from './components/header';
import Kirjaudu from './sivut/kirjaudu';
import Koti from './sivut/koti';
import UusiAsiakas from './sivut/uusiAsiakas';
import Varasto from './sivut/varasto';


function App() {


  return (
    <div className="container">
      <Header/>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Kirjaudu />}/>
          <Route path="/sivut/koti" element={<Koti />}/>
          <Route path="/sivut/uusiAsiakas" element={<UusiAsiakas/>}/>
          <Route path="/sivut/varasto" element={<Varasto/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
