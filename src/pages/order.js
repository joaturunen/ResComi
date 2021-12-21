import React, {useState, useEffect} from 'react';
import ComponentServices from './componentServices';
import SearchCustomer from './searchCustomer';
import { boxColorLayot } from '../style/colors';
import { FaTrash, FaTimes } from 'react-icons/fa';
import { buttonStyle } from '../style/colors';
import ModalNewCustomer from './modalNewCustomer';
import ComponentCustomer from './componentCustomer';
import ComponentOrderCar from './componentOrderCar';
import ModalOldCustomer from './modalOldCustomer';
import ModalOrderDone from './modalOrderDone';
import {URL} from '../back/Config';

// order page
export default function Order({setCustomer_id, setCustomerData, customerData}) {
    const [cart, setCart] = useState([]);
    const [employ_id] = useState(3);
    const [showModalOrderDone, setShowModalOrderDone] = useState(false);
    const [info, setInfo] = useState([]);

    // check the cart
    useEffect(() => {
      if ('cart' in localStorage) {
        setCart(JSON.parse(localStorage.getItem('cart')));
      }
    }, []);
  
  
    // add service to cart
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
  
    // remove service from cart
    function removeFromCart(service) {
      const itemsWithoutRemoved = cart.filter(item => item.id !== service.id);
      setCart(itemsWithoutRemoved);
      localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
    }
  
    // empty cart
    function emptyCart() {
      setCart([]);
      localStorage.removeItem('cart');
    }

    // empty all order and cart data  
    function emptyAllData() {
      setCart([]);
      setCustomerData([]);
      localStorage.removeItem('cart');
    }

    // save new order
    function SaveOrder() {
        let status = 0;
        fetch(URL + 'order/order_create.php', { 
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customer_id: customerData[0].customer_id,
                car_id: customerData[0].car_id,
                tires_id: customerData[0].tires_id,
                oldTires_id: customerData[0].oldTires_id,
                slot_id: customerData[0].slot_id,
                employee_id: employ_id,
                cart: cart
            })
        })
        .then (res => {
            status = parseInt(res.status);
            return res.json();
        })
        .then (
            (res) => {
              if (status === 200) {
                emptyAllData();
                setInfo(res);
                setShowModalOrderDone(true);
              } else {
                alert(res.error);
              }
            }, (error) => {
                alert(error);
            }
        );      
    }

    function NoInfo() {
      if (customerData == 0) {
        alert("Lisää asiakkaan tiedot!");
      }
      else if (sum === 0) {
        alert("Lisää palvelu!");
      }
    }

    let sum = 0;

    const orderShow = <>
      <table className="table px-3 table-striped">
        <tbody>
          {cart.map((service, id) => {
            sum+=parseFloat(service.price);
              return (
                <tr key={id}>
                  <td width="70%">{service.service}</td>
                  <td className="text-right">{service.price} €</td>
                  <td className="text-right"><FaTimes onClick={() => removeFromCart(service)}/></td>
                </tr>
              )
          })}
          <tr>
            <td><b>Yhteensä: </b></td>
            <td className="text-right">{sum.toFixed(2)} €</td>
            <td className="text-right"><FaTrash onClick={() => emptyCart()}/></td>
          </tr>
        </tbody>
      </table>
    </>
        return (
            <>
            <h3>Uusi tilaus</h3>
            <div class="row">
              <div class="col-3">
                <div className="padding" style={boxColorLayot}>
                  <h4>Lisää asiakas</h4>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <ModalNewCustomer setCustomer_id={setCustomer_id} setCustomerData={setCustomerData}/>
                      </div>
                  </div>
                <div>
                  <SearchCustomer setCustomer_id={setCustomer_id} hightWay="order" setCustomerData={setCustomerData}/>
                  <ModalOldCustomer setCustomer_id={setCustomer_id} setCustomerData={setCustomerData} />
                </div>
              </div>
              <div class="col-4">
                <ComponentServices addToCart={addToCart} />
              </div>

              <div class="col">
                <div className="padding" style={boxColorLayot}>
                  <h4>Asiakas</h4>
                  <ComponentCustomer customerData={customerData}/>
                  <ComponentOrderCar customerData={customerData}/>
                  <h4>Tilaus</h4>
                  <div>
                    { (cart[0] == null) ? (
                    <div class="alert alert-warning" role="alert">
                      Tilauksia ei ole valittu
                    </div>) : (<p>{orderShow}</p>)}
                  </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class='btn' style={buttonStyle} onClick={() => emptyAllData()}>Tyhjennä kentät</button>
                      <button class='btn' style={buttonStyle} onClick={customerData == 0 || sum == 0 ? () => NoInfo() : () => SaveOrder()}>Tallenna tilaus</button>
                      <ModalOrderDone showModal={showModalOrderDone} closeModal={setShowModalOrderDone} info={info}/>
                    </div>
                </div>
              </div>
            </div>
          </>
        )

}