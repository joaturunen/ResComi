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
import Customer from './pages/Customer';
import Car from './pages/car';
import Empty from './pages/empty';
import Order from './pages/order';
import Services from './pages/services';
import {URL} from './back/Config';

function App() {
  const [user, setUser] = useState('');
  const [customerId, setCustomerId] = useState(null);
  const [carId, setCarId] = useState(null);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, []);


  // lisää tuote ostoskoriin
  function addToCart(tuote) {
      const newCart = [...cart,tuote];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
    
  }

  // poista tuote ostoskorista
  function removeFromCart(tuote) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== tuote.id);
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
      <div className="container-fluid">
        <Header/>
        <div className="row">
          <div className='col col-lg-2 col-md-2 align-self-start no-padding'>
            <Navbar />
          </div>
          <div className='col col-md-10'>
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
                removeFromCart={removeFromCart}/>
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
              element={<Warehouse/>
            }/>
            <Route path="/search" 
              element={<Search 
                url={URL} 
                setCarId={setCarId} 
                setCustomerId={setCustomerId}/>
              }/>
            {/* <Route path="/customers" element={<Customers />}>
              <Route index element={<CustomerList url={URL} setCustomer={setCustomer}/>}/>
              <Route path=":customer_id" element={<Customer customer={customer}  />}/>
            </Route> */}
            <Route path="/customer" 
              element={<Customer url={URL} customer={customerId}/>
            }/>
            <Route path="/car" 
              element={<Car url={URL} car={carId}/>
            }/>
            <Route path="/" 
              element={<Home />}>
              {/* {user ? <Users /> : <Navigate to="/login" />} */}
            </Route>
            {/* <Route path="/login" 
              element={<Login onLogin={login}/>
            }/> */}
            <Route path="*" element={<Empty />} />
          
          </Routes>
        </div>
        </div>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
