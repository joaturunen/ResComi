import 'bootstrap/dist/css/bootstrap.css';
import react, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Header from './components/header';


function App() {


  return (
    <div className="container">
      <Header/>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/pages/Home" />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
