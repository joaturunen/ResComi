import React , {useEffect, useState } from 'react';
import Car from './car';

// tämä avautuu hakutuloksesta, ei näy navissa

export default function Customer({url, customer}) {

  const [car, setCar] = useState([]);
  
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [address, setAddress] = useState('');
  // const [zipcode, setZipcode] = useState('');
  // const [city, setCity] = useState('');
  // const [saved, setSaved] = useState('');
  // const [employeeId, setEmployeeId] = useState('');


  // haetaan tietokannasta yhden asiakkaan tiedot
  // useEffect(() => {

  //   async function getSingleCustomer() {
  //     let address = '';

  //     address = url + 'customer/customer_read_single.php?id=' + customerId;
    
  //     try {
  //       const response = await fetch(address); 
  //       const json = await response.json();
  //       if (response.ok) {
  //         setFirstname(json.firstname);
  //         setLastname(json.lastname);
  //         setPhone(json.phone);
  //         setEmail(json.email);
  //         setAddress(json.address);
  //         setZipcode(json.zipcode);
  //         setCity(json.city);
  //         setSaved(json.customersaved);
  //         setEmployeeId(json.employee_id);
  //       } else {
  //         alert(json.error);
  //       }
  //     } catch (error) {
  //       alert(error);
  //     }
  //   }
    
  //   getSingleCustomer();

  // }, [url, customerId]);

  useEffect(() => {
      let address = url + 'car/car_read_single.php?';
      let status = 0;
      fetch(address, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer_id: customer.id
        })
      })
      .then(res => {
        status = parseInt(res.status);
        return res.json();
      })
      .then(
        (res) => {
          if (status === 200) {
            setCar(car => [...car, res]);
          } else {
            alert(res.error);
          }
        }, (error) => {
          alert(error);
        }
      );
    

  }, []);

  return (
    <div>
      <div>
        <h4>Asiakkaan tiedot</h4>
        <p>{customer.firstname}</p>
        <p>{customer.lastname}</p>
        <p>{customer.phone}</p>
        <p>{customer.email}</p>
        <p>{customer.address}</p>
        <p>{customer.zipcode}</p>
        <p>{customer.city}</p>
        <p>{customer.saved}</p>
        <p>{customer.employeeId}</p>
      </div>
      <div>
        <Car car={car} />
      </div>
    </div>
  );
}
