import 'bootstrap/dist/css/bootstrap.css';
import react, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Header from './components/header';
import Login from './pages/login';
import Home from './pages/home';
import NewCustomer from './pages/newCustomer';
import Warehouse from './pages/warehouse';
import Search from './pages/search';
import Customer from './pages/Customer';
import Empty from './pages/empty';

const URL = "localhost/rengasvarasto/"; // tämä lähetetään routen avulla muihin komponentteihin

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Router>
        <Header/>
        
        <Navbar />
        
        <Routes>
          
          <Route path="/" element={<Login />}/>
          <Route path="/pages/home" element={<Home />}/>
          <Route path="/pages/newCustomer" element={<NewCustomer/>}/>
          <Route path="/pages/warehouse" element={<Warehouse/>}/>
          <Route path="/pages/search" element={<Search/>}/>
          <Route path="/pages/customer" element={<Customer/>}/>
          <Route path="*" element={<Empty />} />
        </Routes>
        
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
