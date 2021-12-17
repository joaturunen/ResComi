import React, { useEffect, useState } from 'react';
import { buttonStyle } from '../style/colors';
import {URL} from '../back/Config';
// tämä avautuu hakutuloksesta, ei näy navissa

export default function CustomerInfo({customer_id, setCustomerCars, setCustomerOrders}) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");
    const [customersaved, setCustomersaved] = useState("");
    

    useEffect(() => {
        let status = 0;
        fetch(URL + 'customer/customer_read_cus_cars_tires.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cus_id: customer_id
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
                        setCustomerOrders(res.orders);
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
            <div className='row'>
                <h5>Asiakkaan tiedot</h5>
                <div className='col-md-4'>
                    <div>
                        <label>Etunimi</label>
                        <input type="text" className="form-control" value={firstname} />
                    </div>
                    <div>
                        <label>Sukunimi</label>
                        <input type="text" className="form-control" value={lastname} />
                    </div>
                    <div>
                        <label>Lähiosoite</label>
                        <input type="text" className="form-control" value={address} />
                    </div>
                    <div>
                        <label>Postinumero</label>
                        <input type="text" className="form-control" value={zipcode} />
                    </div>
                    <div>
                        <label>Postitoimipaikka</label>
                        <input type="text" className="form-control" value={city} />
                    </div>
                </div>

                <div className='col-md-4'>
                    <div>
                        <label>Puhelinumero</label>
                        <input type="text" className="form-control" value={phone} />
                    </div>
                    <div>
                        <label>Sähköposti</label>
                        <input type="text" className="form-control" value={email} />
                    </div>
                </div>

                <div className='col-md-4'>
                    <label>Asiakkuus luotu</label>
                    <p>{customersaved}</p>
                </div>

                <div className=" d-flex justify-content-end">
                    <button className="btn" style={buttonStyle}>Tallenna</button>
                </div>
                

            </div>
            
        </>
    );
}