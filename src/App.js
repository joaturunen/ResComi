import 'bootstrap/dist/css/bootstrap.css';
import react, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Outlet, Navigate} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Header from './components/header';
import Login from './pages/login';
import Home from './pages/home';
import NewCustomer from './pages/newCustomer';
import Warehouse from './pages/warehouse';
import Search from './pages/search';
import Customers from './pages/customers';
import CustomerList from './pages/customerlist';
import Customer from './pages/customer';
import Car from './pages/car';
import Empty from './pages/empty';
import {URL} from './back/Config';



function App() {
  const [user, setUser] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [carId, setCarId] = useState('');

  return (
    <div >
      <Router>
        <Header/>
        
        <Navbar />
        
        <div className="container-fluid">
          <Routes>
            <Route path="/login" element={<Login/>}/> 
            <Route path="/newCustomer" element={<NewCustomer/>}/>
            <Route path="/warehouse" element={<Warehouse/>}/>
            <Route path="/search" element={<Search url={URL} setCarId={setCarId} setCustomerId={setCustomerId}/>}/>
            {/* <Route path="/customers" element={<Customers />}>
              <Route index element={<CustomerList url={URL} setCustomer={setCustomer}/>}/>
              <Route path=":customer_id" element={<Customer customer={customer}  />}/>
            </Route> */}
            <Route path="/customer" element={<Customer url={URL} customer={customerId}/>} />
            <Route path="/car" element={<Car url={URL} car={carId}/> }/>
            <Route path="/" element={<Home />}>
              {/* {user ? <Users /> : <Navigate to="/login" />} */}
            </Route>
            {/* <Route path="/login" element={<Login onLogin={login}/>}/> */}
            <Route path="*" element={<Empty />} />
          
          </Routes>
        </div>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
