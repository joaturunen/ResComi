import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import SideMenu from "./components/SideMenu";
import Header from './components/header';
import Login from './pages/login';
import Home from './pages/home';
import Warehouse from './pages/warehouse';
import SearchPage from './pages/searchPage';
import Customer from './pages/oneCustomer';
import Empty from './pages/empty';
import Order from './pages/order';
import Print from './printable/Print';
import ShelfSlots from './pages/shelfSlots';
import Orders from './pages/completedOrders';
import IncompletedOrders from './pages/incompletedOrders';
import { GiRoyalLove } from 'react-icons/gi';


function App() {
  //const [user, setUser] = useState('');
  const [employee_id/* , setEmployee_id */] = useState('');
  const [customer_id, setCustomer_id] = useState('');
  const [inactive, setInactive] = useState(false);
  const [/* headerInactive, */ setHeaderInactive] = useState(false);
  const [customerCars, setCustomerCars] = useState([]);
  const [customerOrders, setCustomerOrders] = useState([]);
  const [currentShelfID, setCurrentShelfID] = useState(0);
  const [customerData, setCustomerData] = useState([]);
  const { pathname } = useLocation();

  


  return (
    <>
        <div className="max-wid">
          <div className="container-fluid">
            { pathname !== "/printable/Print" && <Header 
              onCollapse={(headerInactive) => {
              setHeaderInactive(headerInactive);
            }}/>}
            <div className="row">
              { (pathname !== "/login") && (pathname !== "/") && (pathname !== "/printable/Print") && <SideMenu 
                onCollapse={(inactive) => {
                console.log(inactive);
                setInactive(inactive);
              }}/>}
              <div className={`scrollingRoute stylingContent ${inactive ? "col" : "col-10" }`}>
                <Routes>
                  <Route path="/login" 
                    element={<Login/>
                  }/> 
                  <Route path="/order" 
                    element={<Order 
                      setCustomer_id={setCustomer_id}
                      setCustomerData={setCustomerData}
                      customerData={customerData}/>
                    }/>
                  <Route path="/warehouse"
                    element={<Warehouse
                      setCurrentShelfID={setCurrentShelfID}/>
                  }/>
                  <Route path="/shelfSlots" 
                    element={<ShelfSlots 
                      setCurrentShelfID={setCurrentShelfID}
                      currentShelfID={currentShelfID}
                      setCustomer_id={setCustomer_id}/>
                  }/>
                  <Route path="/incompletedOrders"
                    element={<IncompletedOrders/>}/>
                  <Route path="/completedOrders"
                    element={<Orders/>}/>
                  <Route path="/searchPage" 
                    element={<SearchPage 
                      setCustomer_id={setCustomer_id}
                      customer_id={customer_id}/>
                  }/>
                  <Route path="/oneCustomer" 
                    element={<Customer
                      customer_id={customer_id}
                      customerCars={customerCars}
                      setCustomerCars={setCustomerCars}
                      customerOrders={customerOrders}
                      setCustomerOrders={setCustomerOrders}/>
                  }/>
                  <Route path="/" element={<Home/> }>
                    {/* {user ? <Users /> : <Navigate to="/login" />} */}
                  </Route>
                  <Route path="/login" 
                    element={<Login />
                  }/>
                  <Route path="*" element={<Empty />} />
                  <Route path="/printable/Print/:order_id" element={<Print />}>
                  </Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
