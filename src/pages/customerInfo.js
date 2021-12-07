import React, { useEffect, useState } from 'react';
import { buttonStyle } from '../style/colors';
import Car from './car';
import Tires from './tires';

// EI SAA KOSKEA

// tämä avautuu hakutuloksesta, ei näy navissa

export default function CustomerInfo({ url, customer_id, customerCars, setCustomerCars, customerTires, setCustomerTires }) {
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
<<<<<<< HEAD
    const [car_id, setCar_id] = useState(''); // mistä tämä menee tires.js ?

=======
    
>>>>>>> 7b6dc1b666984d8e7f691ab52f43fa9add24bd6c

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
            <div className='row'>
                <h5>Asiakkaan tiedot</h5>
                <div className='col'>
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

                <div className='col'>
                <div>
                    <label>Puhelinumero</label>
                    <input type="text" className="form-control" value={phone} />
                </div>
                <div>
                    <label>Sähköposti</label>
                    <input type="text" className="form-control" value={email} />
                </div>

                <div>
                <label>Suoramarkkinointi lupa</label>
                    <div>
                        <input type="checkbox" className="form-check-input mx-3" id="suoramarkkinointi1" value="phone" />
                        <label className="form-check-label" for="suoramarkkinointi1">Puhelin</label>
                    </div>
                    <div>
                        <input type="checkbox" className="form-check-input mx-3" id="suoramarkkinointi2" value="email" />
                        <label className="form-check-label" for="suoramarkkinointi2">Sähköposti</label>
                    </div>
                </div>
                </div>

                <div className="col">
                    <label>Ajoneuvot</label>
                    <ul>
                        <li>LOL-666</li>
                        <li>LOL-666</li>
                        <li>LOL-666</li>
                    </ul>
                </div>

                <div className='col'>
                <label>Asiakkuus luotu</label>
                    <p>{customersaved}</p>
                </div>

                <div className="col">
                <div>
                    <button className="btn btn-primary" style={buttonStyle}>Lisää ajoneuvo</button>
                </div>
                <div>
                    <button className="btn btn-primary" style={buttonStyle}>Tallenna</button>
                </div>
                </div>
                

            </div>
            {/* <div>
                <Car url={url} customerCars={customerCars} setCustomerCars={setCustomerCars} customer_id={customer_id}/>
            </div>
            <div>
                <Tires customerTires={customerTires} setCustomerTires={setCustomerTires} car_id={car_id} />
            </div> */}
        </>
    );
}