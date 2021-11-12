import 'bootstrap/dist/css/bootstrap.css';
import react, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Header from './components/header';
import NewCustomer from './pages/newCustomer';


function App() {


  return (
    <div className="container">
      <Header/>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/pages/Home" element={<Home />}/>
          <Route path="/pages/newCustomer" element={<NewCustomer/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
