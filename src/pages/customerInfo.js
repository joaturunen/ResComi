import React , {useEffect, useState } from 'react';
import Car from './car';
import Tires from './tires';

// EI SAA KOSKEA

// tämä avautuu hakutuloksesta, ei näy navissa

export default function CustomerInfo({url, customer_id, customerCars, setCustomerCars, customerTires, setCustomerTires}) {
    //const [customerCars, setCustomerCars] = useState([]);
    //const [customerTires, setCustomerTires] = useState([]);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");
    const [customersaved, setCustomersaved] = useState("");
    const [cus_id, setCus_id] = useState(customer_id);
    const [car_id, setCar_id] = useState(''); // mistä tämä menee tires.js ?
    

    useEffect(() => {
        //let address = url + 'customer/customer_read_cus_cars_tires.php';
        let status = 0;
        fetch('http://localhost/rengasvarasto-back/API/customer/customer_read_cus_cars_tires.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cus_id: cus_id
            })
        })
        .then(res => {
            status = parseInt(res.status);
            return res.json();
        })
        .then(
            (res) => {
                if (status === 200) {
                  setFirstname(res.customer.firstname);
                  setLastname(res.customer.lastname);
                  setPhone(res.customer.phone);
                  setEmail(res.customer.email);
                  setAddress(res.customer.address);
                  setZipcode(res.customer.zipcode);
                  setCity(res.customer.city);
                  setCustomersaved(res.customer.customersaved);

                  setCustomerCars(res.cars);
                  setCustomerTires(res.tires);
                } else {
                alert(res.error);
                }
            }, (error) => {
                alert(error);
            }
        );

    }, [customer_id]);

    return (
        <>
          <div>
            <h5>Asiakkaan tiedot</h5>
            <table className="table px-3 table-striped">
                <tbody>
                    <tr>
                        <td>{firstname}</td>
                        <td>{lastname}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td>{address}</td>
                        <td>{zipcode}</td>
                        <td>{city}</td>
                        <td>{customersaved}</td>
                    </tr>
                </tbody>
            </table>
            
          </div>
          <div>
            <Car url={url} customerCars={customerCars} setCustomerCars={setCustomerCars} customer_id={customer_id}/>
          </div>
          <div>
            <Tires customerTires={customerTires} setCustomerTires={setCustomerTires} car_id={car_id} />
          </div>
        </>
    );
}