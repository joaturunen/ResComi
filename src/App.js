import 'bootstrap/dist/css/bootstrap.css';
import react, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Outlet, Navigate} from 'react-router-dom';
import SideMenu, { menuItems } from "./components/SideMenu";
import Footer from './components/footer';
import Header from './components/header';
import Login from './pages/login';
import Home from './pages/home';
import NewCustomer from './pages/newCustomer';
import Warehouse from './pages/warehouse';
import SearchCustomer from './pages/searchCustomer';
import SearchCar from './pages/searchCar';
import Customers from './pages/customers';
import CustomerList from './pages/customerlist';
import Customer from './pages/customer';
import CustomerInfo from './pages/customerInfo';
import Car from './pages/car';
import Empty from './pages/empty';
import Order from './pages/order';
import Services from './pages/services';
import {URL} from './back/Config';
import Print from './printable/Print';
import Tab from './components/tab/Tab';


function App() {
  const [user, setUser] = useState('');
  const [customer, setCustomer] = useState(null);
  const [car, setCar] = useState(null);
  const [cart, setCart] = useState([]);
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, []);


  // lisää palvelu ostoskoriin
  function addToCart(service) {
      const newCart = [...cart,service];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
    
  }

  // poista palvelu ostoskorista
  function removeFromCart(service) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== service.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  // tyhjennä koko ostoskori
  function emptyCart() {
    setCart([]);
    localStorage.removeItem('cart');
  }

  return (
    <>
      <Router>
      <div className="max-wid">
      <div className="container-fluid">
        <Header/>
          <div className="row">
              <SideMenu 
                onCollapse={(inactive) => {
                console.log(inactive);
                setInactive(inactive);
              }}/>
            <div className='col-10'>
            <div className='row justify-content-center scrollingRoute'>
          <Routes>
            <Route path="/login" 
              element={<Login/>
            }/> 
            <Route path="/order" 
              element={<Order 
                url={URL} 
                cart={cart} 
                addToCart={addToCart} 
                empty={emptyCart} 
                removeFromCart={removeFromCart}
                setCustomer={setCustomer}
                customer={customer}/>
              }/>
            <Route path="/services" 
              element={<Services
                url={URL}
                addToCart={addToCart}/>
              }/>
            <Route path="/newCustomer" 
              element={<NewCustomer/>
            }/>
            <Route path="/warehouse"
              element={<Warehouse
                url={URL}/>
            }/>
            <Route path="/searchCustomer" 
              element={<SearchCustomer 
                url={URL} 
                setCustomer={setCustomer}/>
            }/>
            <Route path="/searchCar" 
              element={<SearchCar 
                url={URL} 
                setCar={setCar} 
                setCustomer={setCustomer}/>
              }/>
            {/* <Route path="/customers" element={<Customers />}>
              <Route index element={<CustomerList url={URL} setCustomer={setCustomer}/>}/>
              <Route path=":customer_id" element={<Customer customer={customer}  />}/>
            </Route> */}
            <Route path="/customer" 
              element={<Customer url={URL} customer={customer}/>
            }/>
            <Route path="/customerInfo" 
              element={<CustomerInfo url={URL} customer={customer}/>
            }/>
            <Route path="/car" 
              element={<Car url={URL} car={car}/>
            }/>
            <Route path="/" 
              element={<Home />}>
              {/* {user ? <Users /> : <Navigate to="/login" />} */}
            </Route>
            {/* <Route path="/login" 
              element={<Login onLogin={login}/>
            }/> */}
            <Route path="*" element={<Empty />} />
            <Route path="/printable/Print" element={<Print />} />
            <Route path="/tab/Tab" element={<Tab />} />
          </Routes>
          </div>
        </div>
        </div>
        </div>
        </div>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
