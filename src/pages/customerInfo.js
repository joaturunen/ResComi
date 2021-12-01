import React , {useEffect, useState } from 'react';

// EI SAA KOSKEA

// tämä avautuu hakutuloksesta, ei näy navissa

export default function CustomerInfo({url, customer_id}) {
    const [customerCars, setCustomerCars] = useState([]);
    const [customerTires, setCustomerTires] = useState([]);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");
    const [customersaved, setCustomersaved] = useState("");
    const [cus_id, setCus_id] = useState(customer_id);


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
            <p>{firstname}</p>
            <p>{lastname}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{address}</p>
            <p>{zipcode}</p>
            <p>{city}</p>
            <p>{customersaved}</p>
            {/* <p>{customer.lastname}</p>
            <p>{customer.phone}</p>
            <p>{customer.email}</p>
            <p>{customer.address}</p>
            <p>{customer.zipcode}</p>
            <p>{customer.city}</p>
            <p>{customer.saved}</p>
            <p>{customer.employeeId}</p> */}
          </div>
          <div>
            <h5>Auton tiedot</h5>
            <tbody>
              {customerCars.map(car => (
               <tr key={car.id} >
                  <td>{car.register}::::</td>
                  <td>{car.brand}:::::::</td>
                  <td>{car.model} </td>
                 </tr>
               ))}
            </tbody>
          </div>
          <div>
            <h5>Renkaiden tiedot tiedot</h5>
            <tbody>
              {customerTires.map(tires => (
               <tr key={tires.id} >
                  <td>{tires.brand}::::</td>
                  <td>{tires.model}:::::::</td>
                  <td>{tires.type} </td>
                 </tr>
               ))}
            </tbody>
          </div>
        </>
    );
}