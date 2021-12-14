import 'bootstrap/dist/css/bootstrap.css';
import react, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import SideMenu from "./components/SideMenu";
import Header from './components/header';
import Login from './pages/login';
import Home from './pages/home';
import NewCustomer from './pages/newCustomer';
import Warehouse from './pages/warehouse';
import SearchPage from './pages/searchPage';
import Customer from './pages/oneCustomer';
import Empty from './pages/empty';
import Order from './pages/order';
import {URL} from './back/Config';
import Print from './printable/Print';
import ShelfSlots from './pages/shelfSlots';
import Orders from './pages/completedOrders';
import Tires from './pages/tires';


function App() {
  const [user, setUser] = useState('');
  const [employee_id, setEmployee_id] = useState('');
  const [customer_id, setCustomer_id] = useState('');
  const [car_id, setCar_id] = useState('');
  const [cart, setCart] = useState([]);
  const [inactive, setInactive] = useState(false);
  const [headerInactive, setHeaderInactive] = useState(false);
  const [customerCars, setCustomerCars] = useState([]);
  const [customerTires, setCustomerTires] = useState([]);
  const [currentShelfID, setCurrentShelfID] = useState(0);
  const [customerData, setCustomerData] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, []);


  // lisää palvelu ostoskoriin
  function addToCart(service) {

    if(cart.length === 0){
      const newCart = [...cart, service];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
    } else if(service.category_id === 1){
      let remove = null;
      for (let i = 0; i < cart.length; i++){
        if(cart[i].category_id === 1){
          remove = i;
        }
      }
      if(remove !== null){
        cart.splice(remove, 1);
        const newCart = [...cart, service];
        setCart(newCart);
        localStorage.setItem('cart',JSON.stringify(newCart));
      }

    } else if(!cart.includes(service)){
      const newCart = [...cart, service];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
    }
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

  // avaa raportin tulostusikkunaan
  function openReport(order) {

  }

  return (
    <>
      {/* <Router> */}
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
                      url={URL} 
                      cart={cart} 
                      addToCart={addToCart} 
                      empty={emptyCart} 
                      removeFromCart={removeFromCart}
                      setCustomer_id={setCustomer_id}
                      employee_id={employee_id}
                      setCustomerData={setCustomerData}
                      customerData={customerData}/>
                    }/>
                  <Route path="/newCustomer" 
                    element={<NewCustomer/>
                  }/>
                  <Route path="/tires" 
                    element={<Tires/>
                  }/>
                  <Route path="/warehouse"
                    element={<Warehouse
                      url={URL}
                      setCurrentShelfID={setCurrentShelfID}/>
                  }/>
                  <Route path="/shelfSlots" 
                    element={<ShelfSlots 
                      url={URL}
                      setCurrentShelfID={setCurrentShelfID}
                      currentShelfID={currentShelfID}/>
                  }/>
                  <Route path="/completedOrders"
                    element={<Orders
                      url={URL} 
                      openReport={openReport}/>
                  }/>
                  <Route path="/searchPage" 
                    element={<SearchPage 
                      url={URL} 
                      setCustomer_id={setCustomer_id}
                      customer_id={customer_id}/>
                  }/>
                  <Route path="/oneCustomer" 
                    element={<Customer url={URL} 
                      customer_id={customer_id}
                      customerCars={customerCars}
                      setCustomerCars={setCustomerCars}
                      car_id={car_id}
                      customerTires={customerTires}
                      setCustomerTires={setCustomerTires}/>
                  }/>
                  <Route path="/" element={<Home/> }>
                    {/* {user ? <Users /> : <Navigate to="/login" />} */}
                  </Route>
                  {/* <Route path="/login" 
                    element={<Login onLogin={login}/>
                  }/> */}
                  <Route path="*" element={<Empty />} />
                  <Route path="/printable/Print" element={<Print />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
