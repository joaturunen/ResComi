import React, {useState, useEffect} from 'react';
import Services from './services';
import NewCustomer from './newCustomer';
import NewCar from './newCar';
import SearchCustomer from './searchCustomer';
import { boxColorLayot } from '../style/colors';
import { FaTrash, FaTimes } from 'react-icons/fa';
import { buttonStyle } from '../style/colors';
import Customer from './oneCustomer';
import ModalNewCustomer from './modalNewCustomer';
import ComponentCustomer from './componentCustomer';


// kuinka tallennetaan myös auton tiedot samalla?

export default function Order({
    url,
    cart,
    empty,
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
    customerData }) {

    const [finished, setFinished] = useState(false);
    const [cus_id, setCus_id] = useState('');
    const [employ_id, setEmploy_id] = useState('');

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [city, setCity] = useState('');

    function SaveOrder(e) {
        e.preventDefault();
        let status = 0;
        fetch(url + 'order/order_create.php', { 
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customer_id: cus_id,
                employee_id: employ_id,
                cart: cart,
            })
        })
        .then (res => {
            status = parseInt(res.status);
            return res.json();
        })
        .then (
            (res) => {
                console.log(res);
                empty();
                setFinished(true);
            }, (error) => {
                alert(error);
            }
        );
    }

    let sum = 0;

    // if (finished === false) {
        return (
            <>
            <h3>Uusi tilaus</h3>
            <div class="d-flex justify-content-start">
              <div class="p-2"><Services url={url} addToCart={addToCart} /></div>

              <div class="p-2">
                <div>
                  <SearchCustomer url={url} setCustomer_id={setCustomer_id}/>
                </div>
                <div className="padding" style={boxColorLayot}>

                <h4>Lisää uusi asiakas</h4>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <ModalNewCustomer url={url} setCustomer_id={setCustomer_id} setCustomerData={setCustomerData} customerData={customerData}/>
                    </div>
                </div>
              </div>

              <div class="p-2">
              <div className="padding" style={boxColorLayot}>
                <h3>Tilaus</h3>
                  <table className="table px-3 table-striped">
                    <tbody>
                      {cart.map((service, id) => {
                        sum+=parseFloat(service.price);
                          return (
                            <tr key={id}>
                            <td>{service.service}</td>
                            <td>{service.price}</td>
                            <td><FaTimes onClick={() => removeFromCart(service)}/></td>
                            </tr>
                          )
                       })}
                       <tr>
                        <td></td>
                        <td>{sum.toFixed(2)} €</td>
                        <td><FaTrash onClick={() => empty()}/></td>
                      </tr>
                    </tbody>
                  </table>
                <ComponentCustomer customerData={customerData}/>
                 <form onSubmit={SaveOrder}>
                  <input placeholder="asiakasnumero" value={cus_id} onChange={e => setCus_id(e.target.value)} />
                  <input placeholder="ttnumber" value={employ_id} onChange={e => setEmploy_id(e.target.value)} />
                  <button class='btn' style={buttonStyle}>Tallenna tilaus</button>
                  </form>
                </div>
              </div>
            </div>
            
            </>
        )

}