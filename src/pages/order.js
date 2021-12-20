import React, {useState} from 'react';
import Services from './services';
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

// kuinka tallennetaan myös auton tiedot samalla?

export default function Order({
    url,
    cart,
    emptyCart,
    addToCart,
    removeFromCart,
    setCustomer_id,
    customer_id,
    customerCars,
    setCustomerCars,
    customerTires,
    setCustomerTires,
    employee_id,
    setCustomerData,
    customerData,
    emptyAllData }) {

    //const [cus_id, setCus_id] = useState('');
    const [employ_id] = useState(3);
    const [showModalOrderDone, setShowModalOrderDone] = useState(false);
    const [info, setInfo] = useState([]);

    function SaveOrder() {
      setShowModalOrderDone(true);
        let status = 0;
        fetch(url + 'order/order_create.php', { 
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
                console.log(res);
                //emptyAllData();
                setShowModalOrderDone(true);
                setInfo(res);
            }, (error) => {
                alert(error);
            }
        );
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
            <h3>Uusi tilaus <button class='btn' style={buttonStyle} onClick={() => emptyAllData()}>Tyhjennä kentät</button></h3>
            <div class="row">
              <div class="col-3">
                <div className="padding" style={boxColorLayot}>
                  <h4>Lisää asiakas</h4>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <ModalNewCustomer setCustomer_id={setCustomer_id} setCustomerData={setCustomerData}/>
                      </div>
                  </div>
                <div>
                  <SearchCustomer url={url} setCustomer_id={setCustomer_id} hightWay="order" setCustomerData={setCustomerData}/>
                  <ModalOldCustomer setCustomer_id={setCustomer_id} setCustomerData={setCustomerData} />
                </div>
              </div>
              <div class="col-4">
                <Services url={url} addToCart={addToCart} />
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
                      <button class='btn' style={buttonStyle} onClick={() => SaveOrder()}>Tallenna tilaus</button>
                      <ModalOrderDone showModal={showModalOrderDone} closeModal={setShowModalOrderDone} info={info}/>
                    </div>
                </div>
              </div>
            </div>
          </>
        )

}